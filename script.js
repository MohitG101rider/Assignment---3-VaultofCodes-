// contact form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Thank you for contacting us! We'll get back to you soon.");
  this.reset();
});

// email verification
document.getElementById("verifyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("verifyEmail");
  const result = document.getElementById("verifyResult");

  // Simple mock check (replace with real logic if needed)
  if (emailInput.value.trim().endsWith("@gmail.com")) {
    result.textContent = "✅ Email verified successfully!";
    result.style.color = "#28a745";
  } else {
    result.textContent = "❌ Email not found or invalid. Try again.";
    result.style.color = "#dc3545";
  }

  emailInput.value = "";
});