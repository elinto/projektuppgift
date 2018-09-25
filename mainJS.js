$(document).ready(function () {
    $(".menuMobileIcon").click(function () {
        $(".menuContainer").show(200);
    });

    $(".closeMenu").click(function () {
        $(".menuContainer").hide(200);
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
    startaBildspel();
    function startaBildspel() {
        visaBild();
        bildspelIntervalId = setInterval(visaBild, 2000);
    }

    function stopBildspel() {
        clearInterval(bildspelIntervalId);
        bildspelIntervalId = null;
    }

    function toggleBildspel() {
        var toggleKnapp = document.getElementById("pauseKnapp");
        if (bildspelIntervalId) {
            stopBildspel();
            toggleKnapp.setAttribute("src", "bilder/play.png");
            //$("#pauseKnapp").attr("src", "bilder/play.png");
        } else {
            startaBildspel();
            toggleKnapp.setAttribute("src", "bilder/pause.png");
        }
    }

    document.getElementById("pauseKnapp").addEventListener("click", toggleBildspel);
    //$("#pauseKnapp").click(function () {
    //    toggleBildspel();
    //});
    

});








function validering() {

    var fornamn = document.getElementById('fnamn').value;
    var efternamn = document.getElementById('enamn').value;
    var telefon = document.getElementById('telnr').value;
    var meddelande = document.getElementById('med').value;
    var validerad = true;
    
    if (!/^[a-ö]{3,10}$/i.test(fornamn)) {
        alert('Vänligen skriv in ditt förnamn, minst 3 bokstäver!');
        validerad = false;
    }
    if (!/^[a-ö]{3,10}$/i.test(efternamn)) {
        alert('Vänligen skriv in ditt efternamn, minst 3 bokstäver!');
        validerad = false;
    }
    if (!/^[0-9]{5,12}$/i.test(telefon)) {
        alert('Vänligen skriv in ditt telefonnummer!');
        validerad = false;
    }
    if (!/^[a-ö0-9_\-]{7,100}$/i.test(meddelande)) {
        alert('Vänligen skriv in ditt meddelande!');
        validerad = false;
    }
    return validerad;
};

document.getElementById('fnamn').addEventListener("keyup", function(){
    $('#errorMessageFnamn').css('visibility', 'hidden');
    var fornamn = document.getElementById('fnamn').value;
    if (!/^[a-ö]{3,10}$/i.test(fornamn)) {
        document.getElementById('fnamn').style.borderColor = "red";
        $('#errorMessageFnamn').css('visibility', 'show');
        
    } else {
        document.getElementById('fnamn').style.borderColor = "green";
        $('#errorMessageFnamn').css('visibility', 'hidden');
    }

 })

 

 //Alexanra:
 function progress() {
    var elem = document.getElementById('BarJava'); 
    var width = 10;
    var id = setInterval(bars, 20); //tiden
    function bars() {
      if (width >= 65) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  };

  function progress1() {
    var elem = document.getElementById('BarHtml'); 
    var width = 10;
    var id = setInterval(bars, 20); //tiden
    function bars() {
      if (width >= 95) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  };

  function progress2() {
    var elem = document.getElementById('BarCss'); 
    var width = 10;
    var id = setInterval(bars,20 ); //tiden
    function bars() {
      if (width >= 75) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  };
  //hej jag hej
  

  
  //Susannes koood
  function progress4() {
    var elem = document.getElementById('BarJava2'); 
    var width = 10;
    var id = setInterval(bars, 20); //tiden
    function bars() {
      if (width >= 75) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  };

  function progress5() {
    var elem = document.getElementById('BarHtml2'); 
    var width = 10;
    var id = setInterval(bars, 20); //tiden
    function bars() {
      if (width >= 95) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  };

  function progress6() {
    var elem = document.getElementById('BarCss2'); 
    var width = 10;
    var id = setInterval(bars,20 ); //tiden
    function bars() {
      if (width >= 85) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  };

  //Elin kod

  function progress7() {
    var elem = document.getElementById('BarJava3'); 
    var width = 10;
    var id = setInterval(bars, 20); //tiden
    function bars() {
      if (width >= 45) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  };

  function progress8() {
    var elem = document.getElementById('BarHtml3'); 
    var width = 10;
    var id = setInterval(bars, 20); //tiden
    function bars() {
      if (width >= 75) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  };

  function progress9() {
    var elem = document.getElementById('BarCss3'); 
    var width = 10;
    var id = setInterval(bars,20 ); //tiden
    function bars() {
      if (width >= 95) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  };

 