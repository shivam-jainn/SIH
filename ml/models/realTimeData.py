import Manomaly as ma
import os
import json
import numpy as np

file_path = '../datasets/data_new.json'

if os.path.exists(file_path):
    if os.path.getsize(file_path) > 0:
        with open(file_path, 'r') as fp:
            data = json.load(fp)
    else:
        print(f"The file '{file_path}' is empty.")
else:
    print(f"The file '{file_path}' does not exist.")

dataset = data
dataset = np.array(dataset).reshape(-1, 1)

# print(ma.isolation_forest.predict(dataset))