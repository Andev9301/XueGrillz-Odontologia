


/* Script que permite cambiar el heigth y el fondo del header cuando se hace scroll*/
document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 1) { // Cambia 50 por el valor que desees para activar el cambio
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



// Script para manejar el modal de políticas de tratamiento de datos
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("data-policy-modal");
    var btn = document.getElementById("data-policy-link");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

// Script Control Carrusel//

document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        let currentSlide = 0;

        function showSlide(n) {
            slides[currentSlide].style.display = 'none';
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].style.display = 'block';
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);

        showSlide(0);
    });
});

