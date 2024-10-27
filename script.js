const items = document.querySelectorAll('.item');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const indicators = document.querySelectorAll('.indicators li');
const numberDisplay = document.querySelector('.number'); // Seleciona o número

let currentIndex = 0;

function updateItems() {
    items.forEach((item, index) => {
        item.classList.remove('active');
        indicators[index].classList.remove('active');

        if (index === currentIndex) {
            item.classList.add('active');
            indicators[index].classList.add('active');
        }
    });

    
    numberDisplay.textContent = String(currentIndex + 1).padStart(2, '0');
}


nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateItems();
});


prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateItems();
});


updateItems();
