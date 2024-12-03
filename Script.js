// Add smooth scrolling for the dynamic sections
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
