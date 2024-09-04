const container = document.querySelector('.container');
const boxes = container.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        container.classList.remove('hovered');
        container.classList.add(`hovered-${box.classList[1]}`);
    });
});

container.addEventListener('mouseleave', () => {
    container.classList.remove('hovered');
});