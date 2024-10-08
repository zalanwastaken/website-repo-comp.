function searchContent(event) {
    event.preventDefault(); // Prevent the default form submission

    const query = document.getElementById('search-bar').value.toLowerCase();
    const content = document.getElementById('about-us');
    const textElements = content.querySelectorAll('p, h1, h2, li'); // Select all relevant text elements

    // Clear previous highlights
    textElements.forEach(element => {
        element.innerHTML = element.textContent; // Reset to original text
    });

    if (query) {
        textElements.forEach(element => {
            const regex = new RegExp(`(${query})`, 'gi');
            element.innerHTML = element.textContent.replace(regex, '<span class="highlight">$1</span>');
        });
    }
}