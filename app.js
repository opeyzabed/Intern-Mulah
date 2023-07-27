$(document).ready(function() {
    // Function to read and display CSV data in HTML table
    function displayCSVData(data) {
        // Split the CSV data into an array of lines
        var lines = data.split("\n");

        // Initialize an array to hold the table data
        var tableData = [];

        // Loop through each line and convert it into an array of values
        for (var i = 0; i < lines.length; i++) {
            var values = lines[i].split(",");

            // If you have a header row, you can use it to set the table header
            if (i === 0) {
                // Assuming the first row is the header row
                // Create the table header row
                $("#csvTable thead").append("<tr></tr>");
                for (var j = 0; j < values.length; j++) {
                    $("#csvTable thead tr").append("<th>" + values[j] + "</th>");
                }
            } else {
                // Create an object representing a row in the table
                var row = {};
                for (var k = 0; k < values.length; k++) {
                    row["column_" + (k + 1)] = values[k];
                }
                // Add the row object to the tableData array
                tableData.push(row);
            }
        }

        // Loop through the tableData array and create the table rows
        for (var l = 0; l < tableData.length; l++) {
            $("#csvTable tbody").append("<tr></tr>");
            for (var prop in tableData[l]) {
                $("#csvTable tbody tr:last-child").append("<td>" + tableData[l][prop] + "</td>");
            }
        }
    }

    // Read the CSV file using jQuery AJAX
    $.ajax({
        type: "GET",
        url: "Table_Input.csv", 
        dataType: "text",
        success: function(data) {
            // Call the displayCSVData function with the retrieved data
            displayCSVData(data);
        }
    });
});
