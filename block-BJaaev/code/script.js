function main() {
    let todoInput = document.querySelector("#text");
    let ulRoot = document.querySelector("ul");
  
    let all = document.querySelector(".all");
    let active = document.querySelector(".active");
    let completed = document.querySelector(".completed");
    let clear = document.querySelector(".clear");
  
    let activeButton = "all";
  
    let allTodos = localStorage.getItem("allTodos")
      ? JSON.parse(localStorage.getItem("allTodos"))
      : [];
  
    function addTodo(event) {
      let value = event.target.value;
      if (event.keyCode === 13 && value !== "") {
        allTodos.push({
          name: value,
          isDone: false,
        });
        event.target.value = "";
        createUI();
        localStorage.setItem("allTodos", JSON.stringify(allTodos));
      }
    }
  
    function handleDelete(event) {
      let id = event.target.dataset.id;
      allTodos.splice(id, 1);
      createUI();
      localStorage.setItem("allTodos", JSON.stringify(allTodos));
    }
  
    function handleCheck(event) {
      let id = event.target.dataset.id;
      allTodos[id].isDone = !allTodos[id].isDone;
      createUI();
      localStorage.setItem("allTodos", JSON.stringify(allTodos));
    }
  
    function createUI(data = allTodos) {
      ulRoot.innerHTML = "";
  
      data.forEach((todo, index) => {
        let li = document.createElement("li");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.checked = todo.isDone;
        input.setAttribute(`data-id`, index);
        input.addEventListener("input", handleCheck);
        let label = document.createElement("label");
        label.innerText = todo.name;
        let span = document.createElement("span");
        span.innerText = `❌`;
        span.setAttribute(`data-id`, index);
  
        span.addEventListener("click", handleDelete);
  
        li.append(input, label, span);
        ulRoot.append(li);
      });
    }
    createUI();
  
    clear.addEventListener("click", () => {
      allTodos = allTodos.filter((todo) => !todo.isDone);
      createUI();
      localStorage.setItem("allTodos", JSON.stringify(allTodos));
    });
  
    active.addEventListener("click", () => {
      let notCompleted = allTodos.filter((todo) => !todo.isDone);
      createUI(notCompleted);
  
      activeButton = "active";
      updateActiveButton();
    });
  
    completed.addEventListener("click", () => {
      let CompletedTodos = allTodos.filter((todo) => todo.isDone);
      createUI(CompletedTodos);
  
      activeButton = "completed";
      updateActiveButton();
    });
  
    all.addEventListener("click", () => {
      createUI();
      activeButton = "all";
      updateActiveButton();
    });
  
    function updateActiveButton(btn = activeButton) {
      all.classList.remove("selected");
      active.classList.remove("selected");
      completed.classList.remove("selected");
  
      if (btn === "all") {
        all.classList.add("selected");
      }
      if (btn === "active") {
        active.classList.add("selected");
      }
      if (btn === "completed") {
        completed.classList.add("selected");
      }
    }
    updateActiveButton();
  
    todoInput.addEventListener("keyup", addTodo);
  }
  main();
  