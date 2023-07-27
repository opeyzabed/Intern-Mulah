$(document).ready(function() {
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

// Function to read and display CSV data in HTML table
function displayCSVData(data) {
    // Split the CSV data into an array of lines
    var lines = data.split("\n");

    var row = {};
    
    // Loop through each line and convert it into an array of values
    for (var i = 0; i < lines.length; i++) {
        var values = lines[i].split(",");

        // If you have a header row, you can use it to set the table header
        if (i === 0) {
            // Assuming the first row is the header row
            // Create the table header row
            $("#csvTable thead").append("<tr></tr>");
            $("#csvTable thead tr").append("<th>" + values[0] + "</th>");
            $("#csvTable thead tr").append("<th>" + values[1] + "</th>");
        } else {
            // Create an object representing a row in the table
            
            row[values[0]] = parseInt(values[1]);

            $("#csvTable tbody").append("<tr></tr>");
            $("#csvTable tbody tr:last-child").append("<td>" + values[0] + "</td>");
            $("#csvTable tbody tr:last-child").append("<td>" + values[1] + "</td>");               
        }
    }

    displayCategory(row);
}

function displayCategory(data){
    $("#table2 tbody").append("<tr></tr>");
    $("#table2 tbody tr:last-child").append("<td>" + "Alpha" + "</td>");
    $("#table2 tbody tr:last-child").append("<td>" + (data.A5+data.A20) + "</td>"); 

    $("#table2 tbody").append("<tr></tr>");
    $("#table2 tbody tr:last-child").append("<td>" + "Beta" + "</td>");
    $("#table2 tbody tr:last-child").append("<td>" + (data.A15/data.A7) + "</td>"); 

    $("#table2 tbody").append("<tr></tr>");
    $("#table2 tbody tr:last-child").append("<td>" + "Charlie" + "</td>");
    $("#table2 tbody tr:last-child").append("<td>" + (data.A13*data.A12) + "</td>"); 
}
