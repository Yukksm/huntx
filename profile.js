// profile.js
function showProfileForm() {
    const role = document.getElementById('role').value;
    const additionalFields = document.getElementById('additionalFields');
    additionalFields.innerHTML = ''; // Clear previous fields
  
    switch (role) {
      case 'freelancer':
        additionalFields.innerHTML = `
          <div class="input-box">
            <input type="text" id="niche" placeholder="Niche" required>
          </div>
          <div class="input-box">
            <input type="text" id="skills" placeholder="Skills" required>
          </div>
          <div class="input-box">
            <input type="text" id="contactDetails" placeholder="Contact Details" required>
          </div>
          <div class="input-box">
            <textarea id="whyBest" placeholder="Why I am the best" required></textarea>
          </div>
        `;
        break;
      case 'student':
        additionalFields.innerHTML = `
          <div class="input-box">
            <input type="text" id="university" placeholder="University or College Name" required>
          </div>
          <div class="input-box">
            <input type="text" id="skills" placeholder="Skills" required>
          </div>
          <div class="input-box">
            <textarea id="experience" placeholder="Internship Experience or Papers Published" required></textarea>
          </div>
        `;
        break;
      case 'employee':
        additionalFields.innerHTML = `
          <div class="input-box">
            <input type="text" id="jobTitle" placeholder="Current Job Title" required>
          </div>
          <div class="input-box">
            <input type="text" id="company" placeholder="Company" required>
          </div>
          <div class="input-box">
            <textarea id="experience" placeholder="Experience" required></textarea>
          </div>
          <div class="input-box">
            <input type="text" id="skills" placeholder="Skills" required>
          </div>
        `;
        break;
      case 'company':
      case 'startup':
        additionalFields.innerHTML = `
          <div class="input-box">
            <input type="text" id="companyName" placeholder="Company Name" required>
          </div>
          <div class="input-box">
            <input type="text" id="franchises" placeholder="Franchises" required>
          </div>
          <div class="input-box">
            <textarea id="jobPosts" placeholder="Job Posts Available" required></textarea>
          </div>
          <div class="input-box">
            <input type="text" id="contactDetails" placeholder="Contact Details" required>
          </div>
        `;
        break;
    }
  }
  
  function saveProfile() {
    const firstName = new URLSearchParams(window.location.search).get('firstName');
    const lastName = new URLSearchParams(window.location.search).get('lastName');
    const role = document.getElementById('role').value;
  
    // Save profile details (mock implementation)
    alert('Profile saved successfully!');
  
    // Redirect to dashboard
    window.location.href = `dashboard.html?firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}&role=${encodeURIComponent(role)}`;
  }
  