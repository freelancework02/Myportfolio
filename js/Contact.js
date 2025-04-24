// JavaScript to handle form modal visibility
const contactIcon = document.getElementById('contactIcon');
const contactFormModal = document.getElementById('contactFormModal');
const closeBtn = document.getElementById('closeBtn');

contactIcon.addEventListener('click', () => {
  contactFormModal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  contactFormModal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', (event) => {
  if (event.target === contactFormModal) {
    contactFormModal.style.display = 'none';
  }
});


// Contact form submission 

// Contact form submission 
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission behavior

  // Initialize EmailJS with your public key
  emailjs.init("_NCXgVXdplNNFVAvR");

  // Show loader
  const loader = document.createElement("div");
  loader.className = "loader";
  loader.innerHTML = "<div class='spinner'></div>";
  document.body.appendChild(loader);

  // Collect form data
  const formData = {
    Name: document.getElementById("name").value,
    Email: document.getElementById("email").value,
    Message: document.getElementById("message").value,
  };

  // Send the email using EmailJS
  emailjs
    .send("service_5gjnswr", "template_6qwsdsc", formData)
    .then(
      function (response) {
        alert("Message sent successfully!"); // Success message
        document.getElementById("contactForm").reset(); // Reset form
        document.getElementById("contactFormModal").style.display = "none"; // Close form
      },
      function (error) {
        alert("Failed to send message. Please try again."); // Error message
        console.error("EmailJS Error:", error);
      }
    )
    .finally(() => {
      document.body.removeChild(loader); // Remove loader
    });
});
