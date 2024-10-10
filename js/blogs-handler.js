var elements = document.getElementsByClassName("blogs");
function getblog(blogno){
    fetch("https://1964-152-58-97-34.ngrok-free.app/blog"+blogno, {
        headers:{
            'ngrok-skip-browser-warning': 'true'
        }
    })
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
