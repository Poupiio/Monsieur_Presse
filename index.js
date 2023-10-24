const boxes = document.querySelectorAll('.box');
const eye = document.querySelector('.eye');
const smile = document.querySelector('.smile');
const title = document.querySelector('.title');

let purpleCount = 0;
let yellowCount = 0;
const totalBoxes = 21;
const hoveredBoxes = new Set(); // Ensemble pour stocker les cases survolées

boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        if (!hoveredBoxes.has(box)) {
            // Si la case n'a pas été survolée auparavant
            hoveredBoxes.add(box); // Ajoute la case à l'ensemble

            if (box.id == "yellow") {
                box.style.cursor = "pointer";
                box.style.backgroundColor = "yellow";
                yellowCount++;
            } else if (box.classList.contains("purple") || box.classList.contains("eye")) {
                box.style.cursor = "pointer";
                box.style.backgroundColor = "purple";
                purpleCount++;
            }

            if (purpleCount + yellowCount == totalBoxes) {
                title.style.opacity = "1";
            }
        }
    })

    if (box.id == "eye") {
        box.addEventListener('mouseenter', () => {
            eye.style.visibility = "visible";
        });
    }
    if (box.id == "smile") {
        box.addEventListener('mouseenter', () => {
            smile.style.display = "block";
        });
    }
});
