// Event Listener

let addLocation = document.getElementById('logForm');
logForm.addEventListener('submit', logUserInput);

// Event Handler

function logUserInput(event) {
    event.preventDefault();
    let form = event.target;
    console.log(form.addLocation.value)
}