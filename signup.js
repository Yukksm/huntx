// signup.js
function register() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (firstName && lastName && email && username && password) {
      alert(`Registration successful! Welcome ${firstName} ${lastName}`);
      // Redirect to profile page with query parameters
      window.location.href = `profile.html?firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}`;
    } else {
      alert('Please fill out all fields');
    }
  }
  