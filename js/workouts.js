// ===============================
// Workout data
// ===============================
const workoutData = {
  arms: {
    none: ["Push-ups", "Arm Circles"],
    dumbbells: ["Bicep Curls", "Shoulder Press"],
    resistance: ["Band Pull Aparts", "Overhead Band Press"],
    kettlebell: ["Kettlebell Curl", "Kettlebell Overhead Press"]
  },

  legs: {
    none: ["Squats", "Lunges"],
    dumbbells: ["Goblet Squats", "Dumbbell Lunges"],
    resistance: ["Banded Squats", "Banded Side Steps"],
    kettlebell: ["Kettlebell Swings", "Kettlebell Goblet Squat"]
  },

  full: {
    none: ["Burpees", "Mountain Climbers"],
    dumbbells: ["Thrusters", "Dumbbell Deadlifts"],
    resistance: ["Resistance Burpees", "Band Rows"],
    kettlebell: ["Kettlebell Clean and Press", "Kettlebell Swing"]
  }
};

// ===============================
// DOM Elements
// ===============================
const form = document.getElementById("workout-form");
const result = document.getElementById("workout-result");
const startBtn = document.getElementById("start-btn");

const modal = document.getElementById("timerModal");
const closeModal = document.getElementById("closeModal");
const timerDisplay = document.getElementById("timer");
const exerciseName = document.getElementById("exercise-name");

let currentWorkout = [];

// ===============================
// Generate workout
// ===============================
form.addEventListener("submit", function(e) {
  e.preventDefault(); // prevent form from reloading page

  const body = document.getElementById("body-part").value;
  const equip = document.getElementById("equipment").value;

  currentWorkout = workoutData[body][equip];

  // Display exercises as cards in 2-column grid
    var html = "<h3>Your Workout Plan</h3>";
    html += '<div class="exercise-grid">';
    for (var i = 0; i < currentWorkout.length; i++) {
        html += '<div class="exercise-card">';
        html += "<h4>" + currentWorkout[i] + "</h4>";
        html += "<p>30 Seconds</p>";
        html += "</div>";
    }
    html += "</div>";

    result.innerHTML = html;

    // Show the Start Workout button
    startBtn.classList.remove("hidden");
});

// ===============================
// Start Workout Button
// ===============================
startBtn.addEventListener("click", function() {
  modal.style.display = "flex"; // show modal
  startWorkoutSequence();        // start timer sequence
});

closeModal.addEventListener("click", function() {
  modal.style.display = "none";  // close modal
});

// ===============================
// Timer Sequence
// ===============================
function startWorkoutSequence() {
  let index = 0;

  function runExercise() {
    //checks if all exercises done
    if (index >= currentWorkout.length) {
      exerciseName.innerText = "Workout Complete!!";
      timerDisplay.innerText = "";
      return;
    }

    // Show current exercise name
    exerciseName.innerText = currentWorkout[index];
    
    // Start 30-second exercise
    startTimer(30, function() {
      // After exercise, check if next exists
      if (index < currentWorkout.length - 1) {
        // Show 10-second rest
        exerciseName.innerText = "Take a Rest";
        startTimer(10, function() {
          index++;        // move to next exercise
          runExercise();  // call again
        });
      } else {
        index++;
        runExercise();
      }
    });
  }

  runExercise(); // start first exercise
}

// Simple countdown timer
function startTimer(seconds, callback) {
  let time = seconds;
  timerDisplay.innerText = time;

  const interval = setInterval(function() {
    time--;
    timerDisplay.innerText = time;

    if (time <= 0) {
      clearInterval(interval); //Stops timer
      callback();
    }
  }, 1000);
}
