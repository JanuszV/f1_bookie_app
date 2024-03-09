from flask import Flask, render_template, jsonify, request
import sqlite3
actual_race = "Saudi"
app = Flask(__name__)
driver_names = {
    "ver": "Max Verstappen",
    "per": "Sergio Pérez",
    "sar": "Logan Sargeant",
    "alb": "Alex Albon",
    "ric": "Daniel Ricciardo",
    "tsu": "Yūki Tsunoda",
    "nor": "Lando Norris",
    "pia": "Oscar Piastri",
    "gas": "Pierre Gasly",
    "oco": "Esteban Ocon",
    "alo": "Fernando Alonso",
    "str": "Lance Stroll",
    "lec": "Charles Leclerc",
    "sai": "Carlos Sainz Jr.",
    "mag": "Kevin Magnussen",
    "hul": "Nico Hülkenberg",
    "zho": "Zhou Guanyu",
    "bot": "Valtteri Bottas",
    "ham": "Lewis Hamilton",
    "rus": "George Russell"
}

event_options = {
    'dnf': 'DNF',
    'awaria-bolid': 'Awaria bolidu',
    'awaria-opon': 'Awaria opon',
    'zespawana': 'Zespawana opona',
    'wypadek': 'Wypadek/Kolizja',
    'bangra': 'Banda/gravel',
    'yel': 'Wystąpienie yellow flaga',
    'red': 'Wystąpienie red flaga',
    'blue': 'Wystąpienie black and white flag',
    'pitstop': 'Długi pitstop'
}

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/submit', methods=['POST'])
def submit_form():
    # Extract data from the POST request
    form_data = request.json

    # Connect to the SQLite database
    conn = sqlite3.connect('f1_data.db')
    cursor = conn.cursor()

    try:
        # Check if the nick already exists in the table
        cursor.execute(f"SELECT COUNT(*) FROM QueueData_{actual_race} WHERE nick = ?", (form_data['nick'],))
        existing_count = cursor.fetchone()[0]

        # Set default values for random_event and event_driver if nick is "Wynik"
        if form_data['nick'] == "Wynik":
            form_data['random_event'] = "Random Event"
            form_data['event_driver'] = "Kierowca"

        if existing_count > 0:
            # If the nick exists, update the existing row
            cursor.execute(f"""
                UPDATE QueueData_{actual_race}
                SET first = ?, second = ?, third = ?, fourth = ?, fifth = ?, sixth = ?, seventh = ?, eighth = ?,
                    ninth = ?, tenth = ?, random_event = ?, event_driver = ?
                WHERE nick = ?
            """, (
                form_data['first'],
                form_data['second'],
                form_data['third'],
                form_data['fourth'],
                form_data['fifth'],
                form_data['sixth'],
                form_data['seventh'],
                form_data['eighth'],
                form_data['ninth'],
                form_data['tenth'],
                form_data['random_event'],
                form_data['event_driver'],
                form_data['nick']
            ))
        else:
            # If the nick doesn't exist, insert a new row
            cursor.execute(f"""
                INSERT INTO QueueData_{actual_race} (nick, first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth, random_event, event_driver)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                form_data['nick'],
                form_data['first'],
                form_data['second'],
                form_data['third'],
                form_data['fourth'],
                form_data['fifth'],
                form_data['sixth'],
                form_data['seventh'],
                form_data['eighth'],
                form_data['ninth'],
                form_data['tenth'],
                form_data['random_event'],
                form_data['event_driver']
            ))

        conn.commit()
        conn.close()
        return jsonify({'success': True}), 200
    except Exception as e:
        conn.rollback()
        conn.close()
        return jsonify({'success': False, 'error': str(e)}), 500
    
@app.route('/view_data')
def view_data():
    try:
        # Connect to the SQLite database
        conn = sqlite3.connect('f1_data.db')
        cursor = conn.cursor()

        # Fetch the QueueData from the database
        cursor.execute(f"SELECT * FROM QueueData_{actual_race}")
        queue_data = cursor.fetchall()

        # Close the database connection
        conn.close()

        # Find the index of the "Results" row in the fetched data
        results_index = None
        for i, data_set in enumerate(queue_data):
            if data_set[0] == "Wynik":  # Assuming the first column is the nick column
                results_index = i
                break

        # If "Results" row found, move it to the first position in the list
        if results_index is not None:
            queue_data.insert(0, queue_data.pop(results_index))

        # If "Results" row is found, calculate points
        if results_index is not None:
            # Iterate through each set in queue_data
            for i, data_set in enumerate(queue_data):
                points = 0
                
                if data_set[0] != "Wynik":  # Skip comparing "Results" row with itself
                    for j in range(1, 11):  # Comparing indexes from 1 to 10
                        # Exact match (3 points)
                        if queue_data[0][j] == data_set[j]:
                            points += 3
                        # Match with +-1 index (1 point)
                        if not j == 1:
                            if queue_data[0][j] == data_set[j-1]:
                                points += 1
                        if not j == 10:
                            if queue_data[0][j] == data_set[j+1]:
                                points += 1
                        
                    # Append the calculated points to the row
                    queue_data[i] = data_set + (points,)
                else:
                    # For the "Results" row, append "Punktacja" as the last item
                    queue_data[i] = data_set + ("Punktacja",)
        # Iterate through each set in queue_data
        for i, data_set in enumerate(queue_data):
            # Iterate through indexes 1 to 11 and 13
            for j in range(0, 13):
                # Get the key at index j
                key = data_set[j]
                # Update the value at index j with the driver name from the dictionary
                current_tuple = list(queue_data[i])
                # Update the value at index j
                current_tuple[j] = event_options.get(key, key) if j == 11 else driver_names.get(key, key)
                # Assign the updated tuple back to the list
                queue_data[i] = tuple(current_tuple)
        # Return the QueueData as JSON
        return jsonify(queue_data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

