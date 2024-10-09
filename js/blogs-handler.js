var elements = document.getElementsByClassName("blogs");
function getblog(blogno){
    fetch("http://127.0.0.1:5005/blog"+blogno)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        for (let element of elements) {
            element.innerHTML = data;
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
}
function getQueryParams() {
    let params = new URLSearchParams(window.location.search);
    return params.get('message');
}
let message = getQueryParams();
getblog(message)
