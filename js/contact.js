// ===========================
// Contact Form Logic
// ===========================
var form = document.getElementById("contactForm");
var confirmMsg = document.getElementById("contactConfirm");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop page reload

  var name = document.getElementById("contactName").value.trim();
  var email = document.getElementById("contactEmail").value.trim();
  var message = document.getElementById("contactMessage").value.trim();

  // Validation
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Store feedback in localStorage
  var feedback = JSON.parse(localStorage.getItem("contactFeedback")) || [];
  feedback.push({ name: name, email: email, message: message });
  saveToLocalStorage("contactFeedback", feedback);

  // Show confirmation
  confirmMsg.style.display = "block";

  // Clear form
  form.reset();
});

// ===========================
// FAQ Accordion Logic
// ===========================
var faqQuestions = document.querySelectorAll(".contact-faq-question");

faqQuestions.forEach(function(q) {
  q.addEventListener("click", function() {
    var answer = this.nextElementSibling;

    // Toggle show/hide
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});
