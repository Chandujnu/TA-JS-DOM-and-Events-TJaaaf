let box1 = document.querySelector(".first");
let box2 = document.querySelector(".second");

function randomColor() {
    var letters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        let randomNumber = Math.floor(Math.random() * 16);
        color += letters[randomNumber];
    }
    return color;
}
box1.addEventListener("click", function() {
    let color = randomColor();
    box1.style.backgroundColor = color;
})

box2.addEventListener("mousemove" , function() {
    let color = randomColor();
    box2.style.backgroundColor = color;
})
