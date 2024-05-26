

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


document.addEventListener("DOMContentLoaded", function () {
    const popupTriggers = document.querySelectorAll(".popup-trigger");
    const popupMessage = document.getElementById("popup-message");
    const popupImagesContainer = document.getElementById("popup-images");
    const popup = document.getElementById("popup");
    const pdfViewer = document.getElementById("pdf-viewer");

    popupTriggers.forEach(function (trigger) {
        trigger.addEventListener("click", function (event) {
            event.preventDefault();
            const message = this.getAttribute("data-message");
            const images = this.getAttribute("data-image").split(';');
            const pdfSrc = this.getAttribute("data-pdf-src");

            popupMessage.textContent = message;
            popupImagesContainer.innerHTML = ''; // Clear previous images

            images.forEach(function (src) {
                const img = document.createElement("img");
                img.src = src.trim();
                img.alt = "Popup Image";
                popupImagesContainer.appendChild(img);
            });

            if (pdfSrc) {
                pdfViewer.src = pdfSrc; // Set the PDF source
                pdfViewer.style.display = "block";
            } else {
                pdfViewer.style.display = "none";
            }

            popup.style.display = "block";
        });
    });

    document.querySelector(".close").addEventListener("click", function () {
        popup.style.display = "none";
    });
});

