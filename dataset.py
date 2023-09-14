import json
from faker import Faker
import random
import pandas as pd

# Initialize Faker
fake = Faker()

# Create an empty list to store the data
data = []

# Generate synthetic data with a constant Machine ID
machine_id = "A_001"  # Replace with your desired Machine ID

for _ in range(1000):  # You can adjust the number of data points as needed
    timestamp = fake.date_time_between(start_date="-1d", end_date="now")
    machine_temperature = round(random.uniform(50, 100), 2)  # Machine temperature in Celsius
    soundwave = round(random.uniform(30, 100), 2)  # Soundwave intensity in dB
    vibration = round(random.uniform(0, 2), 2)  # Vibration intensity in mm/s^2
    environment_temperature = round(random.uniform(20, 30), 2)  # Environment temperature in Celsius
    humidity = round(random.uniform(30, 60), 2)  # Relative humidity in percentage

    data.append({
        "Machine_ID": machine_id,
        "Timestamp": timestamp.isoformat(),
        "Machine_Temperature_C": machine_temperature,
        "Soundwave_dB": soundwave,
        "Vibration_mm/s^2": vibration,
        "Environment_Temperature_C": environment_temperature,
        "Humidity_%": humidity
    })

# Save the data as a JSON file
with open("machine_environment_data.json", "w") as json_file:
    json.dump(data, json_file, indent=4)

# Display the first few data points
print(data[:5])
