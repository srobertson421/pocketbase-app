const countEl = document.getElementById('count');
const incBtn = document.getElementById('inc');
const decBtn = document.getElementById('dec');
const todosFetchBtn = document.getElementById('todosFetchBtn');
const todosEl = document.getElementById('todos');

incBtn.addEventListener('click', () => {
  const currentCount = parseInt(countEl.innerText.split(' ')[1]);

  countEl.innerText = `Count: ${currentCount + 1}`;
});

decBtn.addEventListener('click', () => {
  const currentCount = parseInt(countEl.innerText.split(' ')[1]);

  countEl.innerText = `Count: ${currentCount - 1}`;
});

todosFetchBtn.addEventListener('click', () => {
  fetch('/api/collections/todos/records')
  .then(res => res.json())
  .then(data => {
    const todos = data.items;

    todos.forEach(todo => {
      todosEl.insertAdjacentHTML('beforeend', `<h4>${todo.text}</h4>`);
    });
  })
  .catch(console.log);
});