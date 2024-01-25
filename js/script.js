const btn = document.querySelector('#btn');
const input = document.querySelector('#input');
const list = document.querySelector('#list');
let elems = document.querySelector('ul li')

btn.addEventListener('click', (event) => {
    const newItem = document.createElement('li'); // document.createElement(); - adds element.
    newItem.classList.add('item'); //element.classList - adds or removes classes for an element.
    newItem.textContent = input.value; //textContent - allows you to read or set the text content of an element.
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => {
        list.removeChild(newItem); // parent.removeChild - removes the specified element from parent.
    })
    newItem.appendChild(deleteBtn); // parent.appendChild - allows you to insert any element at the end of the element.
    list.appendChild(newItem);
    input.value = '';
    list.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
          event.target.classList.toggle('checked');
        }
      });
})