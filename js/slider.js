const slider = document.querySelector(".slider");
            const slides = document.querySelectorAll(".slide");
            const prevButton = document.querySelector(".prev");
            const nextButton = document.querySelector(".next");
            const dotsContainer = document.querySelector(".dots");

            let currentIndex = 0;
            const totalSlides = slides.length;

            // Create dots
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement("div");
                dot.classList.add("dot");
                dot.addEventListener("click", () => goToSlide(i));
                dotsContainer.appendChild(dot);
            }

            const dots = document.querySelectorAll(".dot");

            function updateSlider() {
                slider.style.transform = `translateX(-${currentIndex * 100}%)`;
                dots.forEach((dot, index) => {
                    dot.classList.toggle("active", index === currentIndex);
                });
            }

            function goToSlide(index) {
                currentIndex = index;
                updateSlider();
            }

            function nextSlide() {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateSlider();
            }

            function prevSlide() {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateSlider();
            }

            prevButton.addEventListener("click", prevSlide);
            nextButton.addEventListener("click", nextSlide);

            slides.forEach((slide, index) => {
                slide.addEventListener("click", () => goToSlide(index));
            });

            // Initialize the slider
            updateSlider();