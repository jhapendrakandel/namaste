// pagetop.js

document.addEventListener('DOMContentLoaded', function() {
    const pageTopButton = document.getElementById('page-top');

    // Show button when user scrolls down
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) { // Show button after scrolling down 200px
            pageTopButton.style.display = 'block';
        } else {
            pageTopButton.style.display = 'none';
        }
    });

    // Smooth scroll to top
    pageTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
