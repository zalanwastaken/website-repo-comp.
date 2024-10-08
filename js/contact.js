document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('messageText').value;

    // Display response message
    const responseMessageDiv = document.getElementById('responseMessage');
    responseMessageDiv.style.display = 'block';
    responseMessageDiv.innerHTML = `Thank you, ${name}! Your message has been received. We will get back to you shortly.`;

    // Optionally, reset the form
    document.getElementById('contactForm').reset();
});
