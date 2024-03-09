import sqlite3

# Connect to the SQLite database
conn = sqlite3.connect('f1_data.db')
cursor = conn.cursor()

# Define the table name
table_name = 'QueueData_Bahrain'

# Execute the PRAGMA statement to retrieve table information
cursor.execute(f"PRAGMA table_info({table_name})")

# Fetch all the rows
table_info = cursor.fetchall()

# Print the table structure
for column in table_info:
    print(column)

# Close the connection
conn.close()