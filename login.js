// login.js
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Hardcoded valid credentials
    const validCredentials = [
      { username: 'user1', password: 'pass1', firstName: 'John', lastName: 'Doe', role: 'employee' },
      { username: 'user2', password: 'pass2', firstName: 'Jane', lastName: 'Smith', role: 'student' },
      { username: 'user3', password: 'pass3', firstname: 'Yuktha', lastname: 'v', role: 'freelancer'},
      { username: 'user4', password: 'pass4', firstname: 'David', lastname: 'Hudson', role: 'startup'}
    ];
  
    const user = validCredentials.find(user => user.username === username && user.password === password);
  
    if (user) {
      alert(`Login successful! Welcome ${user.firstName} ${user.lastName}`);
      window.location.href = `dashboard.html?firstName=${encodeURIComponent(user.firstName)}&lastName=${encodeURIComponent(user.lastName)}&role=${encodeURIComponent(user.role)}`;
    } else {
      alert('Invalid username or password');
    }
  });
  