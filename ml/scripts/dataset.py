import json
from faker import Faker
import random
import os

# Initialize Faker
fake = Faker()

# Create an empty list to store the data
data = []

# Define the machines and their characteristics
machines = [
    {"Machine_ID": "A_001", "TempRange": (50, 100), "SoundRange": (30, 100), "VibrationRange": (0, 2)},
    {"Machine_ID": "B_002", "TempRange": (40, 90), "SoundRange": (20, 90), "VibrationRange": (0, 1)},
    {"Machine_ID": "C_003", "TempRange": (60, 110), "SoundRange": (40, 120), "VibrationRange": (1, 3)},
    {"Machine_ID": "D_004", "TempRange": (45, 95), "SoundRange": (25, 85), "VibrationRange": (0, 1.5)},
    {"Machine_ID": "E_005", "TempRange": (55, 105), "SoundRange": (35, 110), "VibrationRange": (0.5, 2.5)}
]

for _ in range(1000):  # You can adjust the number of data points as needed
    machine = random.choice(machines)
    machine_id = machine["Machine_ID"]
    temp_range = machine["TempRange"]
    sound_range = machine["SoundRange"]
    vibration_range = machine["VibrationRange"]

    timestamp = fake.date_time_between(start_date="-1d", end_date="now")
    machine_temperature = round(random.uniform(*temp_range), 2)
    soundwave = round(random.uniform(*sound_range), 2)
    vibration = round(random.uniform(*vibration_range), 2)
    environment_temperature = round(random.uniform(20,30), 2)
    humidity = round(random.uniform(30, 60), 2)

    # Define conditions for anomalies for each attribute based on the machine's range
    # temp_anomaly = -1 if machine_temperature < temp_range[0] or machine_temperature > temp_range[1] else 1
    # sound_anomaly = -1 if soundwave < sound_range[0] or soundwave > sound_range[1] else 1
    # vibration_anomaly = -1 if vibration < vibration_range[0] or vibration > vibration_range[1] else 1

    data.append({
        "Machine_ID": machine_id,
        "Timestamp": timestamp.isoformat(),
        "Machine_Temperature_C": machine_temperature,
        "Soundwave_dB": soundwave,
        "Vibration_mm/s^2": vibration,
        "Environment_Temperature_C": environment_temperature,
        "Humidity_%": humidity,
        # "Temp_Anomaly": temp_anomaly,
        # "Sound_Anomaly": sound_anomaly,
        # "Vibration_Anomaly": vibration_anomaly,
    })


script_dir = os.path.dirname(os.path.abspath(__file__))

json_file_path = os.path.join(script_dir, "..", "datasets", "machine_data_noanomaly.json")

with open(json_file_path, "w") as json_file:
    json.dump(data, json_file, indent=4)


# Display the first few data points
print(data[:5])
