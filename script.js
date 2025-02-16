document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('nav ul li');
  let currentOpenDropdown = null;
  let hideTimeout;

  dropdowns.forEach(dropdown => {
    const submenu = dropdown.querySelector('ul');

    dropdown.addEventListener('mouseover', function() {
      if (currentOpenDropdown && currentOpenDropdown !== submenu) {
        clearTimeout(hideTimeout);
        currentOpenDropdown.style.display = 'none';
      }

      if (submenu) {
        clearTimeout(hideTimeout);
        submenu.style.display = 'block';
        currentOpenDropdown = submenu;
      }
    });

    dropdown.addEventListener('mouseleave', function() {
      if (submenu) {
        hideTimeout = setTimeout(() => {
          submenu.style.display = 'none';
          currentOpenDropdown = null;
        }, 300); // Adjust the delay as needed
      }
    });

    if (submenu) {
      submenu.addEventListener('mouseover', function() {
        clearTimeout(hideTimeout);
      });

      submenu.addEventListener('mouseleave', function() {
        hideTimeout = setTimeout(() => {
          submenu.style.display = 'none';
          currentOpenDropdown = null;
        }, 300); // Adjust the delay as needed
      });
    }
  });
});

// JavaScript functionality (if any) can be added here
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.nextElementSibling.classList.toggle('active');
  });
});

// Above ends the header
