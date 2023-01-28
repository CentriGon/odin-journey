const orangebutton = document.querySelector('#orangebtn');
const header = document.querySelector('.jsmain .htmlheader')
const boxes = document.querySelector('.info-box1')
const headerColor = document.querySelector(".jsmain .info-box1 h2");

orangebutton.addEventListener('click', () => {
    turnOrange();
});

function turnOrange() {
    header.style.cssText = "background-color: rgb(255, 115, 0);";
    boxes.style.cssText = "border-color: rgb(255, 115, 0);";
    headerColor.style.cssText = "background-color: rgb(255, 115, 0);";
}