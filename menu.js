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
function startaBildspel() {
    setInterval(visaBild, 2000);

}

document.getElementsByClassName("pauseK").addEventListener("click", myFunction);
function myFunction(){

}


