const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

const populateList = (plates = [], platesList) => {
  platesList.innerHTML = plates
    .map((plate, i) => `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `)
    .join('');
};

const addItem = (e) => {
  e.preventDefault();
  const form = e.target;

  const text = (form.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  form.reset();
};

const toggleDone = (e) => {
  if (!e.target.matches('input')) {
    return;
  }

  const element = e.target;
  const { index } = element.dataset;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
};

addItems.addEventListener('submit', addItem);
populateList(items, itemsList);

itemsList.addEventListener('click', toggleDone);
