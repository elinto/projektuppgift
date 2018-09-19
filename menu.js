$(document).ready(function(){
    $(".menuMobileIcon").click(function(){
        $(".menuContainer").show(200);
    })

    $(".closeMenu").click(function(){
        $(".menuContainer").hide(200);
    })
});