function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;
  
  navLinks.classList.toggle('show');
  body.classList.toggle('menu-open');
  
  // Close menu when clicking on links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      body.classList.remove('menu-open');
    });
  });
}

// Form submission handler
document.getElementById("contact-form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  this.reset();
  alert("Message sent! I'll get back to you soon.");
});




