const form = document.getElementById('contactForm');
const messageDisplay = document.getElementById('messageDisplay');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Simulate form submission
    messageDisplay.className = 'message-display success';
    messageDisplay.textContent = 'Thank you! Your message has been sent successfully.';
    
    // Reset form
    form.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        messageDisplay.style.display = 'none';
    }, 5000);
});

