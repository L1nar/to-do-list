const btn = document.querySelector('#btn');
const input = document.querySelector('#input');
const list = document.querySelector('#list');

btn.addEventListener('click', (event) => {
    let newItem = document.createElement('li'); // document.createElement(); - adds element.
    newItem.classList.add('item'); //element.classList - adds or removes classes for an element.
    newItem.textContent = input.value; //textContent - allows you to read or set the text content of an element.
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => {
      const conf = confirm('Вы действительно хотите удалить эту задачу?');
            if (conf === true) {
                list.removeChild(newItem); // parent.removeChild - removes the specified element from parent.
            } else {
                return false;
            }     
    })
    newItem.appendChild(deleteBtn); // parent.appendChild - allows you to insert any element at the end of the element.
    list.appendChild(newItem);
    input.value = '';
    newItem.addEventListener('click', (event) => {
        event.target.classList.toggle('checked'); // classList.toggle(); - добовляет класс на страницу, если его нет и удаляет, если он есть.
    });
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        btn.click();
      }
    })
});