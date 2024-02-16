import "./style.css";
// script.js
  window.addEventListener('DOMContentLoaded', function() {
    // Définir la fonction timing
    function timing() {
        var t = document.getElementById("horloge")
    // Créer un objet Date
        var i = new Date();
    // Formater l'heure avec des zéros devant les minutes et les secondes si besoin
        var années = i.getFullYear()
        var mois = i.getMonth() < 10 ? "0" + i.getMonth() : i.getMonth()
        var jours = i.getDate() < 10 ? "0" + i.getDate() : i.getDate()
        var heures = i.getHours();
        var minutes = i.getMinutes() < 10 ? "0" + i.getMinutes() : i.getMinutes();
        var secondes = i.getSeconds() < 10 ? "0" + i.getSeconds() : i.getSeconds();
    // Afficher l'heure dans l'élément horloge
        var l = " <span> Bonjour, il est <span style='font-style:italic'> " + heures +
        ":" + minutes + ":" + secondes + "</span> </span>"  + "<span style='font-size: 25px'>" + "(" + jours + "/" + mois + "(sorry, the month isn't exact)" + "/" +  années + ")" ;
       // J'ai supprimé la balise h2 et le style text-align: center de la variable l car ils sont déjà définis dans la div horloge
        t.innerHTML = l
  }

  // Sélectionner le bouton
    let bouton = document.getElementById("bouton");

  // Ajouter un écouteur d'événements sur le clic du bouton
    bouton.addEventListener("click", function() {
    // Appeler la fonction timing une fois au clic
    timing();
    // Appeler la fonction timing toutes les secondes ensuite
    setInterval(timing, 1000);
  });


  })

  window.addEventListener('DOMContentLoaded', function () {
    function météo() {
      var temps = document.getElementById("meteo")
      var n = `<div id="ww_e961d86a70a7f" v='1.3' loc='id' a='{"t":"ticker","lang":"fr","sl_lpl":1,"ids":[],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}'>Source de données météorologiques: <a href="https://wetterlang.de/london_wetter_21_tage/" id="ww_e961d86a70a7f_u" target="_blank">London 21 tage wetter</a></div><script async src="https://app2.weatherwidget.org/js/?id=ww_e961d86a70a7f"></script>`
      temps.innerHTML= n
    }
    let bouton2 = document.getElementById("bouton2");
    bouton2.addEventListener("click", function() {
      météo();
    })
  })

  window.addEventListener('DOMContentLoaded', function() {
    function motor() {
        let ui  = '<div style="font-size="15px"><input id="recherche" type="auto" value="tapez votre recherche => https://cse.google.com/cse?cx=523870d2f229b460d" style="background-color: beige; height: 40px; width: 1000px; position: absolute; top: 150px; left: 235;">'
        let iu = '<img src="21fda3547f2043408c29a869ad147b85.png" alt="Mon logo Sootle"></img>'

        let search = document.getElementById("recherche")
        search.innerHTML = iu + ui

    }
    let bouton3 = document.getElementById("research");
    bouton3.addEventListener("click", function() {
      motor()
    })

  })

  document.addEventListener('DOMContentLoaded', function() {
    function game() {
      let THEGAME = document.getElementById('mygame')
      let thegame = '<div style="position:absolute; top: 300px; left: 400px"><h1>https://github.com/EtherD3v/widgeTetriS--</div>'
      THEGAME.innerHTML= thegame

    }
    let bouton4 = document.getElementById("bouton4")
    bouton4.addEventListener('click', function(){
      game()
    })

  })
