const processEventData = {
    //! Insert HTML for pages here
    "Home" : `
        <h1>Heading lvl 1</h1>
        <h2>Heading lvl 2</h2>
        <h3>Heading lvl 3</h3>
        <h4>Heading lvl 4</h4>
        <h5>Heading lvl 5</h5>
        <h6>Heading lvl 6</h6>
        <p>Para</p>
        <a href="https://www.youtube.com/">Link</a>
        <div>
            <decotext>This is some deco text !</decotext>
        </div>
        <p class="centeredtext">This is in the center</p>
    `,
    "A tag" : `
        <a href="https://www.youtube.com/">Click me !</a>
    `,
    "About" : `
        <p>This is what a <a href="https://github.com/zalanwastaken/website-repo-comp.">Link</a> looks like !</p>
    `
}
function processEvent(element){ //? Process the clicked event for the tabs using the prossesed event data const
    var bodyDiv = document.getElementById("bodydiv")
    if(element.innerHTML in processEventData){
        bodyDiv.innerHTML = processEventData[element.innerHTML]
    }
    else{
        bodyDiv.innerHTML = "<h1>TODO</h1>"
    }
    console.log(processEventData[element.innerHTML])
}
