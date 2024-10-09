function validateEmail() {
    const emailInput = document.getElementById('emailInput');
    const errorMessage = document.getElementById('error-message');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        errorMessage.style.display = 'block';
        return false;
    }
    errorMessage.style.display = 'none';
    alert('Subscription successful!');
    return true;
}
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");
let currentIndex = 0;
const totalSlides = slides.length;
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
updateSlider();
function redir(data){
    data = data.getAttribute("id")
    window.location.href = `blogs.html?message=${encodeURIComponent(data)}`;
}
