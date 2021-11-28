let root = document.querySelector('section');
let individualScore = document.querySelector('.individualScore');
let computerScore = document.querySelector('.computerScore');
let computer = Array.from(document.querySelectorAll('.computer i'));
let computerChoose = "";
let h3 = document.querySelector('h3');
let cmp = ""
let individual = document.querySelectorAll('.individual i');
// you =you.filter((s) => s.className.includes("far"))
root.addEventListener("click", function (event) {
    cmp = computer[Math.floor(Math.random() * 3)]
    computerChoose = cmp.className;
    // console.log(computerChoose)
    individual.forEach((a) => {
        a.style.color = "blue"
    })
    computer.forEach((a) => {
        a.style.color = "red"
    })
    if (event.target.parentElement.className == "individual") {

        event.target.style.color = "black";
        cmp.style.color = "black";
        if (event.target.className == 'far fa-hand-rock') {
            if (computerChoose == "far fa-hand-paper") {
                individualScore.innerHTML = (+individualScore.innerHTML) + 1
                h3.innerText = 'You Won!'
            }
            else if (computerChoose == "far fa-hand-rock") {
                h3.innerText = 'Its a Tie'
            }
            else {
                computerScore.innerHTML = (+computerScore.innerHTML) + 1
                h3.innerText = 'You Lose!'

            }
        }

        else if (event.target.className == 'far fa-hand-paper') {
            if (computerChoose == "far fa-hand-rock") {
                individualScore.innerHTML = (+individualScore.innerHTML) + 1
                h3.innerText = 'You Won!'
            }
            else if (computerChoose == "far fa-hand-paper") {
                h3.innerText = 'Its a Tie'
            }
            else {
                computerScore.innerHTML = (+computerScore.innerHTML) + 1
                h3.innerText = 'You Lose!'

            }

        }
        else if (event.target.className == 'far fa-hand-scissors') {
            if (computerChoose == "far fa-hand-paper") {
                individualScore.innerHTML = (+individualScore.innerHTML) + 1
                h3.innerText = 'You Won!'
            }
            else if (computerChoose == "far fa-hand-scissors") {
                h3.innerText = 'Its a Tie'
            }
            else {
                computerScore.innerHTML = (+computerScore.innerHTML) + 1
                h3.innerText = 'You Lose!'

            }

        }
    } else if (event.target.parentElement.className == "reset") {
        computerScore.innerHTML = 0;
        individualScore.innerHTML = 0;
    }
    else {
        console.log(`tap up`)
     }
})