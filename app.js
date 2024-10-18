// Select DOM elements
const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.nav-list ul');
const menu_item = document.querySelectorAll('.nav-list ul li a');

// Function to handle scroll behavior based on mobile menu state
function toggleScrollBehavior() {
    if (mobile_menu.classList.contains('active')) {
        // If the mobile menu is active, disable page scrolling
        document.body.style.overflow = 'hidden';
    } else {
        // If the mobile menu is not active, enable page scrolling
        document.body.style.overflow = 'auto';
    }
}

// Function to handle hamburger menu click event
function handleHamburgerClick() {
    hamburger.classList.toggle('active'); // Toggle the active state for hamburger
    mobile_menu.classList.toggle('active'); // Toggle the mobile menu visibility
    toggleScrollBehavior(); // Adjust scroll behavior based on menu state
}

// Function to handle menu item click event
function handleMenuItemClick() {
    hamburger.classList.remove('active'); // Remove active state from hamburger
    mobile_menu.classList.remove('active'); // Hide the mobile menu
    toggleScrollBehavior(); // Adjust scroll behavior after menu item click
}

// Event listener for hamburger menu click
hamburger.addEventListener('click', handleHamburgerClick);

// Event listeners for each menu item to close the mobile menu on click
menu_item.forEach((item) => {
    item.addEventListener('click', handleMenuItemClick);
});

// Optional: Add scroll behavior for the header background change
window.addEventListener('scroll', () => {
    const header = document.querySelector('#header .header');
    if (window.scrollY > 0) {
        header.style.backgroundColor = 'rgba(36, 35, 33, 0.8)'; // Change background on scroll
    } else {
		header.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Fully transparent at top
    }
});