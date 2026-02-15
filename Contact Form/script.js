const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Clear previous errors
  const errorMsgs = form.querySelectorAll('.error-msg');
  errorMsgs.forEach(msg => msg.textContent = '');

  let isValid = true;

  // Get form values
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  // Validate Name
  if (name === '') {
    setError('name', 'Full Name is required');
    isValid = false;
  }

  // Validate Email
  if (email === '') {
    setError('email', 'Email is required');
    isValid = false;
  } else if (!isValidEmail(email)) {
    setError('email', 'Please enter a valid email');
    isValid = false;
  }

  // Validate Subject
  if (subject === '') {
    setError('subject', 'Subject is required');
    isValid = false;
  }

  // Validate Message
  if (message === '') {
    setError('message', 'Message is required');
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
    form.reset();
  }
});

// Helper functions
function setError(fieldId, message) {
  const input = document.getElementById(fieldId);
  const error = input.nextElementSibling;
  error.textContent = message;
}

function isValidEmail(email) {
  // Basic regex for email validation
  const re = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return re.test(email);
}
