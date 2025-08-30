document.addEventListener("DOMContentLoaded", function() {
  const dateEl = document.querySelector("bottom-container #date");
  if (dateEl) {
    const today = new Date();
    const thisDay = today.getDate();
    const thisMonth = today.getMonth() + 1; 
    const thisYear = today.getFullYear();
    dateEl.innerHTML = "Today's date: " + thisMonth + "/" + thisDay + "/" + thisYear;
  }
});
