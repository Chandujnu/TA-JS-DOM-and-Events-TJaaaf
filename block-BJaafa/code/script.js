function main() {
    let rootElm = document.querySelector("main");
    let activityInput = document.querySelector("form");
  
    let allTodos = localStorage.getItem("allTodos")
      ? JSON.parse(localStorage.getItem("allTodos"))
      : [];
  
    function addActivity(event) {
      event.preventDefault();
      const activity = event.target.activity.value;
      const month = event.target.month.value;
      if (activity.trim().length === 0) return alert("Enter a Proper Activity");
  
      allTodos.push({
        activity,
        selectedDays: [],
        month,
      });
      event.target.value = "";
      createUI();
      localStorage.setItem("allTodos", JSON.stringify(allTodos));
    }
  
    function handleDelete(event) {
      let id = event.target.dataset.id;
      allTodos.splice(id, 1);
      createUI();
      localStorage.setItem("allTodos", JSON.stringify(allTodos));
    }
  
    function handleDate(event) {
      const index = event.currentTarget.dataset.id;
      if (event.target.tagName === "LI") {
        const value = event.target.innerText;
  
        const isDateIncluded = allTodos[index].selectedDays.includes(value); //true or false
  
        if (isDateIncluded) {
          allTodos[index].selectedDays = allTodos[index].selectedDays.filter(
            (day) => day !== value
          );
        } else {
          allTodos[index].selectedDays.push(event.target.innerText);
        }
      }
  
      createUI();
      localStorage.setItem("allTodos", JSON.stringify(allTodos));
      //   allTodos.dateSelected.push(event.target.innerText);
    }
  
    function getDays(month) {
      switch (month) {
        case "January":
          return 31;
        case "Feburary":
          return 28;
        case "March":
          return 31;
        case "April":
          return 30;
        case "May":
          return 31;
        case "June":
          return 30;
        case "July":
          return 31;
        case "August":
          return 31;
        case "September":
          return 30;
        case "October":
          return 31;
        case "November":
          return 30;
        case "December":
          return 31;
      }
    }
  
    function createUI(data = allTodos) {
      rootElm.innerHTML = "";
  
      data.forEach((d, i) => {
        let container = document.createElement("div");
        container.classList.add("container");
        container.setAttribute("data-id", i);
        let div = document.createElement("div");
        div.classList.add(`div1`);
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        h2.innerText = d.activity;
        p.innerText = d.month;
        div.append(h2, p);
  
        let ul = document.createElement("ul");
        ul.classList.add("date-box");
        for (let i = 1; i <= getDays(d.month); i++) {
          var li = document.createElement(`li`);
          li.classList.add(`date`);
          li.setAttribute(`data-id`, i);
          li.innerText = i;
          if (d.selectedDays.includes(`${i}`)) {
            li.classList.add("selected");
          }
          ul.append(li);
        }
        container.addEventListener("click", handleDate);
        let btn = document.createElement("button");
        btn.addEventListener("click", handleDelete);
        btn.innerText = `❌`;
        btn.setAttribute("data-id", i);
        container.append(div, ul, btn);
        rootElm.append(container);
      });
    }
    createUI();
  
    activityInput.addEventListener("submit", addActivity);
  }
  main();