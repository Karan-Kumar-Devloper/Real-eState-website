
document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    let slideInterval;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');

        if (index >= slides.length) currentIndex = 0;
        if (index < 0) currentIndex = slides.length - 1;

        document.querySelector('.slides').style.transform = `translateX(${-100 * currentIndex}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex++;
        showSlide(currentIndex);
        resetInterval(); 
    }

    function prevSlide() {
        currentIndex--;
        showSlide(currentIndex);
        resetInterval(); 
    }

    function createDots() {
        const slides = document.querySelectorAll('.slide');
        const dotsContainer = document.querySelector('.dots');

        if (!dotsContainer) return; 
        
        dotsContainer.innerHTML = ''; 

        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === currentIndex) dot.classList.add('active');
            dot.addEventListener('click', () => {
                showSlide(i);
                resetInterval();
            });
            dotsContainer.appendChild(dot);
        });
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startAutoSlide(); 
    }

    function initSlider() {
        createDots();
        showSlide(currentIndex);
        startAutoSlide(); 
    }
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
    initSlider();
});
