let todos = ["geree tseverleh", "hool hiih", "hicheel hiih", "kino uzeh"];
const button = document.getElementById("button");
const input = document.getElementById("input");

button.addEventListener("click", () => {
  if (!input.value) {
    errorHanding();
    return;
  } else {
    errorRemove();
    todos.push(input.value);
    renderTodos();
    input.value = null;
  }
});

const removeIconbutton = document.getElementById("removeIcon-1");

removeIconbutton.addEventListener("click", () => {
  // removeTodo(remove);
  console.log("REMOVED!!!!");
});

function renderTodos() {
  const tasklist = document.getElementById("tasklist");
  tasklist.innerHTML = null;
  todos.map((todo, index) => {
    const todoContainer = document.createElement("div");
    todoContainer.setAttribute("class", "todoContainer");
    todoContainer.setAttribute("id", `todoContainer-${index}`);

    tasklist.appendChild(todoContainer);

    const img = document.createElement("img");
    img.setAttribute("src", "./remove.png");

    const iconButton = document.createElement("button");
    iconButton.setAttribute("id", `removeIcon-${index}`);
    iconButton.appendChild(img);

    todoContainer.appendChild(iconButton);
    const p = document.createElement("p");
    p.innerText = todo;

    todoContainer.appendChild(p);
  });
}
function errorHanding() {
  const p = document.getElementById("error");
  p.innerText = "Aldaa garlaa";
}
function errorRemove() {
  const p = document.getElementById("error");
  p.innerText = null;
}

// function removeTodo() {
//   todos.map((todo, index) => {

//     return removeIconbutton;
//   });
// }

console.log(todos);