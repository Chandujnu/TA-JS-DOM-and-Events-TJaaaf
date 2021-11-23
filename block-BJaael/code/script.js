

// function generateRandomColor() {
// let randomColor = '#' + Math.floor(Math.random() *999) + 100;
// return generateRandomColor;
// }

// function generateRandomNumber(){
//     let randomNumber = Math.floor(Math.random() * 500);
// }
let parentBox = document.querySelector(".boxes");

for(let i = 0; i < 500; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    div.style.backgroundColor ='#' + Math.floor(Math.random() *999) + 100;
    let h2 = document.createElement("h3");
    h2.innerText = Math.floor(Math.random() * 500);
    div.append(h2);
    parentBox.append(div);
}

let allBoxes = document.querySelectorAll("box");
function handleMouseMove(){
    allBoxes.forEach((box) => {
        box.style.backgroundColor = '#' + Math.floor(Math.random() *999) + 100;
        box.querySelector("h3").innerText = Math.floor(Math.random() * 500);
    });
}
parentBox.addEventListener("mousemove", handleMouseMove);
// let allBoxes = querySelectorAll("box")
// function createBox() {
   
//     allBoxes.forEach((elm) => {
//         elm.style.background = randomColor});
    
// }

// function createDisco() {
//     for (i = 0; i < 500; i++) {
//         createBox();
//     }
    
// }
// createDisco();
// div.addEventListener("mousemove", createBox)