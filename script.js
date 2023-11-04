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

setInterval(animateText, 5000); // Change text every 2 seconds

var openResume = document.getElementById("openResume");
var openContact = document.getElementById("openContact");
var openServices = document.getElementById("openServices");
var openProjects = document.getElementById("openProjects");
var projects = document.getElementById("projects");
var resume = document.getElementById("resume");
var services = document.getElementById("services");
var contacts = document.getElementById("contacts");
var Close = document.getElementById("Close");

//  openContact.onclick = function(){
//   contacts.style.display = "block";
//  }
//  openResume.onclick = function(){
//   resume.style.display = "block";
//  }
//  openServices.onclick = function(){
//   services.style.display= "block";
//  }
//  openProjects.onclick = function(){
//   projects.style.display = "block";
//  } 
//  Close.onclick = function(){
//   resume.style.display = "none";
//  }
//  Close.onclick = function(){
//   projects.style.display = "none";
//  }
//  Close.onclick = function(){
//   contacts.style.display = "none";
//  }
//  Close.onclick = function(){
//   services.style.display = "none";
//  }