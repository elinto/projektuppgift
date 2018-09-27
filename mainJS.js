$(document).ready(function () {
  //Vilket språk det är 
  fetchGithub("javascript", "reposcontainer");
  fetchGithub("css", "cssRepos");

  function fetchGithub(lang, containerClass) {

    var date = getEnVeckaSedan();

    fetch('https://api.github.com/search/repositories?q=created:' + date + '+language:' + lang + '&sort=stars&order=desc')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        var repos = data.items;

        for (var i = 0; i < 5; i++) {
          var repo = repos[i];
          var starsText = " (" + repo.stargazers_count + " stars)";
          var repoLink = "<a href='" + repo.html_url + "' target='_blank'>" + repo.name + "</a>";
          var ownerLink = "<a href='" + repo.owner.html_url + "' target='_blank'>" + repo.owner.login + "</a>"
          var radHtml = repoLink + starsText + " " + ownerLink;

          $("." + containerClass).append("<p>" + radHtml + "</p>")
        }

      });
  }

  function getEnVeckaSedan() {
    var enVeckaSedan = new Date();
    enVeckaSedan.setDate(enVeckaSedan.getDate() - 7);

    var månad = enVeckaSedan.getMonth() + 1;
    if (månad < 10) {
      månad = "0" + månad;
    }

    var dag = enVeckaSedan.getDate();
    if(dag < 10){
      dag = "0" + dag;
    }

    return enVeckaSedan.getFullYear() + "-" + månad + "-" + dag;
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

  // Här ligger koden för att få boxarna röda när man inte fyllt i rätt

  $('#errorMessageFnamn').hide();
  var fornamnTextbox = document.getElementById('fnamn');
  if (fornamnTextbox) {
    fornamnTextbox.addEventListener("keyup", function () {
      var fornamn = document.getElementById('fnamn').value;
      var hasError = !/^[a-ö]{3,100}$/i.test(fornamn);

      if (hasError) {
        $("#fnamn").addClass("textboxerror");
        $('#errorMessageFnamn').show();
      } else {
        $("#fnamn").removeClass("textboxerror");
        $("#fnamn").addClass("textboxready"); // Vill att det ska bli grönt
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
      } else {
        $("#enamn").removeClass("textboxerror");
        $("#enamn").addClass("textboxready");
        $('#errorMessageEnamn').hide();
      }

    });
  }
  // Fortsätt ändra här

  $('#errorMessageTele').hide();
  var telnrTextbox = document.getElementById('telnr');
  if (telnrTextbox) {
    telnrTextbox.addEventListener("keyup", function () {
       var telefon = document.getElementById('telnr').value;
       var hasError = !/^[0-9]{10,12}$/i.test(telefon);

      if (hasError) {
        $('#telnr').addClass("textboxerror");
        $('#errorMessageTele').show();

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

      } else {
        $("#epost").removeClass("textboxerror");
        $("#epost").addClass("textboxready");
        $('#errorMessageEpost').hide();
      }

    });
  }

});

function validering() {

  var fornamn = document.getElementById('fnamn').value;
  var efternamn = document.getElementById('enamn').value;
  var telefon = document.getElementById('telnr').value;
  var meddelande = document.getElementById('med').value;
  var epost = document.getElementById('epost').value;
  var validerad = true;

  if (!/^[a-ö]{3,100}$/i.test(fornamn)) {
    validerad = false;
  }
  if (!/^[a-ö]{3,100}$/i.test(efternamn)) {
    validerad = false;
  }
  if (!/^[0-9]{10,12}$/i.test(telefon)) {
    validerad = false;
  }
  if (!/^[a-ö0-9_\-]{1,100}$/i.test(meddelande)) {
    validerad = false;
  }
  if(!/\S+@\S+\.\S+/(epost)){
    validerad = false;
  }

  return validerad;
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

var mymap = L.map('mapid').setView([59.2552, 15.2482], 15);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
maxZoom: 18,
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox.streets'
}).addTo(mymap);


