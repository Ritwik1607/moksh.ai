// Get the navigation menu element
const nav = document.querySelector('nav ul');

// Get the navigation menu toggle button
const menuToggle = document.querySelector('.menu-toggle');

// Toggle the navigation menu visibility
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});
