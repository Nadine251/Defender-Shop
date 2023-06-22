// Funktion zum Wechseln der Schwachstelle
function switchVulnerability(vulnerabilityId) {
    // Alle Schwachstellen ausblenden
    var vulnerabilities = document.getElementsByClassName("vulnerability");
    for (var i = 0; i < vulnerabilities.length; i++) {
      vulnerabilities[i].style.display = "none";
    }
  
    // Gewählte Schwachstelle einblenden
    var selectedVulnerability = document.getElementById(vulnerabilityId);
    selectedVulnerability.style.display = "block";
  
    // Nur den ersten Hinweis anzeigen
    var firstHint = selectedVulnerability.getElementsByClassName("hint")[0];
    firstHint.classList.remove("hidden");
  
    // Alle anderen Hinweise ausblenden
    var hints = selectedVulnerability.getElementsByClassName("hint");
    for (var j = 1; j < hints.length; j++) {
      hints[j].classList.add("hidden");
    }
  }
  
  // Funktion zum Einblenden des nächsten Hinweises
  function showNextHint(hintElement) {
    var currentHint = hintElement;
    var nextHint = currentHint.nextElementSibling;
  
    // Einblenden des nächsten Hinweises
    //currentHint.classList.add("hidden");
     if (nextHint) {
      nextHint.classList.remove("hidden");
    }
  }
  
  // Initialisierung beim Laden der Seite
  window.onload = function() {
    // Standardmäßig erste Schwachstelle anzeigen
    switchVulnerability("schwachstelle1");
}