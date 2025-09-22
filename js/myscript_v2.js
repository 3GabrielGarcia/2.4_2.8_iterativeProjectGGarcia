// get the button from javascript
let mybutton = document.getElementById("myBtn");

// controls when button shows
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 475 || document.documentElement.scrollTop > 475)  {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// when button is clicked it scrolls to the top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Permission forms toggle

function toggleForm() {
  var x = document.getElementById("form1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
	
  var x = document.getElementById("form2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  var x = document.getElementById("form3");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
	
  var x = document.getElementById("form4");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
	
  var x = document.getElementById("form5");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  var x = document.getElementById("form6");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
	
} 

// W3 schools image carousel

let slideIndex = 1;

document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

setInterval(() => { plusSlides(1) }, 4000);

























