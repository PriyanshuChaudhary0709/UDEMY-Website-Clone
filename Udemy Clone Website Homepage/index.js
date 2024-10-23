document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const sideMenu = document.querySelector('.side-menu');
    const closeMenu = document.querySelector('.close-btn');

    menu.addEventListener('click', (e) => {
        sideMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    closeMenu.addEventListener('click', (e) => {
        sideMenu.classList.remove('active');
        document.body.style.overflow = 'scroll'; // Restore scrolling
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const paragraphs = document.querySelectorAll('.course-text');

    paragraphs.forEach(paragraph => {
        const words = paragraph.innerText.split(' ');

        if (words.length > 10) {
            const truncated = words.slice(0, 10).join(' ') + '...';
            paragraph.innerText = truncated;
        }
    });
});