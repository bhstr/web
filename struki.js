document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.struka-list li');

    listItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const currentlyExpanded = document.querySelector('.expandable-content.expanded');
            const expandableContent = item.querySelector('.expandable-content');

            if (currentlyExpanded && currentlyExpanded !== expandableContent) {
                currentlyExpanded.classList.remove('expanded');
            }

            expandableContent.classList.toggle('expanded');
        });
    });
});


let prevScrollPos = window.scrollY || window.pageYOffset;
let ticking = false;

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            let currentScrollPos = window.scrollY || window.pageYOffset;

            if (prevScrollPos > currentScrollPos) {
                // Scroll up, show the navigation bar
                document.querySelector('.nav').classList.remove('nav-hidden');
            } else {
                // Scroll down, hide the navigation bar
                document.querySelector('.nav').classList.add('nav-hidden');
            }

            prevScrollPos = currentScrollPos;
            ticking = false;
        });

        ticking = true;
    }
});

// Get the button
var scrollTopButton = document.getElementById("scrollTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}










