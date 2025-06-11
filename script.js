function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent! I'll get back to you soon.");
});





