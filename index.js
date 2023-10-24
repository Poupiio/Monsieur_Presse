const boxes = document.querySelectorAll('.box');
const eye = document.querySelector('.eye');

boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        if (box.id == "yellow") {
            box.style.cursor = "pointer";
            box.style.backgroundColor = "yellow";
        } else if (box.classList.contains("purple") || box.classList.contains("eye")) {
            box.style.cursor = "pointer";
            box.style.backgroundColor = "purple";
        }
    })

    if (box.id == "eye") {
        box.addEventListener('mouseenter', () => {
            eye.style.visibility = "visible";
        });
    }
})