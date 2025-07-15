document.getElementById("whatsappForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const phoneNumber = "918851633233"; // No '+' and no spaces

  // Use \n to separate lines, and encodeURIComponent will convert it to %0A
  const fullMessage = `Hello, my name is *${name}*\n`
                    + `Email: ${email}\n`
                    + `Message: ${message}`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

  window.open(whatsappURL, "_blank");
});

