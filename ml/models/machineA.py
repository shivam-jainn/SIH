import json
import numpy as np
from sklearn.ensemble import IsolationForest
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix, classification_report
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

# Extract the temperature values from the JSON data
temperature_values = [entry['Machine_Temperature_C'] for entry in data]
anomalies = [entry['Temp_Anomaly'] for entry in data]

# Convert the temperature values to a NumPy array and reshape it for Isolation Forest
temperature_values = np.array(temperature_values).reshape(-1, 1)
anomalies = np.array(anomalies)

# Split data into training and testing sets
X = temperature_values  # Features
y = anomalies
contamination = 0.05     # Define the contamination rate (proportion of anomalies)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
# print(X_train)
# print(X_test)
# print(y_train)
print(y_test)

# Initialize the Isolation Forest model with tuned parameters
isolation_forest = IsolationForest(contamination=contamination, random_state=42, n_estimators=100)

# Fit the model to the training data
isolation_forest.fit(X_train)

# Predict anomalies (1 for normal, -1 for anomaly) on the test data
y_pred = isolation_forest.predict(X_test)

# Visualize the results
plt.figure(figsize=(12, 6))
plt.plot(range(len(X)), temperature_values, label='Temperature')
plt.scatter(np.where(y_pred == -1)[0], X_test[y_pred == -1], color='red', label='Anomalies')
plt.xlabel('Index (or Timestamp)')
plt.ylabel('Temperature')
plt.title('Temperature Anomaly Detection using Isolation Forest')
plt.legend()
plt.grid(True)
plt.show()

# Evaluation (optional)
true_labels = np.zeros(len(X_test))  # All labeled as normal
true_labels[y_pred == -1] = -1   # Assign true labels to anomalies
print("Confusion Matrix:")
print(confusion_matrix(y_test, y_pred))

print(y_pred)
# print("\nClassification Report:")
# print(classification_report(true_labels, y_pred))
