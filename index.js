const form = document.getElementById('login_form');
const entryTable = document.getElementById('entryTable');

// Function to handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('i1').value;
    const email = document.getElementById('i2').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('i3').value;
    const acceptTerms = document.getElementById('i4').checked ? 'Yes' : 'No';

    // Create a new row in the table
    const newRow = entryTable.insertRow(-1);

    // Insert cells with form values into the new row
    const cell1 = newRow.insertCell(0);
    cell1.innerHTML = name;

    const cell2 = newRow.insertCell(1);
    cell2.innerHTML = email;

    const cell3 = newRow.insertCell(2);
    cell3.innerHTML = password;

    const cell4 = newRow.insertCell(3);
    cell4.innerHTML = dob;

    const cell5 = newRow.insertCell(4);
    cell5.innerHTML = acceptTerms;

    // Reset the form after submission
    form.reset();
});
