// Progress bar and Navbar color change on scroll
let section = document.querySelector('#about');
let divs = document.querySelectorAll('.progress-bar');
let navbar = document.querySelector('.navbar');
let logo = document.querySelector('.navbar .logo'); // Select the logo
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Function to remove active classes
function removeActiveClasses() {
    navLinks.forEach(link => {
        link.classList.remove('active');
        link.classList.remove('nav-link-active');
    });
}

// Function to add active class based on section in viewport
function addActiveClass() {
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            const activeLink = document.querySelector(`.navbar-nav .nav-link[href*="${section.id}"]`);
            removeActiveClasses();
            if (activeLink) {
                activeLink.classList.add('active');
                activeLink.classList.add('nav-link-active');
            }
        }
    });
}

// Ensure this runs on scroll
window.addEventListener('scroll', () => {
    addActiveClass();
});

window.onscroll = function () {
    // Progress bar animation
    if (window.scrollY >= section.offsetTop - 700) {
        console.log("Reached");
        divs.forEach(div => {
            div.style.width = div.getAttribute('data-width');
        });
    }

    // Navbar style change
    if (window.scrollY >= section.offsetTop - 50) {
        navbar.classList.add('navbar-white');
        navLinks.forEach(link => {
            link.classList.add('nav-link-black');
        });
        logo.classList.add('logo-black'); // Change logo color
        document.querySelector('.navbar-toggler').classList.add('navbar-toggler-black');
        document.querySelector('.navbar-toggler i').classList.add('navbar-toggler-icon-black');
    } else {
        navbar.classList.remove('navbar-white');
        navLinks.forEach(link => {
            link.classList.remove('nav-link-black');
        });
        logo.classList.remove('logo-black'); // Revert logo color
        document.querySelector('.navbar-toggler').classList.remove('navbar-toggler-black');
        document.querySelector('.navbar-toggler i').classList.remove('navbar-toggler-icon-black');
    }

    // Toggle Bootstrap padding class when arriving at the second section
    if (window.scrollY >= section.offsetTop - 50) {
        navbar.classList.add('pt-2');
        navbar.classList.remove('pt-4'); // Assuming 'pt-4' is the original padding class
    } else {
        navbar.classList.remove('pt-2');
        navbar.classList.add('pt-4'); // Re-add original padding class when not in the second section
    }
}

// Filtering functionality for portfolio section
document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('.filtering span');
    const items = document.querySelectorAll('.gallery .items');

    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Remove active class from all filters and add to the current
            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');

            // Get the filter data
            const filterValue = filter.getAttribute('data-filter');

            // Loop through gallery items
            items.forEach(item => {
                if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
                    item.classList.remove('hide'); // Show item with transition
                } else {
                    item.classList.add('hide'); // Hide item with transition
                }
            });
        });
    });
});
