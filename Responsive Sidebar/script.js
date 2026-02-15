document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('toggle-btn');
  const closeBtn = document.getElementById('close-btn');
  const mainContent = document.querySelector('.main-content');

  // Open sidebar
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.add('active');
    mainContent.classList.add('shifted');
  });

  // Close sidebar
  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    mainContent.classList.remove('shifted');
  });

  // Close sidebar when clicking outside
  window.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
      sidebar.classList.remove('active');
      mainContent.classList.remove('shifted');
    }
  });

  // Initialize Feather Icons
  feather.replace();
});
