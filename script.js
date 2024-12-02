function insert_Row() {
    // Get the table element using its ID
    let table = document.getElementById("sampleTable");

    // Create a new row element
    let newRow = table.insertRow(0); // Insert at the top (index 0)

    // Create two new cells in the row
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // Set the text content of the cells
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}