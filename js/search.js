function searchContent(event) {
    event.preventDefault();
    const query = document.getElementById('search-bar').value.toLowerCase();
    const content = document.getElementById('about-us');
    const textElements = content.querySelectorAll('p, h1, h2, li');
    textElements.forEach(element => {
        element.innerHTML = element.textContent;
    });
    if (query) {
        textElements.forEach(element => {
            const regex = new RegExp(`(${query})`, 'gi');
            element.innerHTML = element.textContent.replace(regex, '<span class="highlight">$1</span>');
        });
    }
}
