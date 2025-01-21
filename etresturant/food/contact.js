// Get the form element
const form = document.querySelector("form");

// Add event listener for form submission
form.addEventListener("submit", function (e) {
  // Prevent the form from submitting normally
  e.preventDefault();

  // Get the input field values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validate the name field (non-empty and minimum 3 characters)
  if (name.length < 3) {
    alert("Please enter a valid name with at least 3 characters.");
    return;
  }

  // Validate the email field (non-empty and valid format)
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Validate the message field (non-empty and minimum 10 characters)
  if (message.length < 10) {
    alert("Your message should be at least 10 characters long.");
    return;
  }

  // If all validations pass, display a confirmation message
  alert("Thank you for contacting us, " + name + "! We will get back to you soon.");

  // Optionally, clear the form after submission
  form.reset();
});
