// from data.js
var tableData = data;
var dateSelect = d3.select('#filter-btn');

//event listener
dateSelect.on('click', function(){
    //clearing table when user inputs a different date
    d3.event.preventDefault();

    var inputElement = d3.select('#datetime');
    var inputValue = inputElement.property('value');

    console.log(inputValue);

    //only taking data where the date matches the input
    var filteredData = tableData.filter(date => date.datetime === inputValue);
    //printing in console to check data
    console.log(filteredData);

    var tabletoVisualize = d3.select('#ufo-table')
    var thead = tabletoVisualize.select("thead")
    thead.html("");
    filteredData.forEach((sighting) => {
        var row = thead.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = thead.append("td");
            cell.text(value);

        
});
})})