/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
      toggle.classList.toggle('show-icon');
    });

    // Close menu when any nav link is clicked
    const navLinks = nav.querySelectorAll('.nav__link');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('show-menu');
        toggle.classList.remove('show-icon');
      });
    });

    // Also close menu when Submit Inquiry button is clicked
    const demoBtn = nav.querySelector('.js-open-demo');
    if (demoBtn) {
      demoBtn.addEventListener('click', () => {
        nav.classList.remove('show-menu');
        toggle.classList.remove('show-icon');
      });
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  showMenu('nav-toggle', 'nav-menu');

  const solutionToggle = document.querySelector('.dropdown-toggle-solutions');

  if (solutionToggle) {
    const solutionItem = solutionToggle.closest('.dropdown__item');

    solutionToggle.addEventListener('click', (e) => {
      e.preventDefault();
      solutionItem.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
      if (!solutionItem.contains(event.target)) {
        solutionItem.classList.remove('active');
      }
    });
  }
});