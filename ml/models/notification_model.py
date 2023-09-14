import json
import numpy as np
from sklearn.ensemble import IsolationForest
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

temperature_values = [entry['Machine_Temperature_C'] for entry in data]
anomalies = [entry['Temp_Anomaly'] for entry in data]

temperature_values = np.array(temperature_values).reshape(-1, 1)
anomalies = np.array(anomalies)

X = temperature_values  
y = anomalies
contamination = 0.05

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

isolation_forest = IsolationForest(contamination=contamination, random_state=42, n_estimators=100)
isolation_forest.fit(X_train)
y_pred = isolation_forest.predict(X_test)