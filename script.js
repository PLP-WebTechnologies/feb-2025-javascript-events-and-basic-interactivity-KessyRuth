// Button click: change text and color
const colorButton = document.getElementById("colorButton")
colorButton.addEventListener('click', () => {
    colorButton.textContent = 'Welcome to our website!'
    colorButton.style.backgroundColor = 'green';
});


// Double click: show secret message
colorButton.addEventListener('dblclick', () => {
  document.getElementById('secretMessage').hidden = false;
});

// Keypress detection
document.addEventListener('keydown', (e) => {
  if (e.key === 'h') {
    alert('You pressed "h"! 👋');
  }
});

// Real-time password feedback
const passwordInput = document.getElementById('password');
const feedback = document.getElementById('feedback');

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters.';
  } else {
    feedback.textContent = '';
  }
});

// Form submission
document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form submitted!');
});

// Make image dance on key 'd'
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'd') {
      const img = document.getElementById('funImage');
      img.style.transform = 'rotate(360deg)';
      setTimeout(() => {
        img.style.transform = '';
      }, 500);
    }
  });
  
