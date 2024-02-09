const btn = document.querySelector('#btn');
const input = document.querySelector('#input');
const list = document.querySelector('#list');
const modalWindow = document.querySelector('#myModal');
const closeBtn = document.querySelector('#close');
const cancelBtn = document.querySelector('#cancel');
const removeBtn = document.querySelector('#remove');
const wrap = document.querySelector('#wrap');

btn.addEventListener('click', (event) => {
    let newItem = document.createElement('li'); // document.createElement(); - adds element.
    newItem.classList.add('item'); //element.classList - adds or removes classes for an element.
    newItem.textContent = input.value; //textContent - allows you to read or set the text content of an element.
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => {
      modalWindow.style.display = 'block';
    });
    closeBtn.addEventListener('click', () => {
      modalWindow.style.display = 'none'
    });
    cancelBtn.addEventListener('click', () => {
      modalWindow.style.display = 'none'
    });
    removeBtn.addEventListener('click', () => {
      list.removeChild(newItem);
      modalWindow.style.display = 'none';
    });
    newItem.appendChild(deleteBtn); // parent.appendChild - allows you to insert any element at the end of the element.
    list.appendChild(newItem);
    input.value = '';
    newItem.addEventListener('click', (event) => {
        event.target.classList.toggle('checked'); // classList.toggle(); - добовляет класс на страницу, если его нет и удаляет, если он есть.
    });


    function addTask() {
      let newItem = document.createElement('li'); // document.createElement(); - adds element.
      newItem.classList.add('item'); //element.classList - adds or removes classes for an element.
      newItem.textContent = input.value; //textContent - allows you to read or set the text content of an element.
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'x';
      deleteBtn.classList.add('delete');
      deleteBtn.addEventListener('click', () => {
        modalWindow.style.display = 'block';
      });
      closeBtn.addEventListener('click', () => {
        modalWindow.style.display = 'none'
      });
      cancelBtn.addEventListener('click', () => {
        modalWindow.style.display = 'none'
      });
      removeBtn.addEventListener('click', () => {
        list.removeChild(newItem);
        modalWindow.style.display = 'none';
      });
      newItem.appendChild(deleteBtn); // parent.appendChild - allows you to insert any element at the end of the element.
      list.appendChild(newItem);
      input.value = '';
      newItem.addEventListener('click', (event) => {
          event.target.classList.toggle('checked'); // classList.toggle(); - добовляет класс на страницу, если его нет и удаляет, если он есть.
      });
    }

    btn.addEventListener('click', addTask);

    input.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        addTask(event);
      }
    });
});