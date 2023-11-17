document.addEventListener("DOMContentLoaded", function() {
    const documentLink = document.getElementById("document");
    documentLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.open(documentLink.href, "_blank");
    });
});

const roleElement = document.querySelector('.role');
const textArray = ["I'm a Full-Stack Developer", "Building Awesome Websites"];
let currentTextIndex = 0;

function animateText() {
  roleElement.textContent = textArray[currentTextIndex];
  currentTextIndex = (currentTextIndex + 1) % textArray.length;
}

setInterval(animateText, 5000); 

var openResume = document.getElementById("openResume");
var openContact = document.getElementById("openContact");
var openServices = document.getElementById("openServices");
var openProjects = document.getElementById("openProjects");
var projects = document.getElementById("projects");
var resume = document.getElementById("resume");
var services = document.getElementById("services");
var contacts = document.getElementById("contacts");

 openContact.onclick = function(){
  contacts.style.display = "block";
 }
 openResume.onclick = function(){
  resume.style.display = "block";
 }
 openServices.onclick = function(){
  services.style.display= "block";
 }
 openProjects.onclick = function(){
  projects.style.display = "block";
 }
 
 
 document.addEventListener("DOMContentLoaded", function() {
  var closeButtons = document.querySelectorAll("#Close");
  var sections = document.querySelectorAll("section");

  function closeAllSections() {
    sections.forEach(function(section) {
      section.style.display = "none";
    });
  }

  function handleTabClick(clickedSection) {
    closeAllSections();

    clickedSection.style.display = "block";
  }

  var tabs = document.querySelectorAll(".tabs a");

  tabs.forEach(function(tab) {
    tab.addEventListener("click", function(event) {
      event.preventDefault(); 
      var targetSectionId = tab.getAttribute("href").substring(1);
      var targetSection = document.getElementById(targetSectionId);

      handleTabClick(targetSection);
    });
  });
//the closing button x 
  closeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var section = button.parentElement;
      section.style.display = "none";
    });
  });
});
