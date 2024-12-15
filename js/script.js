const allAccordionHeader = document.querySelectorAll('.accordion-header');
const allAccordionBody = document.querySelectorAll('.accordion-item');

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