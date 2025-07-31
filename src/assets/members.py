import pandas as pd
import os, sys
import json

file_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'members.csv')
df = pd.read_csv(file_path)
json_data = df.to_json(orient='records')

# Save JSON from scratch (overwrite)
json_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'data', 'members.json')

with open(json_path, 'w') as f:
    json.dump(json_data, f, indent=2)