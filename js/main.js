// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });
}

// ========== Header scroll ==========

let lastScrollTop = 0;
const header = document.getElementById("main-header");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.style.top = "-80px"; // Adjust based on header height
  } else {
    // Scrolling up
    header.style.top = "0";
  }

  lastScrollTop = scrollTop;
});


// ========== Hero Image Slider ==========
var slideIndex = 0;
var slides = document.querySelectorAll(".slide");

function showSlides() {
  // Hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  // Move to next slide
  slideIndex = slideIndex + 1;
  if (slideIndex >= slides.length) {
    slideIndex = 0; // Reset to first slide
  }

  // Show current slide
  slides[slideIndex].classList.add("active");
}

if (slides.length > 0) {
  setInterval(showSlides, 5000); // Change every 5 seconds
}

// ========== Newsletter subscription ==========
var newsletterForm = document.getElementById('newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault(); // stop page refresh

    var emailInput = document.getElementById('newsletter-email');
    var email = emailInput.value;

    localStorage.setItem('newsletterEmail', email); // Save to local storage
    alert("Thanks for subscribing!");

    newsletterForm.reset(); // clear form
  });
}

// ========== Reusable localStorage functions ==========
function saveToLocalStorage(key, value) {
  // Convert objects/arrays into text before saving
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLocalStorage(key) {
  // Convert text back into object/array
  var item = localStorage.getItem(key);
  return JSON.parse(item);
}