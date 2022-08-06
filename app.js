
let locations = ['seattle', 'tokyo', 'dubai', 'paris', 'lima'];
let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let allLocations = [];
locationTotals = [];
grandTotal = 0;

function randomNumberCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min );
}

function createTableHeader() {
  let table = document.getElementById('table');
  let headerRow = document.createElement('tr');
  let headerElem = document.createElement('th');
  table.appendChild(headerRow);
  headerRow.appendChild(headerElem);
  headerElem.innerText = 'Hours';

  for(let i = 0; i < hours.length; i++) {
    headerElem = document.createElement('th');
    headerElem.innerText = hours[i];
    headerRow.appendChild(headerElem);
    locationTotals[i] = 0;
  };

  let dailyLocationTotals = document.createElement('td');
  dailyLocationTotals.textContent = "Daily Location Totals";
  headerRow.appendChild(dailyLocationTotals);
};

function createLocationRows(){
  for(let i = 0; i < allLocations.length; i++) {
    allLocations[i].render();
    // let tableBody = document.createElement('tbody');
    // table.appendChild(tableBody);
    // let tableRow = document.createElement('tr');
    // tableBody.appendChild(tableRow);
    // let locationNameData = document.createElement('td');
    // locationNameData.textContent = allLocations[i].name;
    // tableRow.appendChild(locationNameData);
  };
};

createTableHeader();

// createLocationRows();

  // Replace all object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

  function Location(name, minCust, maxCust, avgSale, hourlyCust, hourlyCookies, total) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSale = avgSale;
    this.hourlyCust = hourlyCust;
    this.hourlyCookies = hourlyCookies;
    this.total = total;
    allLocations.push(this);
  }

  let seattle = new Location('seattle', '23', '68', '6.3', [], [], 0);
  let tokyo = new Location('tokyo', '3', '24', '1.2', [], [], 0);
  let dubai = new Location('dubai', '11', '38', '3.7', [], [], 0);
  let paris = new Location('paris', '20', '28', '2.3', [], [], 0);
  let lima = new Location('lima', '2', '16', '4.6', [], [], 0);

  // Replace the lists of data for each store and build a single table of data instead. 
 
  Location.prototype.getRandomCust = function () {
      return randomNumberCust(this.minCust, this.maxCust);
     };

  Location.prototype.getAvgCookies = function () {
    for(let i = 0; i < hours.length; i++) {
      let avgCookies = Math.floor(this.avgSale * this.getRandomCust());
      this.hourlyCookies.push(avgCookies);
      this.total += avgCookies;
    }
  }

  // Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.
  // The header row and footer row are each created in their own stand-alone function

  Location.prototype.render = function () {
    this.getAvgCookies();
    let table = document.getElementById('table');
    let tableBody = document.createElement('tbody');
          table.appendChild(tableBody);
    let tableRow = document.createElement('tr');
          tableBody.appendChild(tableRow);
    let locationName = document.createElement('td');
      locationName.textContent = this.name;
          tableRow.appendChild(locationName);
        for(let i = 0; i < hours.length; i++) {
          let tableData = document.createElement('td');
          tableData.textContent = this.hourlyCookies[i];
          tableRow.appendChild(tableData);
        }
    let dailyLocationTotalsData = document.createElement('td');
        dailyLocationTotalsData.textContent = this.total;
        tableRow.appendChild(dailyLocationTotalsData);
    grandTotal += this.total
  };

  function createTableFooter() {
    let table = document.getElementById('table');
    let tableFooter = document.createElement('tfoot');
      table.appendChild(tableFooter);
    let tableRow = document.createElement('tr');
      tableFooter.appendChild(tableRow);
    let rowHeader = document.createElement('th');
    rowHeader.textContent = 'Totals';
    tableRow.appendChild(rowHeader);
    // let footerTotals = [];
      for(let i = 0; i < locationTotals.length; i++) {
          let locationTotals = [];
          footerTotals = document.createElement('tfoot');
          footerTotalData = document.createElement('td');
          footerTotalData.textContent = locationTotals[i];
          footerTotals.appendChild(footerTotalsData);
          // locationTotals[i] = 0
          };
          locationTotals += Location.all[j].hourlyCookies[i];
          footerTotals += Location.all[j].hourlyCookies[i];
       }
        
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   let locationName = event.target.location.value;
  //   let minCust = +event.target.mincust.value;
  //   let maxCust = +event.target.maxcust.value;
  //   let avgCookies = +event.target.avgcookies.value;
  //   let newStore = new Store(locationName, minCust, maxCust, avgCookies);
  //   newStore.render();
  
  //   document.getElementById('store-table').deleteRow(-1);
  //   renderTableFooter();
  // }
  
  // new Store ('Seattle', 23, 65, 6.3);
  // new Store ('Tokyo', 3, 25, 1.2);
  // new Store ('Dubai', 11, 38, 3.7);
  // new Store ('Paris', 20, 38, 2.3);
  // new Store ('Lima', 2, 16, 4.6);
  
  // myForm.addEventListener('submit', handleSubmit);

// Each cookie stand location should have a separate render() method that creates and appends its row to the table
  seattle.getRandomCust();
  tokyo.getRandomCust();
  dubai.getRandomCust();
  paris.getRandomCust();
  lima.getRandomCust();

createLocationRows();

// seattle.renderTotal();
// tokyo.renderTotal();
// dubai.renderTotal();
// paris.renderTotal();
// lima.renderTotal();

createTableFooter();




 
