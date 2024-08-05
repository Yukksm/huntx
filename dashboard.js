// Function to get URL parameters
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Retrieve user data from URL parameters
const firstName = getUrlParameter('firstName');
const lastName = getUrlParameter('lastName');
const role = getUrlParameter('role');

// Set user data in the dashboard
document.getElementById('user-name').innerText = `${firstName} ${lastName}`;
document.getElementById('user-name-post').innerText = `${firstName} ${lastName}`;
