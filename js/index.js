const processEventData = {
    //! Insert HTML for pages here
    "Home" : `
        <p>Hello world !</p>
    `,
    "A tag" : `
        <a href="https://www.youtube.com/">Click me !</a>
    `
}
function processEvent(element){
    var bodyDiv = document.getElementById("bodydiv")
    if(element.innerHTML in processEventData){
        bodyDiv.innerHTML = processEventData[element.innerHTML]
    }
    else{
        bodyDiv.innerHTML = "<h1>TODO</h1>"
    }
    console.log(processEventData[element.innerHTML])
}
