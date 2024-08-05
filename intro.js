// script.js
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('nav ul li a[href="#"]').addEventListener('click', (event) => {
      event.preventDefault();
      // Add the functionality to redirect to the login page
      window.location.href = 'login.html';
    });
  });
  