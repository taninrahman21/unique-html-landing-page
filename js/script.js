const allAccordionHeader = document.querySelectorAll('.accordion-header');
const allAccordionBody = document.querySelectorAll('.accordion-item');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuItems = document.querySelectorAll('.mobile-navLinks li a');
console.log(mobileMenuItems);

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});
mobileMenuItems.forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
})

// Accordion Logic
allAccordionHeader.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isActive = item.classList.contains('active');

    // Close all accordion items
    allAccordionBody.forEach(item => {
      item.classList.remove('active');
    });

    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add('active');
    }
  })
});


// Slider
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.nav-dot');
const slidesContainer = document.querySelector('.slides');
let currentSlide = 0;
let autoPlayInterval = null;
const intervalTime = 2000;

const goToSlide = (index) => {
  currentSlide = index;
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
};

const nextSlide = () => {
  const nextIndex = (currentSlide + 1) % slides.length;
  goToSlide(nextIndex);
};

const startAutoPlay = () => {
  autoPlayInterval = setInterval(nextSlide, intervalTime);
};

const stopAutoPlay = () => {
  clearInterval(autoPlayInterval);
};

const init = () => {
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
  });

  startAutoPlay();

  slidesContainer.addEventListener('mouseenter', stopAutoPlay);
  slidesContainer.addEventListener('mouseleave', startAutoPlay);
};

init();