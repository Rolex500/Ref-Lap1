function changeMainImage(src) {
    document.getElementById('mainImage').src = src;
}

document.addEventListener('DOMContentLoaded', function() {
    const learnMoreButton = document.querySelector('.learn-more');
    learnMoreButton.addEventListener('click', function() {
        alert('Thank you for your interest! More information about the Ultra-Slim Pro Laptop is coming soon.');
    });
});