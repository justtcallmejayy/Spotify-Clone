// Select elements
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

// Utility: Toggle visibility and accessibility
function toggleVisibility(element, isVisible) {
  element.classList.toggle('visible', isVisible);
}

function updateAriaAttributes(isVisible) {
  hamburger.setAttribute('aria-expanded', isVisible);
  sidebar.setAttribute('aria-hidden', !isVisible);
}

// Toggle sidebar visibility
function toggleSidebar() {
  const isVisible = sidebar.classList.contains('visible');
  toggleVisibility(sidebar, !isVisible);
  toggleVisibility(overlay, !isVisible);
  updateAriaAttributes(!isVisible);
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

// Close sidebar when resizing to larger screen (debounced)
function resetSidebarVisibility() {
  if (window.innerWidth > 768) {
    toggleVisibility(sidebar, false);
    toggleVisibility(overlay, false);
    updateAriaAttributes(false);
  }
}

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(resetSidebarVisibility, 200);
});

// Initial visibility reset
resetSidebarVisibility();
