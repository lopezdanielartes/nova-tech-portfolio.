const form = document.getElementById('contactForm');
const msg = document.querySelector('.form-msg');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if(name === "" || email === "" || message === "") {
    msg.textContent = "Por favor completa todos los campos.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "¡Mensaje enviado con éxito!";
  msg.style.color = "green";

  // Limpiar formulario
  form.reset();
});
