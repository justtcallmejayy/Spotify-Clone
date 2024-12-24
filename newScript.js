// Select elements
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

// Toggle sidebar visibility
function toggleSidebar() {
  const isVisible = sidebar.classList.contains('visible');
  sidebar.classList.toggle('visible');
  overlay.classList.toggle('visible');
  hamburger.setAttribute('aria-expanded', !isVisible);
}

// Event listener for hamburger click
hamburger.addEventListener('click', toggleSidebar);

// Close sidebar when clicking outside
overlay.addEventListener('click', toggleSidebar);

// Close sidebar on 'Escape' key press
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && sidebar.classList.contains('visible')) {
    toggleSidebar();
  }
});

// Close sidebar when resizing to larger screen
function resetSidebarVisibility() {
  if (window.innerWidth > 768) {
    sidebar.classList.remove('visible');
    overlay.classList.remove('visible');
    hamburger.setAttribute('aria-expanded', 'false');
  }
}

window.addEventListener('resize', resetSidebarVisibility);
resetSidebarVisibility();
