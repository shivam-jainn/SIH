
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

# Convert the temperature values to a NumPy array and reshape it for Isolation Forest
temperature_values = np.array(temperature_values).reshape(-1, 1)

# Split data into training and testing sets
X_train, X_test = train_test_split(temperature_values, test_size=0.2, random_state=42)

# Initialize the Isolation Forest model with tuned parameters
isolation_forest = IsolationForest(contamination=0.05, random_state=42, n_estimators=100)

# Fit the model to the training data
isolation_forest.fit(X_train)

# Predict anomalies (1 for normal, -1 for anomaly) on the test data
predictions = isolation_forest.predict(X_test)

# Visualize the results
plt.figure(figsize=(12, 6))
plt.plot(range(len(data)), temperature_values, label='Temperature')
plt.scatter(np.where(predictions == -1)[0], X_test[predictions == -1], color='red', label='Anomalies')
plt.xlabel('Index (or Timestamp)')
plt.ylabel('Temperature')
plt.title('Temperature Anomaly Detection using Isolation Forest')
plt.legend()
plt.grid(True)
plt.show()

# Evaluation (optional)
true_labels = np.ones(len(X_test))  # Assuming all test data is normal
true_labels[predictions == -1] = -1  # Assign true labels to anomalies
print("Confusion Matrix:")
print(confusion_matrix(true_labels, predictions))
print("\nClassification Report:")
print(classification_report(true_labels, predictions))

