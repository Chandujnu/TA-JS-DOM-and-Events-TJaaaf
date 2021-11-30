let form = document.querySelector("form");
let model = document.querySelector(".model_overlay");
let modelData = document.querySelector(".model_data");

let userInfo = {};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let elements = event.target.elements;

    userInfo.name = elements.name.value;
    userInfo.email = elements.email.value;
    userInfo.choice = elements.choice.value;
    userInfo.movie = elements.movie.value;
    userInfo.drone = elements.drone.value;
    userInfo.terms = elements.terms.checked;

    model.classList.add("open");
    let close = document.querySelector(".model_close");
    close.addEventListener("click", () => {
        model.classList.remove("open");
    });

    displayInfo(userInfo);
});

function displayInfo(data = {}) {
    modelData.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.innerText = `Hello ${data.name}`;
    let email = document.createElement("p");
    email.innerText = `Email: ${data.email}`;
    let choice = document.createElement("p");
    choice.innerText = `Choice: ${data.choice}`;
    let movie = document.createElement("p");
    movie.innerText = `Movie: ${data.movie}`;
    let drone = document.createElement("p");
    drone.innerText = `Book: ${data.drone}`;
    let terms = document.createElement("p");
    terms.innerText = `${data.terms ? "You have accepted the terms and conditions" : 
    "You have not accepted the terms and conditions"}`;
    modelData.append(h1, email, choice, movie, drone, terms);
}