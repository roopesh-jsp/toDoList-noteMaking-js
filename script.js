"using strict";

// adding task********************

const taskInput = document.querySelector(".input-text");
const addTask = document.querySelector(".add-btn");

const tasksContainer = document.querySelector(".list");
let task = ``;
addTask.addEventListener("click", () => {
  let x = taskInput.value.replace(/ /g, "");
  if (x) {
    task = ` <li class="item">
    <div class="item-1">
      <div class="img-status"></div>
      <p>${taskInput.value}</p>
    </div>
    <div class="remove">
      <button>x</button>
    </div>
  </li>`;
    tasksContainer.insertAdjacentHTML("beforeend", task);
    taskInput.value = "";
  }
});

// task check/uncheck toogle****************

tasksContainer.addEventListener("click", (e) => {
  let removeBtn = e.target.closest(".remove");
  if (removeBtn) {
    tasksContainer.removeChild(removeBtn.closest(".item"));
  }
  let item = e.target.closest(".item-1");
  if (!item) {
    return;
  }
  const imgToggel = item.querySelector(".img-status");
  imgToggel.classList.toggle("checked");
});

// noteMaking**********************
const notes = document.querySelector(".notes");
const addNote = document.querySelector(".addNote");
const delNote = document.querySelector(".delNote");
let note = ` <p class="input-box" contenteditable="true">
<img
  class="delNote"
  src="imgs/notes-app-img/images/delete.png"
  alt=""
/>
</p>`;
addNote.addEventListener("click", () => {
  notes.insertAdjacentHTML("beforeend", note);
});
notes.addEventListener("click", (e) => {
  console.log(e.target.classList.contains("delNote"));
  if (e.target.classList.contains("delNote")) {
    e.target.closest("p").remove();
  }
});
