// Get the current date and time
function updateDateTime() {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    
    // Update the date and time in the HTML
    document.getElementById('current-date').textContent = currentDate;
    document.getElementById('current-time').textContent = currentTime;
}

// Call the function to initially update date and time
updateDateTime();

// Update date and time every second
setInterval(updateDateTime, 1000);

// Function to show custom alert
function showCustomAlert(message) {
    var customAlert = document.getElementById('custom-alert');
    var customAlertMessage = document.getElementById('custom-alert-message');
    customAlertMessage.textContent = message;
    customAlert.style.display = 'block';

    // Add event listener to close button
    var closeButton = document.getElementById('custom-alert-close');
    closeButton.addEventListener('click', function() {
        customAlert.style.display = 'none';
    });
}

function updateCanvas(content) {
    // Get the information canvas element
    var infoCanvas = document.getElementById('information-text');
    if (content === 'Zasady') { // Use the equality operator '===' for strict comparison
        infoCanvas.style.fontSize = "20px"
        infoCanvas.innerHTML = `<h2>Zasady gry</h2>
        <p>1. Obstawiamy Top 10 zawodników w każdym wyścigu sezonu</p>
        <p>2. Za trafienie pozycji w Top 10 jest są 3 pkt</p>
        <p>3. Za trafienie pozycji obok (±1) w Top 10</p>
        <p>4. Za trafienie całego podium +6 pkt</p>
        <p>5. Za trafienie 3 miejsc pod rząd +3 pkt</p>
        <p>6. Dodatkowe bety:</p>
        <p> - obstawienie kogoś kto nigdy nie był na podium, a je zdobędzie +10pkt</p>
        <p> - obstawienie random eventu podczas wyścigu wg tabeli</p>
        <table border="3" style="margin: 0 auto;">
            <tr>
                <th>Rodzaj eventu</th>
                <th>Ilość punktów</th>
            </tr>
            <tr>
                <td>DNF</td>
                <td>1 pkt</td>
            </tr>
            <tr>
                <td>Awaria bolidu</td>
                <td>4 pkt</td>
            </tr>
            <tr>
                <td>Awaria opon</td>
                <td>4 pkt</td>
            </tr>
            <tr>
                <td>Zespawana opona</td>
                <td>15 pkt</td>
            </tr>
            <tr>
                <td>Wypadek</td>
                <td>4 pkt</td>
            </tr>
            <tr>
                <td>Banda/gravel</td>
                <td>4 pkt</td>
            </tr>
            <tr>
                <td>Wystąpienie yellow flaga</td>
                <td>1 pkt</td>
            </tr>
            <tr>
                <td>Wystąpienie red flaga</td>
                <td>3 pkt</td>
            </tr>
            <tr>
                <td>Wystąpienie black and white flag (track limits)</td>
                <td>6 pkt</td>
            </tr>
            <tr>
                <td>Pitstop zespołu dłuższy niż 10 sekund</td>
                <td>3 pkt</td>
            </tr>
        </table>
        `;
    } else if (content === 'Formularz') {
        infoCanvas.style.fontSize = "20px";

        // Set the HTML content with the form
        infoCanvas.innerHTML = `
            
            <h2>Dodaj zakład</h2>
            <form id="myForm">
                <label class="form-label" for="nick">Nick:</label>
                <input class="form-text" type="text" id="nick" name="nick"><br>
                <label class="form-label" for="first">1st place:</label><select class="kierowcy" id="first">
                <option value="ver">Max Verstappen</option>
                <option value="per">Sergio Pérez</option>
                <option value="sar">Logan Sargeant</option>
                <option value="alb">Alex Albon</option>
                <option value="ric">Daniel Ricciardo</option>
                <option value="tsu">Yūki Tsunoda</option>
                <option value="nor">Lando Norris</option>
                <option value="pia">Oscar Piastri</option>
                <option value="gas">Pierre Gasly</option>
                <option value="oco">Esteban Ocon</option>
                <option value="alo">Fernando Alonso</option>
                <option value="str">Lance Stroll</option>
                <option value="lec">Charles Leclerc</option>
                <option value="sai">Carlos Sainz Jr.</option>
                <option value="mag">Kevin Magnussen</option>
                <option value="hul">Nico Hülkenberg</option>
                <option value="zho">Zhou Guanyu</option>
                <option value="bot">Valtteri Bottas</option>
                <option value="ham">Lewis Hamilton</option>
                <option value="rus">George Russell</option>
            </select>
            <br>
                <label class="form-label" for="second">2nd place:</label><select class="kierowcy" id="second">
                <option value="ver">Max Verstappen</option>
                <option value="per">Sergio Pérez</option>
                <option value="sar">Logan Sargeant</option>
                <option value="alb">Alex Albon</option>
                <option value="ric">Daniel Ricciardo</option>
                <option value="tsu">Yūki Tsunoda</option>
                <option value="nor">Lando Norris</option>
                <option value="pia">Oscar Piastri</option>
                <option value="gas">Pierre Gasly</option>
                <option value="oco">Esteban Ocon</option>
                <option value="alo">Fernando Alonso</option>
                <option value="str">Lance Stroll</option>
                <option value="lec">Charles Leclerc</option>
                <option value="sai">Carlos Sainz Jr.</option>
                <option value="mag">Kevin Magnussen</option>
                <option value="hul">Nico Hülkenberg</option>
                <option value="zho">Zhou Guanyu</option>
                <option value="bot">Valtteri Bottas</option>
                <option value="ham">Lewis Hamilton</option>
                <option value="rus">George Russell</option>
            </select>
           <br>
                <label class="form-label" for="third">3rd place:</label><select class="kierowcy" id="third">
                <option value="ver">Max Verstappen</option>
                <option value="per">Sergio Pérez</option>
                <option value="sar">Logan Sargeant</option>
                <option value="alb">Alex Albon</option>
                <option value="ric">Daniel Ricciardo</option>
                <option value="tsu">Yūki Tsunoda</option>
                <option value="nor">Lando Norris</option>
                <option value="pia">Oscar Piastri</option>
                <option value="gas">Pierre Gasly</option>
                <option value="oco">Esteban Ocon</option>
                <option value="alo">Fernando Alonso</option>
                <option value="str">Lance Stroll</option>
                <option value="lec">Charles Leclerc</option>
                <option value="sai">Carlos Sainz Jr.</option>
                <option value="mag">Kevin Magnussen</option>
                <option value="hul">Nico Hülkenberg</option>
                <option value="zho">Zhou Guanyu</option>
                <option value="bot">Valtteri Bottas</option>
                <option value="ham">Lewis Hamilton</option>
                <option value="rus">George Russell</option>
            </select><br>
                <label class="form-label" for="fourth">4th place:</label><select class="kierowcy" id="fourth">
                <option value="ver">Max Verstappen</option>
                <option value="per">Sergio Pérez</option>
                <option value="sar">Logan Sargeant</option>
                <option value="alb">Alex Albon</option>
                <option value="ric">Daniel Ricciardo</option>
                <option value="tsu">Yūki Tsunoda</option>
                <option value="nor">Lando Norris</option>
                <option value="pia">Oscar Piastri</option>
                <option value="gas">Pierre Gasly</option>
                <option value="oco">Esteban Ocon</option>
                <option value="alo">Fernando Alonso</option>
                <option value="str">Lance Stroll</option>
                <option value="lec">Charles Leclerc</option>
                <option value="sai">Carlos Sainz Jr.</option>
                <option value="mag">Kevin Magnussen</option>
                <option value="hul">Nico Hülkenberg</option>
                <option value="zho">Zhou Guanyu</option>
                <option value="bot">Valtteri Bottas</option>
                <option value="ham">Lewis Hamilton</option>
                <option value="rus">George Russell</option>
            </select><br>
                <label class="form-label" for="fifth">5th place:</label><select class="kierowcy" id="fifth">
                <option value="ver">Max Verstappen</option>
                <option value="per">Sergio Pérez</option>
                <option value="sar">Logan Sargeant</option>
                <option value="alb">Alex Albon</option>
                <option value="ric">Daniel Ricciardo</option>
                <option value="tsu">Yūki Tsunoda</option>
                <option value="nor">Lando Norris</option>
                <option value="pia">Oscar Piastri</option>
                <option value="gas">Pierre Gasly</option>
                <option value="oco">Esteban Ocon</option>
                <option value="alo">Fernando Alonso</option>
                <option value="str">Lance Stroll</option>
                <option value="lec">Charles Leclerc</option>
                <option value="sai">Carlos Sainz Jr.</option>
                <option value="mag">Kevin Magnussen</option>
                <option value="hul">Nico Hülkenberg</option>
                <option value="zho">Zhou Guanyu</option>
                <option value="bot">Valtteri Bottas</option>
                <option value="ham">Lewis Hamilton</option>
                <option value="rus">George Russell</option>
            </select><br>
                <label class="form-label" for="sixth">6th place:</label><select class="kierowcy" id="sixth">
                <option value="ver">Max Verstappen</option>
                <option value="per">Sergio Pérez</option>
                <option value="sar">Logan Sargeant</option>
                <option value="alb">Alex Albon</option>
                <option value="ric">Daniel Ricciardo</option>
                <option value="tsu">Yūki Tsunoda</option>
                <option value="nor">Lando Norris</option>
                <option value="pia">Oscar Piastri</option>
                <option value="gas">Pierre Gasly</option>
                <option value="oco">Esteban Ocon</option>
                <option value="alo">Fernando Alonso</option>
                <option value="str">Lance Stroll</option>
                <option value="lec">Charles Leclerc</option>
                <option value="sai">Carlos Sainz Jr.</option>
                <option value="mag">Kevin Magnussen</option>
                <option value="hul">Nico Hülkenberg</option>
                <option value="zho">Zhou Guanyu</option>
                <option value="bot">Valtteri Bottas</option>
                <option value="ham">Lewis Hamilton</option>
                <option value="rus">George Russell</option>
            </select><br>
                <label class="form-label" for="seventh">7th place:</label><select class="kierowcy" id="seventh">
                <option value="ver">Max Verstappen</option>
                <option value="per">Sergio Pérez</option>
                <option value="sar">Logan Sargeant</option>
                <option value="alb">Alex Albon</option>
                <option value="ric">Daniel Ricciardo</option>
                <option value="tsu">Yūki Tsunoda</option>
                <option value="nor">Lando Norris</option>
                <option value="pia">Oscar Piastri</option>
                <option value="gas">Pierre Gasly</option>
                <option value="oco">Esteban Ocon</option>
                <option value="alo">Fernando Alonso</option>
                <option value="str">Lance Stroll</option>
                <option value="lec">Charles Leclerc</option>
                <option value="sai">Carlos Sainz Jr.</option>
                <option value="mag">Kevin Magnussen</option>
                <option value="hul">Nico Hülkenberg</option>
                <option value="zho">Zhou Guanyu</option>
                <option value="bot">Valtteri Bottas</option>
                <option value="ham">Lewis Hamilton</option>
                <option value="rus">George Russell</option>
            </select><br>
                <label class="form-label" for="eighth">8th place:</label><select class="kierowcy" id="eighth">
                <option value="ver">Max Verstappen</option>
                <option value="per">Sergio Pérez</option>
                <option value="sar">Logan Sargeant</option>
                <option value="alb">Alex Albon</option>
                <option value="ric">Daniel Ricciardo</option>
                <option value="tsu">Yūki Tsunoda</option>
                <option value="nor">Lando Norris</option>
                <option value="pia">Oscar Piastri</option>
                <option value="gas">Pierre Gasly</option>
                <option value="oco">Esteban Ocon</option>
                <option value="alo">Fernando Alonso</option>
                <option value="str">Lance Stroll</option>
                <option value="lec">Charles Leclerc</option>
                <option value="sai">Carlos Sainz Jr.</option>
                <option value="mag">Kevin Magnussen</option>
                <option value="hul">Nico Hülkenberg</option>
                <option value="zho">Zhou Guanyu</option>
                <option value="bot">Valtteri Bottas</option>
                <option value="ham">Lewis Hamilton</option>
                <option value="rus">George Russell</option>
            </select><br>
                <label class="form-label" for="nineth">9th place:</label><select class="kierowcy" id="nineth">
                <option value="ver">Max Verstappen</option>
                <option value="per">Sergio Pérez</option>
                <option value="sar">Logan Sargeant</option>
                <option value="alb">Alex Albon</option>
                <option value="ric">Daniel Ricciardo</option>
                <option value="tsu">Yūki Tsunoda</option>
                <option value="nor">Lando Norris</option>
                <option value="pia">Oscar Piastri</option>
                <option value="gas">Pierre Gasly</option>
                <option value="oco">Esteban Ocon</option>
                <option value="alo">Fernando Alonso</option>
                <option value="str">Lance Stroll</option>
                <option value="lec">Charles Leclerc</option>
                <option value="sai">Carlos Sainz Jr.</option>
                <option value="mag">Kevin Magnussen</option>
                <option value="hul">Nico Hülkenberg</option>
                <option value="zho">Zhou Guanyu</option>
                <option value="bot">Valtteri Bottas</option>
                <option value="ham">Lewis Hamilton</option>
                <option value="rus">George Russell</option>
            </select><br>
                <label class="form-label" for="tenth">10th place:</label><select class="kierowcy" id="tenth">
                <option value="ver">Max Verstappen</option>
                <option value="per">Sergio Pérez</option>
                <option value="sar">Logan Sargeant</option>
                <option value="alb">Alex Albon</option>
                <option value="ric">Daniel Ricciardo</option>
                <option value="tsu">Yūki Tsunoda</option>
                <option value="nor">Lando Norris</option>
                <option value="pia">Oscar Piastri</option>
                <option value="gas">Pierre Gasly</option>
                <option value="oco">Esteban Ocon</option>
                <option value="alo">Fernando Alonso</option>
                <option value="str">Lance Stroll</option>
                <option value="lec">Charles Leclerc</option>
                <option value="sai">Carlos Sainz Jr.</option>
                <option value="mag">Kevin Magnussen</option>
                <option value="hul">Nico Hülkenberg</option>
                <option value="zho">Zhou Guanyu</option>
                <option value="bot">Valtteri Bottas</option>
                <option value="ham">Lewis Hamilton</option>
                <option value="rus">George Russell</option>
            </select><br>
                <label class="form-label" for="addons">Dodatkowe zakłady:</label><select id="addons">
                                                                                <option value="dnf">DNF</option>
                                                                                <option value="awaria-bolid">Awaria bolidu</option>
                                                                                <option value="awaria-opon">Awaria opon</option>
                                                                                <option value="zespawana">Zespawana opona</option>
                                                                                <option value="wypadek">Wypadek/Kolizja</option>
                                                                                <option value="bangra">Banda/gravel</option>
                                                                                <option value="yel">Wystąpienie yellow flaga</option>
                                                                                <option value="red">Wystąpienie red flaga</option>
                                                                                <option value="blue">Wystąpienie black and white flag</option>
                                                                                <option value="pitstop">Długi pitstop</option>
                                                           </select><select class="kierowcy" id="eleventh">
                                                           <option value="ver">Max Verstappen</option>
                                                           <option value="per">Sergio Pérez</option>
                                                           <option value="sar">Logan Sargeant</option>
                                                           <option value="alb">Alex Albon</option>
                                                           <option value="ric">Daniel Ricciardo</option>
                                                           <option value="tsu">Yūki Tsunoda</option>
                                                           <option value="nor">Lando Norris</option>
                                                           <option value="pia">Oscar Piastri</option>
                                                           <option value="gas">Pierre Gasly</option>
                                                           <option value="oco">Esteban Ocon</option>
                                                           <option value="alo">Fernando Alonso</option>
                                                           <option value="str">Lance Stroll</option>
                                                           <option value="lec">Charles Leclerc</option>
                                                           <option value="sai">Carlos Sainz Jr.</option>
                                                           <option value="mag">Kevin Magnussen</option>
                                                           <option value="hul">Nico Hülkenberg</option>
                                                           <option value="zho">Zhou Guanyu</option>
                                                           <option value="bot">Valtteri Bottas</option>
                                                           <option value="ham">Lewis Hamilton</option>
                                                           <option value="rus">George Russell</option>
                                                       </select><br>
            </form>
            `
        ;
    
        var button = document.createElement('button');
        button.id = 'submit-button';
        button.textContent = 'Wyślij zakład';
        infoCanvas.appendChild(button);

        // Add event listener to the button
        button.addEventListener('click', function() {
            var selectedValues = [];
        
            // Get the value of the input with ID "nick"
            var nickValue = document.getElementById('nick').value;
            selectedValues.push(nickValue);
            
            if (nickValue.trim() === '') {
                showCustomAlert('Błąd: Brak wprowadzanego nicku');
                return; // Exit the function
            }
            // Get all select elements
            var selects = document.querySelectorAll('select');
            
            // Loop through each select element
            selects.forEach(function(select) {
                // Get the selected option
                var selectedOption = select.options[select.selectedIndex];
                // Add the selected value to the list
                selectedValues.push(selectedOption.value);
            });
            
            // Validate selected values for places 1 to 10
            var places = selectedValues.slice(1, 11); // Extract places 1 to 10
            var hasDuplicate = places.some(function(place, index) {
                return places.indexOf(place) !== index; // Check for duplicates
            });

            // Reset the form or display an error message
            if (hasDuplicate) {
                // Display error message
                showCustomAlert('Błąd: Kierowcy w obstawionym Top 10 nie mogą się powtarzać');
                // Optionally, you can clear the selected values
                // document.getElementById('myForm').reset();
            } else {
                // Reset the form
                showCustomAlert('Sukces: Poprawnie dodano zakład')
                setTimeout(function() {
                    submitData(selectedValues)
                    
                    
                    var closeButton = document.getElementById('custom-alert-close');
                    closeButton.click();
                    updateCanvas("Dodano");
                // You can do further processing with the selected values here
                }, 2000);
            }
        });
      
    } else if (content === "Dodano") {  
        setTimeout(function() {
            viewData, 2000
        })
}


function submitData(selectedValues) {
    // Constructing the form data object
    const formData = {
        nick: selectedValues[0],
        first: selectedValues[1],
        second: selectedValues[2],
        third: selectedValues[3],
        fourth: selectedValues[4],
        fifth: selectedValues[5],
        sixth: selectedValues[6],
        seventh: selectedValues[7],
        eighth: selectedValues[8],
        ninth: selectedValues[9],
        tenth: selectedValues[10],
        random_event: selectedValues[11],
        event_driver: selectedValues[12]
    };

    // Make an AJAX POST request to the Flask route
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            // If the request was successful, do something
            console.log('Form submitted successfully');
        } else {
            // If there was an error, handle it
            console.error('Form submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


function viewData() {
    fetch('/view_data')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // Generate HTML for each set in the list
        let containerHTML = '<div style="display: flex; overflow-x: auto; font-size:30px;">';
        data.forEach(set => {
            let tableHTML = '<table border= "3" style="float: right; margin-left: 10px; border-collapse: collapse;">'; // Added border styles
            tableHTML += '<thead><tr>';
            tableHTML += `<th font-weight: bold;">${set[0]}</th>`; // Added font-weight:bold; and border styles
            tableHTML += '</tr></thead>';
            tableHTML += '<tbody>';
            for (let i = 1; i < set.length; i++) {
                tableHTML += `<tr><td style="white-space: nowrap;">${set[i]}</td></tr>`;
            }
            tableHTML += '</tbody></table>';
            containerHTML += tableHTML;
        });
                // Close the container div 
                containerHTML += '</div>';

                // Append the container to the infoCanvas
                infoCanvas.innerHTML = containerHTML;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}}