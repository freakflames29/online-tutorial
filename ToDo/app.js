const textFiled = document.getElementById("exampleFormControlInput1");
const saveBtn = document.getElementById("saveBtn");
const taskContainer = document.getElementById("taskContainer");
let taskList = [];

function updateh2() {
  const h2 = document.querySelectorAll("#taskContainer > div > h2");
  console.log(h2);
  function deleteIt(e) {
    e.target.classList.add("strike");

    setTimeout(() => {
      console.log(e.target.parentNode.remove());
    }, 2000);
  }

  for (let i of h2) {
    i.addEventListener("click", deleteIt);
  }
}

function getData() {
  const task = textFiled.value;
  taskList.push(task);
  console.log("takslist " + taskList);

  let html = `
        <div>
             <h2>${task}</h2>
        </div>
    `;
  taskContainer.innerHTML += html;

  updateh2();
  localStorage.setItem("task", taskList);
  textFiled.value = "";
}

saveBtn.addEventListener("click", getData);

function fetchData() {
  const taksListsString = localStorage.getItem("task");
  const taskList = taksListsString.split(",");
  for (let i of taskList) {
    let html = `
        <div>
             <h2>${i}</h2>
        </div>
    `;
    taskContainer.innerHTML += html;
  }
  updateh2();
}

document.addEventListener("DOMContentLoaded", fetchData);
