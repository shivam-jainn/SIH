import json
import numpy as np
from sklearn.ensemble import IsolationForest
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from keras.layers import Input, Dense
from keras.models import Model
from sklearn.metrics import confusion_matrix, accuracy_score
import os

file_path = '../datasets/machine_environment_data.json'

if os.path.exists(file_path):
    if os.path.getsize(file_path) > 0:
        with open(file_path, 'r') as fp:
            data = json.load(fp)
    else:
        print(f"The file '{file_path}' is empty.")
else:
    print(f"The file '{file_path}' does not exist.")

temperature_values = [entry['Machine_Temperature_C'] for entry in data]
temperature_values = np.array(temperature_values).reshape(-1, 1)

anomalies = [entry['Temp_Anomaly'] for entry in data]
anomalies = np.array(anomalies)
# Normalize the data using Min-Max scaling
scaler = MinMaxScaler()
temperature_values_scaled = scaler.fit_transform(temperature_values) # X
y = anomalies 

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(temperature_values_scaled, y, test_size=0.2, random_state=42)

# Define the architecture of the autoencoder
input_layer = Input(shape=(1,))
encoded = Dense(8, activation='relu')(input_layer)
decoded = Dense(1, activation='sigmoid')(encoded)

autoencoder = Model(input_layer, decoded)
autoencoder.compile(optimizer='adam', loss='mean_squared_error')

# Train the autoencoder
autoencoder.fit(X_train, X_train, epochs=100, batch_size=32, shuffle=True, validation_data=(X_test, X_test))

# Use the autoencoder to encode the data (get the learned representations)
encoded_data = autoencoder.predict(X_test)

# Apply Isolation Forest to the encoded data for anomaly detection
isolation_forest = IsolationForest(contamination=0.05, random_state=42, n_estimators=100)
isolation_forest.fit(encoded_data)

# Predict anomalies using the Isolation Forest
y_pred = isolation_forest.predict(encoded_data)

# Visualize the results
# (You can plot anomalies in the original data or encoded data as needed)

# Optionally, you can evaluate the combined model's performance
cm = confusion_matrix(y_test, y_pred)
print(cm)
print(y_pred)
ac = accuracy_score(y_test, y_pred)
print("accuracy = ",ac,"%")