// Smooth scrolling for the "Scroll down" button
document.querySelector('.scroll-button').addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});

// Toggle menu button for small screens (if needed)
document.querySelector('.menu-button').addEventListener('click', () => {
  const nav = document.querySelector('nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Carousel button functionality (Placeholder: add your logic here)
const carouselButtons = document.querySelectorAll('.carousel-buttons button');
carouselButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    console.log(`Carousel button ${index + 1} clicked`);
    // Add carousel functionality here
  });
});
