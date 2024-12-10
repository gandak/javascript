{
  /* <div class="todoList">
        <div class="title">
          <div class="circle"></div>
          <h2>To do</h2>
          <p class="count">5</p>
        </div>
        <div class="list">
          <div class="listItem">
            <p>[loan-managament] - Add card component</p>
            <select name="" id="">
              <option value="">In progress</option>
              <option value="">Done</option>
            </select>
            <img src="./trash.svg" alt="" />
          </div>
          <div class="listItem">
            <p>[loan-managament] - Add card component</p>
            <select name="" id="">
              <option value="">In progress</option>
              <option value="">Done</option>
            </select>
            <img src="./trash.svg" alt="" />
          </div>
        </div>
      </div> */
}

const containerTitles = [
  {
    title: "To do",
    count: 5,
    color: "white",
    id: "todo",
  },
  {
    title: "In progress",
    count: 5,
    color: "yellow",
    id: "in-progress",
  },
  {
    title: "Done",
    count: 5,
    color: "green",
    id: "done",
  },
  {
    title: "Blocked",
    count: 5,
    color: "red",
    id: "blocked",
  },
];

const listData = [
  {
    title: "Гэрээ цэвэрлэх",
    date: "XII / 08",
    state: "in-progress",
  },
  {
    title: "Хувцасаа бэлдэх",
    date: "XII / 08",
    state: "todo",
  },
  {
    title: "Шинэ жилд явах",
    date: "XII / 09",
    state: "todo",
  },
  {
    title: "Утсаа цэнэглэх",
    date: "XII / 09",
    state: "blocked",
  },
  {
    title: "Ус уух",
    date: "XII / 09",
    state: "in-progress",
  },
  {
    title: "Даалгавар хийх",
    date: "XII / 09",
    state: "in-progress",
  },
];

function addColumn(title, color, count, id) {
  const taskContainer2 = document.querySelector("#taskContainer");
  const todoList = document.createElement("div");
  todoList.setAttribute("class", "todoList");
  todoList.setAttribute("id", id);

  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "title");
  todoList.appendChild(titleDiv);

  const h2 = document.createElement("h2");
  h2.innerText = title;

  const cirlce = document.createElement("div");
  cirlce.setAttribute("class", "circle");
  cirlce.style.backgroundColor = color;

  const countText = document.createElement("p");
  countText.setAttribute("class", "count");
  countText.innerText = count;

  titleDiv.appendChild(cirlce);
  titleDiv.appendChild(h2);
  titleDiv.appendChild(countText);

  const list = document.createElement("div");
  list.setAttribute("class", "list");
  list.setAttribute("id", "lists-container");

  taskContainer2.appendChild(todoList);
}

function lists(title, date, state) {
  const listsInside = document.querySelector(`#${state}`);

  const listItem = document.createElement("div");
  listItem.setAttribute("class", "listItem");

  const listItemP = document.createElement("p");
  listItemP.innerText = title;

  const dateItemP = document.createElement("p");
  dateItemP.innerText = date;

  const select = document.createElement("select");

  let option = document.createElement("option");
  option.innerText = state;
  select.appendChild(option);

  containerTitles.map((arr) => {
    if (arr.id != state) {
      option = document.createElement("option");
      option.innerText = arr.id;
      select.appendChild(option);
    }
  });

  const img = document.createElement("img");
  img.setAttribute("src", "./trash.svg");

  listsInside.appendChild(listItem);

  listItem.appendChild(listItemP);
  listItem.appendChild(dateItemP);
  listItem.appendChild(select);
  listItem.appendChild(img);
}

containerTitles.map((item) => {
  addColumn(item.title, item.color, item.count, item.id);
});

listData.map((item) => {
  lists(item.title, item.date, item.state);
  // if (item.state == "in-progress")
  //   return listsProgress(item.title, item.date, item.state);
});
