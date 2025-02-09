// Event listener for form submission
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent the form from submitting the usual way

    // Collect form data
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('psw').value;
    const confirmPassword = document.getElementById('psw-confirm').value;
    const mobile = document.getElementById('mobile').value;
    const gender = document.getElementById('gender').value;

    // Validate if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Create the user data object
    const userData = {
        firstName,
        lastName,
        email,
        password,
        mobile,
        gender
    };

    // Store the data in local storage or an array
    let userArray = JSON.parse(localStorage.getItem('users')) || [];
    userArray.push(userData);
    localStorage.setItem('users', JSON.stringify(userArray));

    // Perform AJAX POST request (simulating sending data to a server)
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'server.php', true);  // Assuming you are sending data to 'server.php'
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Send data to the server
    xhr.send(JSON.stringify(userData));

    // Handle the response
    xhr.onload = function () {
        if (xhr.status === 200) {
            alert('Registration Successful!');
            window.location.href = 'userList.html';  // Redirect to user list page
        } else {
            alert('Registration Failed. Try again later.');
        }
    };

    xhr.onerror = function () {
        alert('Error connecting to the server.');
    };
});
