$(document).ready(function () {
    $(".menuMobileIcon").click(function () {
        $(".menuContainer").show(200);
    })

    $(".closeMenu").click(function () {
        $(".menuContainer").hide(200);
    })

});

var bildSpel = [
    "bilder/musik.jpg",
    "bilder/bubbla.jpg",
    "bilder/yay.jpg"
];

var currentIndex = 0;

function visaBild() {
    var img = document.getElementById("bildSpel");
    img.setAttribute("src", bildSpel[currentIndex]);
    currentIndex++;
    if (currentIndex === bildSpel.length) {
        currentIndex = 0;

    }
}
var bildspelIntervalId = null;

function startaBildspel() {
    visaBild();
    bildspelIntervalId = setInterval(visaBild, 2000);
}

function stopBildspel(){
    clearInterval(bildspelIntervalId);
    bildspelIntervalId = null;
}

function toggleBildspel(){
    var toggleKnapp = document.getElementById("pauseKnapp");
    if(bildspelIntervalId){
        stopBildspel();
        toggleKnapp.setAttribute("src", "bilder/play.png");
    } else {
        startaBildspel();
        toggleKnapp.setAttribute("src", "bilder/pause.png");
    }
}

document.getElementById("pauseKnapp").addEventListener("click", toggleBildspel);



