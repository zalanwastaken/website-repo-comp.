var elements = document.getElementsByClassName("blogs");

// Fetch the content from your server
function getblog(blogno){
    fetch("http://127.0.0.1:5005/blog"+blogno)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text(); // Get the actual response text
    })
    .then(data => {
        for (let element of elements) {
            element.innerHTML = data; // Insert the fetched content into each element
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
}
function getQueryParams() {
    let params = new URLSearchParams(window.location.search);
    return params.get('message'); // Access the 'message' parameter
}

let message = getQueryParams();
getblog(message)