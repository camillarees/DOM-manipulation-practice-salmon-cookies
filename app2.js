// Event Listener

let addLocationForm = document.getElementById('addLocationForm');
addLocationForm.addEventListener('submit', addLocation);

// Event Handler

function addLocation(event) {
    event.preventDefault();
    let form = event.target;
    let location = form.addLocation.value;
    let locationName = form.addLocationName.value;
    let locationMinCust = form.addLocationMinCust.value;
    let locationMaxCust = form.addLocationMaxCust.value;
    let locationAvgSale = form.addLocationAvgSale.value;
//     console.log(location, locationName, locationMinCust, locationMaxCust, locationAvgSale);
    let newLocation = new Location(location, locationName, locationMinCust, locationMaxCust, locationAvgSale);
        console.log(newLocation);
        newLocation.render();
}