
function changeColors() {
    // available colors
    let colors=['red','blue','green',"yellow","pink","grey","purple"];

// get random color
    var randomColor= colors[Math.floor(Math.random()* colors.length)];

    document.body.style.backgroundColor= randomColor;
}
