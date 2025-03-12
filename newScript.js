// Below is the initial setup for Spotify Clone, so that i could add the functionality of
// 1.) Hamburger menu

// Select the hamburger and sidebar elements
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");

// Toggle sidebar visibility when hamburger is clicked
hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("visible");
});

// Close the sidebar when clicking outside the sidebar or hamburger
document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
    sidebar.classList.remove("visible");
  }
});

// Mobile view: Close sidebar on resizing if the screen is larger than 768px
function resetSidebarVisibility() {
  const mediaQuery = window.matchMedia("(min-width: 769px)");
  if (mediaQuery.matches) {
    sidebar.classList.remove("visible");
  }
}

// Run on load and resize to check the screen width
window.addEventListener("resize", resetSidebarVisibility);
resetSidebarVisibility();
