// JS FOR DATE PICKER

document.addEventListener("DOMContentLoaded", function () {
  // Initialize the date picker
  var picker = new Pikaday({
    field: document.getElementById("datepicker"),
    format: "MM/DD/YYYY", // Adjust the format as needed
    // Add more configuration options if required
  });

  // Event listener for opening the calendar on clicking the calendar trigger
  document
    .getElementById("calendar-trigger")
    .addEventListener("click", function () {
      picker.show();
    });
});
