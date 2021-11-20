let body = document.querySelector("body")
let div = document.createElement("div");
body.append(div);

function createBox() {
    let box = document.createElement("div");
    let h3 = document.createElement("h3");
    box.style.height = "4rem";
    box.style.width = "4rem";
    box.style.border = "0.15rem solid black";
    box.style.background = '#' + Math.floor(Math.random() * 899) + 100;
    h3.innerText = Math.floor(Math.random() * 500);
    div.append(box);
    box.append(h3);
}

function createDisco() {
    for (i = 0; i < 500; i++) {
        createBox();
    }
    
}
createDisco();
div.addEventListener("mousemove", createBox)