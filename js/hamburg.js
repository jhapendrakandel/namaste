document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');

    hamburger.addEventListener('click', function() {
        navList.classList.toggle('show');
        hamburger.classList.toggle('active');
        document.body.style.overflow = navList.classList.contains('show') ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('#nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('show');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navList.contains(event.target) && !hamburger.contains(event.target)) {
            navList.classList.remove('show');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});