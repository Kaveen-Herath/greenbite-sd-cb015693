document.getElementById("calc-form").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get input values
  var age = parseInt(document.getElementById("calc-age").value);
  var gender = document.getElementById("calc-gender").value;
  var height = parseFloat(document.getElementById("calc-height").value);
  var weight = parseFloat(document.getElementById("calc-weight").value);
  var activity = parseFloat(document.getElementById("calc-activity").value);

  // Calculate BMR
  var bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Calculate TDEE
  var tdee = bmr * activity;

  // Macronutrients
  var carbs = (tdee * 0.5) / 4;
  var protein = (tdee * 0.2) / 4;
  var fat = (tdee * 0.3) / 9;


var maxMacro = Math.max(carbs, protein, fat);

// Hide video
document.getElementById("calc-placeholder-video").style.display = "none";

  // Display results
  document.getElementById("calc-results").classList.remove("hidden");
  document.getElementById("calc-bmr").innerText = bmr.toFixed(2);
  document.getElementById("calc-tdee").innerText = tdee.toFixed(2);
  document.getElementById("calc-carbs").innerText = carbs.toFixed(0);
  document.getElementById("calc-protein").innerText = protein.toFixed(0);
  document.getElementById("calc-fat").innerText = fat.toFixed(0);

// Animate after a short delay
setTimeout(() => {
  var maxMacro = Math.max(carbs, protein, fat);


// Set bar widths proportionally
document.getElementById("bar-carbs").style.width = `${(carbs / maxMacro) * 100}%`;
document.getElementById("bar-protein").style.width = `${(protein / maxMacro) * 100}%`;
document.getElementById("bar-fat").style.width = `${(fat / maxMacro) * 100}%`;

// Show the grams in the bars
document.getElementById("bar-carbs").innerText = `${Math.round(carbs)}g`;
document.getElementById("bar-protein").innerText = `${Math.round(protein)}g`;
document.getElementById("bar-fat").innerText = `${Math.round(fat)}g`;
}, 100);
});
