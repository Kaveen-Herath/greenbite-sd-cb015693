// ===============================
// 1️⃣ Breathing Animation
// ===============================

// Get the circle element that will expand/contract
var mindCircle = document.getElementById("mind-breath-circle");

// Get the text element that shows "Inhale / Hold / Exhale"
var mindText = document.getElementById("mind-breath-text");

// Track the current state of breathing
var breathingState = "inhale";
var breathingTimeout;

// Function to handle the breathing cycle
function breathingCycle() {
  if (breathingState === "inhale") {
    // Enlarge the circle for inhale
    mindCircle.style.width = "200px";
    mindCircle.style.height = "200px";
    mindText.innerText = "Inhale"; // Show text
    breathingState = "hold";       // Next state is hold
    breathingTimeout = setTimeout(breathingCycle, 4000); // Wait 4 seconds then call again

  } else if (breathingState === "hold") {
    // Hold the breath
    mindText.innerText = "Hold"; // Show hold
    breathingState = "exhale";   // Next state is exhale
    breathingTimeout = setTimeout(breathingCycle, 4000); // Wait 4 seconds then call again

  } else if (breathingState === "exhale") {
    // Shrink the circle for exhale
    mindCircle.style.width = "150px";
    mindCircle.style.height = "150px";
    mindText.innerText = "Exhale"; // Show text
    breathingState = "inhale";     // Next state is inhale
    breathingTimeout = setTimeout(breathingCycle, 4000); // Wait 4 seconds then call again
  }
}

// ===============================
// 2️⃣ Meditation Timer
// ===============================

// Get the start button element
var startBtn = document.getElementById("mind-start-timer-btn");

// Get the stop button element
var stopBtn = document.getElementById("mind-stop-timer-btn");

// Get the timer display element (where countdown will appear)
var timerDisplay = document.getElementById("mind-timer-display");

// Get the paragraph to show completed sessions
var sessionCompleted = document.getElementById("mind-session-completed");

var timerInterval; // store timer interval

// Start button
startBtn.addEventListener("click", function () {
  // Reset any old cycles
  clearTimeout(breathingTimeout);
  clearInterval(timerInterval);

  // Start breathing cycle
  breathingCycle();

  // Get minutes from input
  var minutes = document.getElementById("mind-session-minutes").value;

  if (minutes === "" || minutes <= 0) {
    alert("Please enter valid minutes");
    return;
  }

  var totalSeconds = minutes * 60;

  // Start countdown
  timerInterval = setInterval(function () {
    var mins = Math.floor(totalSeconds / 60);
    var secs = totalSeconds % 60;
    if (secs < 10) secs = "0" + secs;
    timerDisplay.innerText = mins + ":" + secs;
    totalSeconds--;

    if (totalSeconds < 0) {
      clearInterval(timerInterval);
      timerDisplay.innerText = "00:00";
      var count = localStorage.getItem("mindCompletedSessions") || 0;
      count = parseInt(count) + 1;
      localStorage.setItem("mindCompletedSessions", count);
      sessionCompleted.innerText = "Session Completed!! Total: " + count;
    }
  }, 1000);
});

// Stop button
stopBtn.addEventListener("click", function () {
  clearTimeout(breathingTimeout); // stop breathing cycle
  clearInterval(timerInterval);   // stop timer
  mindText.innerText = "Stopped"; // show stopped
});


// ===============================
// 3️⃣ Ambient Sounds
// ===============================

// Get the audio element used to play sounds
var audioPlayer = document.getElementById("mind-audio-player");

// Get all the buttons that trigger sounds
var soundButtons = document.querySelectorAll(".mind-sound-btn");

// Get the stop sound button
var stopBtn = document.getElementById("mind-stop-sound-btn");

// Loop through each sound button and add click listener
for (var i = 0; i < soundButtons.length; i++) {
  soundButtons[i].addEventListener("click", function() {
    var sound = this.getAttribute("data-sound"); // Get sound name from button
    audioPlayer.loop = true;                     // Loop continuously
    audioPlayer.play();                          // Start playing
  });
}

// Stop button listener
stopBtn.addEventListener("click", function() {
  audioPlayer.pause();      // Pause the audio
  audioPlayer.currentTime = 0; // Reset playback to start
});
