
function moveCarousel(carouselId, step) {
    const carousel = document.getElementById(`${carouselId}-carousel`);
    const items = carousel.children;
    const totalItems = items.length;
    const itemWidth = items[0].clientWidth + 20; // Width + margin

    let currentIndex = Math.round(carousel.scrollLeft / itemWidth);

    currentIndex += step;

    if (currentIndex >= totalItems) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    }

    carousel.scrollLeft = currentIndex * itemWidth;
}
