let body = document.querySelector("body")
let div = document.createElement("div");
body.append(div);

function createBox() {
    let box = document.createElement("div");
    box.style.height = "4rem";
    box.style.width = "4rem";
    box.style.border = "0.15rem solid black";
    box.style.background = '#' + Math.floor(Math.random() * 899) + 100;
    div.append(box);
}

function createDisco() {
    for (i = 0; i < 190; i++) {
        createBox();
    }
}
setInterval(createDisco, );