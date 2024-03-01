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


function updateCanvas(content) {
    // Get the information canvas element
    var infoCanvas = document.getElementById('information-text');
    if (content === 'Zasady') { // Use the equality operator '===' for strict comparison

        infoCanvas.innerHTML = '<h2>Zasady gry</h2>';

    } else {
    
        // Update the content dynamically
        infoCanvas.innerHTML = `<h2>${content}</h2><p>This is the content for ${content}.</p>`;
    }
}