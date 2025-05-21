



document.getElementById('scrollLeft').addEventListener('click', () => {
  document.getElementById('productSlider').scrollBy({ left: -300, behavior: 'smooth' });
});
document.getElementById('scrollRight').addEventListener('click', () => {
  document.getElementById('productSlider').scrollBy({ left: 300, behavior: 'smooth' });
});

