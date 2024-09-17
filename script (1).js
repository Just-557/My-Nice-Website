// script.js
const image = document.getElementById("download.jpeg");
const button = document.getElementById("showImage");
const textElement = document.getElementById("text-element"); // Get the text element

image.style.display = "none"; 
textElement.style.display = "none"; // Initially hide the text

let imageIsVisible = false; 

button.addEventListener("click", () => {
  imageIsVisible = !imageIsVisible; 
  if (imageIsVisible) {
    image.style.display = "block";
    button.textContent = "Hide"; 
    textElement.style.display = "block"; // Show the text element
  } else {
    image.style.display = "none";
    button.textContent = "Show";
    textElement.style.display = "none"; // Hide the text element
  }
});;

function openNewTab() {
window.open("https://scratch.mit.edu/projects/1057940238/", "_blank"); 
}
function openImage1() {
window.open("https://scratch.mit.edu/projects/786754761/", "_blank"); 
}

function openImage2() { window.open("https://scratch.mit.edu/projects/901846696/", "_blank"); 
}

function openImage3() {
window.open("https://scratch.mit.edu/projects/955878997/", "_blank"); 
}