// check to make sure printing to console
console.log("UFO javascript challenge");

// from data.js
var tableData = data;

// get reference to table body
var tbody = d3.select("tbody");
console.log(tbody);

// loop through data, console.log because we can, append 'tr', add data

data.forEach(function(ufoData) {

    // console.log [because we can] to confirm pulling correct object data
    console.log(ufoData);

    // append the table row element
    var row = tbody.append("tr");

    
    // append cell for table data 'td' and append values to cell
    Object.entries(ufoData).forEach(function([key, value]) {
        console.log(key, value);

        // append a cell to the row for each value
        var cell = row.append("td");

        // append value to each cell
        cell.text(value);
    });
});


// select the button
var button = d3.select("#filter-btn");

// select the form
var form = d3.select("#form");

// event handlers for clicking button or pressing enter
button.on("click", runEnter);
form.on("submit", runEnter);

// function to run for both events (button click or pressing enter)

function runEnter() {

    // prevent the page from refreshing
    d3.event.preventDefault();

    // select input element
    var inputElement = d3.select("#datetime.form-control");

    // get value out of input element
    var inputValue = inputElement.property("value");

    // print input value to console
    console.log("The date value entered was: ");
    console.log(inputValue);

    // create variable for filtered data
    var filteredData = tableData.filter(ufoData => ufoData.datetime === inputValue);

    console.log(filteredData);

    // create an array with the datetime values
    var dateValues = filteredData.map(ufoData => ufoData.datetime);

};


