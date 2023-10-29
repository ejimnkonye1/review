const circles = document.querySelectorAll('.circle');
const ratingDisplay = document.getElementById('rating');
let selectedCount = 0;
let selectedNumber = null; // Variable to store the selected number

circles.forEach(circle => {
  circle.addEventListener('click', function() {
     // Remove background color from all circles
     circles.forEach(circle => {
      circle.style.background = ''; // Reset background color for all circles
    });

    // Set the background color for the clicked circle
    circle.style.background = 'hsl(25, 97%, 53%)';
    selectedNumber = circle.textContent; // Store the selected number
    updateDisplay(selectedNumber); // Update display or do other operations if needed
  });
});

function updateDisplay(selectedNumber) {
  // Update the display, for example:
  ratingDisplay.textContent = `Selected: ${selectedNumber}`;
}

// Event listener for the submit button
document.getElementById('submitBtn').addEventListener('click', function() {
  if (selectedNumber) { // Check if a rating is selected
    const url = `message.html?selected=${selectedNumber}`;
    window.location.href = url; // Navigate to the URL with the selected rating
  } else {
    // Handle the case when a rating is not selected and the submit button is clicked
    alert('Please select a rating before submitting.');
  }
});
