import json
from faker import Faker
import random
import pandas as pd
import os

# Initialize Faker
fake = Faker()

# Create an empty list to store the data
data = []

machines = [
    {"Machine_ID": "A_001"},
    {"Machine_ID": "B_002"},
    {"Machine_ID": "C_003"},
    {"Machine_ID": "D_004"},
    {"Machine_ID": "E_005"}
]

# Generate synthetic data
for _ in range(14):  # You can adjust the number of data points as needed
    machine = random.choice(machines)
    timestamp = fake.date_time_between(start_date="-1d", end_date="now")
    machine_temperature = round(random.uniform(100, 105), 2)  # Machine temperature in Celsius
    soundwave = round(random.uniform(90, 95), 2)  # Soundwave intensity in dB
    vibration = round(random.uniform(2, 3), 2)  # Vibration intensity in mm/s^2
    environment_temperature = round(random.uniform(20, 30), 2)  # Environment temperature in Celsius
    humidity = round(random.uniform(30, 60), 2)  # Relative humidity in percentage

    # Define your anomaly detection logic here
    # For example, if machine temperature is above 90, consider it an anomaly
    temp_anomaly = 1 if machine_temperature > 100 else 0
    sound_anomaly = 1 if machine_temperature > 90 else 0
    vibration_anomaly = 1 if machine_temperature > 2 else 0



    data.append({
        "Machine_ID": machine["Machine_ID"],
        "Timestamp": timestamp.isoformat(),
        "Machine_Temperature_C": machine_temperature,
        "Soundwave_dB": soundwave,
        "Vibration_mm/s^2": vibration,
        "Environment_Temperature_C": environment_temperature,
        "Humidity_%": humidity,
        "Humidity_%": humidity,
        "Temp_Anomaly": temp_anomaly,
        "Sound_Anomaly": sound_anomaly,
        "Vibration_Anomaly": vibration_anomaly,
    })

script_dir = os.path.dirname(os.path.abspath(__file__))

json_file_path = os.path.join(script_dir, "..", "datasets", "sample_data.json")

with open(json_file_path, "w") as json_file:
    json.dump(data, json_file, indent=4)

# Display the first few data points
print(data[:5])
