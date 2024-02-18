const addBtn = document.querySelector(".add-btn");
const taskInput = document.querySelector(".input-text");
const taskList = document.querySelector(".list");
const removeBtn = document.querySelector(".removeBtn");
const listImg = document.querySelector(".checkimg");
let imgtoggle = "unchecked.png";
function createList() {
  const tasks = `<li class="item">
    <div class="item-1">
    <img src="imgs/To-Do-Img/images/${imgtoggle}" class="checkimg unchecked" alt="" />
    <p>${taskInput.value}</p>
    </div>
    <div class="remove">
    <button >x</button>
    </div>
    </li>`;
}
addBtn.addEventListener("click", () => {
  createList();
  taskList.insertAdjacentHTML("beforeend", tasks);
});

taskList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI" || "IMG" || "P") {
    if (listImg.classList.contains("unchecked")) {
      createList();
    }
  }
});
