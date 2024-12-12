const containerItems = [
  {
    title: "To do",
    count: 0,
    color: "white",
    id: "todo",
  },
  {
    title: "In progress",
    count: 0,
    color: "yellow",
    id: "in-progress",
  },
  {
    title: "Done",
    count: 0,
    color: "green",
    id: "done",
  },
  {
    title: "Blocked",
    count: 0,
    color: "red",
    id: "blocked",
  },
];
const todoData = [
  {
    title: "Geree tseverleh",
    date: "12-09",
    state: "todo",
  },
  {
    title: "Shine jildee yvah",
    date: "12-12",
    state: "todo",
  },
  {
    title: "Huvtssaa beldeh",
    date: "12-09",
    state: "todo",
  },
  {
    title: "Usand oroh",
    date: "12-09",
    state: "done",
  },
  {
    title: "Showuudah",
    date: "12-09",
    state: "blocked",
  },
];

const clearContainers = () => {
  const container1 = document.getElementById("todo");
  const container2 = document.getElementById("in-progress");
  const container3 = document.getElementById("done");
  const container4 = document.getElementById("blocked");
  container1.innerHTML = null;
  container2.innerHTML = null;
  container3.innerHTML = null;
  container4.innerHTML = null;
};

function renderContainers(title, color, count, id) {
  //html div iig bariad avsan
  const taskContainer2 = document.querySelector("#taskContainer");

  //todoList = <div class="todoList">
  //   <div class="title"></div>
  // </div>
  const todoList = document.createElement("div");
  todoList.setAttribute("class", "todoList");

  const listItemParent = document.createElement("div");
  listItemParent.setAttribute("id", id);

  // title = <div class="title"></div>
  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "title");

  todoList.appendChild(titleDiv);
  todoList.appendChild(listItemParent);
  // <h2>To do</h2>
  const h2 = document.createElement("h2");
  h2.innerText = title;

  // <div style={backgroundColor:"white" } class="circle"></div>
  const cirlce = document.createElement("div");
  cirlce.setAttribute("class", "circle");
  cirlce.style.backgroundColor = color;

  const para = document.createElement("p");
  para.setAttribute("class", "count");
  para.innerText = count;

  titleDiv.appendChild(cirlce);
  titleDiv.appendChild(h2);
  titleDiv.appendChild(para);
  taskContainer2.appendChild(todoList);
}

containerItems.map((item) => {
  renderContainers(item.title, item.color, item.count, item.id);
});

const deleteTodo = (index) => {
  console.log("Ymar index", index);
  todoData.splice(index, 1);
  clearContainers();
  todoData.map((item, index) => {
    renderTodoItems(item.title, item.date, item.state, index);
  });
};

const change = (event, index) => {
  todoData[index].state = event;
  clearContainers();

  todoData.map((item, index) => {
    renderTodoItems(item.title, item.date, item.state, index);
  });
};

const renderTodoItems = (title, date, state, index) => {
  const container = document.getElementById(state);
  const listItem = document.createElement("div");
  const text = document.createElement("p");

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "deleteButton");

  const img = document.createElement("img");
  img.setAttribute("src", "./trash.svg");

  deleteButton.appendChild(img);

  deleteButton.setAttribute("id", index);
  deleteButton.addEventListener("click", () => {
    deleteTodo(index);
  });

  text.innerText = title;

  const select = document.createElement("select");

  select.addEventListener("change", (event) => {
    change(event.target.value, index);
  });

  let optionButton = document.createElement("option");
  optionButton.innerText = state;
  select.appendChild(optionButton);

  containerItems.map((item) => {
    if (item.id != state) {
      optionButton = document.createElement("option");
      optionButton.innerText = item.id;
      select.appendChild(optionButton);
    }
  });

  listItem.appendChild(text);
  listItem.setAttribute("class", "listItem");
  listItem.appendChild(select);
  listItem.appendChild(deleteButton);
  container.appendChild(listItem);
};

todoData.map((item, index) => {
  renderTodoItems(item.title, item.date, item.state, index);
});

const addTask = () => {
  if (input.value) {
    todoData.push({
      title: input.value,
      date: "2024-12-12",
      state: "todo",
    });
    input.value = null;
    clearContainers();
    todoData.map((item, index) => {
      renderTodoItems(item.title, item.date, item.state, index);
    });
  }
};

const input = document.getElementById("input");
const addButton = document.getElementById("button");
addButton.addEventListener("click", () => addTask());
