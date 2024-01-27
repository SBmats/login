function signIn() {
    const username = document.getElementById("signInUsername").value;
    const password = document.getElementById("signInPassword").value;

    // Make an AJAX/fetch request to the server for sign-in
    fetch('/api/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Update UI after successful sign-in
            document.getElementById("sign-in").style.display = "none";
            document.getElementById("wallet").style.display = "block";

            // Fetch and display wallet balance
            fetchWalletBalance();
        } else {
            alert("Sign-In failed. Please check your credentials.");
        }
    })
    .catch(error => console.error('Error:', error));
}
