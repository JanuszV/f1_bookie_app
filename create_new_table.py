import sqlite3

# Connect to the SQLite database
conn = sqlite3.connect('f1_data.db')
cursor = conn.cursor()

# Define the SQL statement to create the table
create_table_query = f"""
CREATE TABLE QueueData_{actual_race} (
    nick TEXT,
    first INTEGER,
    second INTEGER,
    third INTEGER,
    fourth INTEGER,
    fifth INTEGER,
    sixth INTEGER,
    seventh INTEGER,
    eighth INTEGER,
    ninth INTEGER,
    tenth INTEGER,
    random_event TEXT,
    event_driver TEXT
)
"""

# Execute the SQL statement
cursor.execute(create_table_query)

# Commit the changes
conn.commit()

# Close the connection
conn.close()