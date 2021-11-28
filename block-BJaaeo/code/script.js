let result = document.querySelector(".result");
let allBtns = document.querySelectorAll("button")
let initialValue = 0;

function handleBtnClick(event) {
    if(event.target.classList.contains("equal")) {
        result.innerText = eval(result.innerText);
        return;
    }
    if(event.target.classList.contains("clear")) {
        result.innerText = initialValue;
        return;
    }
    if(result.innerText == initialValue) {
        result.innerText = event.target.innerText;
    } else {
      result.innerText += event.target.innerText; 
    }
}
allBtns.forEach((btn) => {
    btn.addEventListener("click", handleBtnClick);
});

result.innerText = initialValue;