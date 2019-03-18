

function changeColor(img) {
    if (document.getElementById(img).style.opacity == 0.5) {
        document.getElementById(img).style.opacity = 1.0;
    }
    else {
        document.getElementById(img).style.opacity = 0.5;
    }
}

function setupGame(person) {
    console.log(person);
    //let hints = document.getElementById("#hints");
    //find how html works
    hints.innerHTML(person.hints);
    console.log(hints);
}

function fetchGame() {
    fetch('./games.json')
        .then(function(resp) {
            return resp.json();
        })
        .then(function(json) {
            console.log(json["games"][0]);
            setupGame(json["games"][0])
        })
}


function init() {
    console.log("boobs");
    fetchGame();
}

init();