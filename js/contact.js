document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('messageText').value;
    const responseMessageDiv = document.getElementById('responseMessage');
    responseMessageDiv.style.display = 'block';
    responseMessageDiv.innerHTML = `Thank you, ${name}! Your message has been received. We will get back to you shortly.`;
    document.getElementById('contactForm').reset();
});
