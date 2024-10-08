function searchContent(event) {
    event.preventDefault();
    const query = document.getElementById('search-bar').value.toLowerCase();
    const content = document.getElementById('content');
    const textElements = content.querySelectorAll('p, h1, h2, span'); // Select all relevant text elements
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