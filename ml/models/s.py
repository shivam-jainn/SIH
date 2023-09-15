import json
import numpy as np
from sklearn.ensemble import IsolationForest
from sklearn.preprocessing import MinMaxScaler
from keras.layers import Input, Dense
from keras.models import Model
from sklearn.metrics import confusion_matrix, accuracy_score
import os

# Load the data
file_path = '../datasets/machine_environment_data.json'

if os.path.exists(file_path):
    if os.path.getsize(file_path) > 0:
        with open(file_path, 'r') as fp:
            data = json.load(fp)
    else:
        print(f"The file '{file_path}' is empty.")
else:
    print(f"The file '{file_path}' does not exist.")

# Extract temperature values and anomalies
temperature_values = [entry['Machine_Temperature_C'] for entry in data]
temperature_values = np.array(temperature_values).reshape(-1, 1)

anomalies = [entry['Temp_Anomaly'] for entry in data]
anomalies = np.array(anomalies)

# Normalize the data using Min-Max scaling
scaler = MinMaxScaler()
temperature_values_scaled = scaler.fit_transform(temperature_values)
y = anomalies

# Apply Isolation Forest to the original data for anomaly detection
isolation_forest = IsolationForest(contamination=0.05, random_state=42, n_estimators=100)
isolation_forest.fit(temperature_values_scaled)

# Load new data
file_path_new = '../datasets/data_new.json'

if os.path.exists(file_path_new):
    if os.path.getsize(file_path_new) > 0:
        with open(file_path_new, 'r') as fp:
            data_new = json.load(fp)
    else:
        print(f"The file '{file_path_new}' is empty.")
        data_new = []
else:
    print(f"The file '{file_path_new}' does not exist.")
    data_new = []

# Extract temperature values from the new data
temperature_values_new = [entry['Machine_Temperature_C'] for entry in data_new]
temperature_values_new = np.array(temperature_values_new).reshape(-1, 1)

# Normalize the new data using the same scaler
temperature_values_scaled_new = scaler.transform(temperature_values_new)

# Predict anomalies using the Isolation Forest for the new data
y_pred_new_if = isolation_forest.predict(temperature_values_scaled_new)

# Filter out the anomalies for further processing with autoencoder
X_test_autoencoder = temperature_values_scaled_new[y_pred_new_if == -1]  # Select only anomalies

# Define the architecture of the autoencoder
input_layer = Input(shape=(1,))
encoded = Dense(8, activation='relu')(input_layer)
decoded = Dense(1, activation='sigmoid')(encoded)

autoencoder = Model(input_layer, decoded)
autoencoder.compile(optimizer='adam', loss='mean_squared_error')

# Train the autoencoder on the anomalies
autoencoder.fit(X_test_autoencoder, X_test_autoencoder, epochs=100, batch_size=32, shuffle=True)

# Use the autoencoder to encode the new data
encoded_data_new = autoencoder.predict(X_test_autoencoder)

# Visualize the results (you can plot anomalies in the original data or encoded data as needed)
# Add visualization code here

# Optionally, you can evaluate the combined model's performance
y_test = np.ones_like(y_pred_new_if)  # Assuming all new data points are normal
cm = confusion_matrix(y_test, y_pred_new_if)
print("Confusion Matrix (Isolation Forest):")
print(cm)

ac = accuracy_score(y_test, y_pred_new_if)
print("Accuracy (Isolation Forest):", ac * 100, "%")
