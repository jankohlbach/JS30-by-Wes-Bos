const itemsList = document.querySelector(".plates");
const addItems = document.querySelector(".add-items");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(event) {
  event.preventDefault();
  const text = (this.querySelector("[name=item]")).value;

  const item = {
    text: text,
    done: false,
  }

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map(function(plate, i) {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ""} />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    })
    .join("");
}

function toggleDone(event) {
  if (event.target.matches("input")) {
    const element = event.target;
    const index = element.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemsList);
  }
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

populateList(items, itemsList);