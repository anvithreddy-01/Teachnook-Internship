document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carousel-item');
    let currentItem = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    document.querySelector('.next').addEventListener('click', function() {
        currentItem = (currentItem + 1) % items.length;
        showItem(currentItem);
    });

    document.querySelector('.prev').addEventListener('click', function() {
        currentItem = (currentItem - 1 + items.length) % items.length;
        showItem(currentItem);
    });

    showItem(currentItem);
});
