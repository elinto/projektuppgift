$(document).ready(function () {
  //Vilket språk det är 
  fetchGithub("javascript", "reposcontainer");
  fetchGithub("css", "cssRepos");

  function fetchGithub(lang, containerClass) {

    fetch('https://github-trending-api.now.sh/repositories?language=' + lang + '&since=weekly')
      .then(response => response.json())
      .then(jsondata => {
        // console.log(jsondata)
        for (var i = 0; i < 5; i++) {
          var repo = jsondata[i];

          var name = "<a href='" + repo.url + "' target='_blank'>" + repo.name + "</a>";
          var author = "<a href='https://github.com/" + repo.author + "' target='_blank'>" + repo.author + "</a>";
          $("." + containerClass).append("<li>" + name + " av " + author + "(stars: " + repo.stars + ") </li>");
        }
      })

  }


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
    if (img) {
      img.setAttribute("src", bildSpel[currentIndex]);
      currentIndex++;
      if (currentIndex === bildSpel.length) {
        currentIndex = 0;

      }
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

    } else {
      startaBildspel();
      toggleKnapp.setAttribute("src", "bilder/pause.png");
    }
  }

  var pauseknapp = document.getElementById("pauseKnapp");
  if (pauseknapp) {
    pauseknapp.addEventListener("click", toggleBildspel);
  }


  $('#errorMessageFnamn').hide();
  var fornamnTextbox = document.getElementById('fnamn');
  if (fornamnTextbox) {
    fornamnTextbox.addEventListener("keyup", function () {
      var fornamn = document.getElementById('fnamn').value;
      var hasError = !/^[a-ö]{3,100}$/i.test(fornamn);

      if (hasError) {
        $("#fnamn").addClass("textboxerror");
        $('#errorMessageFnamn').show();
        $("#fnamn").removeClass("textboxready");
      } else {
        $("#fnamn").removeClass("textboxerror");
        $("#fnamn").addClass("textboxready");
        $('#errorMessageFnamn').hide();
      }
    });
  }
  $('#errorMessageEnamn').hide();
  var efternamnTextbox = document.getElementById('enamn');
  if (efternamnTextbox) {
    efternamnTextbox.addEventListener("keyup", function () {
      var efternamn = document.getElementById('enamn').value;
      var hasError = !/^[a-ö]{3,100}$/i.test(efternamn);

      if (hasError) {
        $("#enamn").addClass("textboxerror");
        $('#errorMessageEnamn').show();
        $("#enamn").removeClass("textboxready");
      } else {
        $("#enamn").removeClass("textboxerror");
        $("#enamn").addClass("textboxready");
        $('#errorMessageEnamn').hide();
      }

    });
  }

  $('#errorMessageTele').hide();
  var telnrTextbox = document.getElementById('telnr');
  if (telnrTextbox) {
    telnrTextbox.addEventListener("keyup", function () {
      var telefon = document.getElementById('telnr').value;
      var hasError = !/^[0-9]{10,12}$/i.test(telefon);

      if (hasError) {
        $('#telnr').addClass("textboxerror");
        $('#errorMessageTele').show();
        $("#telnr").removeClass("textboxready");

      } else {
        $("#telnr").removeClass("textboxerror");
        $("#telnr").addClass("textboxready");
        $('#errorMessageTele').hide();
      }

    });
  }
  $('#errorMessageMed').hide();
  var medTextbox = document.getElementById('med');
  if (medTextbox) {
    medTextbox.addEventListener("keyup", function () {
      var meddelande = document.getElementById('med').value;
      var hasError = !/^[a-ö0-9_\-]{1,100}$/i.test(meddelande)

      if (hasError) {
        $('#med').addClass("textboxerror");
        $('#errorMessageMed').show();
        $("#med").removeClass("textboxready");

      } else {
        $("#med").removeClass("textboxerror");
        $("#med").addClass("textboxready");
        $('#errorMessageMed').hide();
      }

    });
  }

  $('#errorMessageEpost').hide();
  var medTextbox = document.getElementById('epost');
  if (medTextbox) {
    medTextbox.addEventListener("keyup", function () {
      var epost = document.getElementById('epost').value;
      var hasError = !/\S+@\S+\.\S+/.test(epost)

      if (hasError) {
        $('#epost').addClass("textboxerror");
        $('#errorMessageEpost').show();
        $("#epost").removeClass("textboxready");

      } else {
        $("#epost").removeClass("textboxerror");
        $("#epost").addClass("textboxready");
        $('#errorMessageEpost').hide();
      }

    });
  }

  $("#susanneProfilBox").css("left", window.innerWidth + "px");
  $("#alexandraProfilBox").css("left", window.innerWidth + "px");
  $("#elinProfilBox").css("left", window.innerWidth + "px");
  var animeringHastighet = 500;

  $("#susanneProfilBox").animate({ "left": "-=" + window.innerWidth + "px" }, animeringHastighet, function () {
    $("#alexandraProfilBox").animate({ "left": "-=" + window.innerWidth + "px" }, animeringHastighet, function () {
      $("#elinProfilBox").animate({ "left": "-=" + window.innerWidth + "px" }, animeringHastighet, function(){
        $("#susanneProfilBox").addClass('box_rotate box_transition');
        $("#alexandraProfilBox").addClass('box_rotate box_transition');
        $("#elinProfilBox").addClass('box_rotate box_transition');
      });
    });
  });



});

function validering() {

  var fornamnValid = $("#fnamn").hasClass("textboxready");
  var efternamnValid = $("#enamn").hasClass("textboxready");
  var telnrValid = $("#telnr").hasClass("textboxready");
  var meddelandeValid = $("#med").hasClass("textboxready");
  var epostValid = $("#epost").hasClass("textboxready");

  return fornamnValid && efternamnValid && telnrValid && meddelandeValid && epostValid;
};


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
      elem.innerHTML = width * 1 + '%';
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
      elem.innerHTML = width * 1 + '%';
    }
  }
};

function progress2() {
  var elem = document.getElementById('BarCss');
  var width = 10;
  var id = setInterval(bars, 20); //tiden
  function bars() {
    if (width >= 75) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
};


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
      elem.innerHTML = width * 1 + '%';
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
      elem.innerHTML = width * 1 + '%';
    }
  }
};

function progress6() {
  var elem = document.getElementById('BarCss2');
  var width = 10;
  var id = setInterval(bars, 20); //tiden
  function bars() {
    if (width >= 85) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
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
      elem.innerHTML = width * 1 + '%';
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
      elem.innerHTML = width * 1 + '%';
    }
  }
};

function progress9() {
  var elem = document.getElementById('BarCss3');
  var width = 10;
  var id = setInterval(bars, 20); //tiden
  function bars() {
    if (width >= 95) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
};

if(window.L){
  var mymap = L.map('mapid').setView([59.2552, 15.2482], 15);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox.streets'
  }).addTo(mymap);
  
}

