const countEl = document.getElementById('count');
const incBtn = document.getElementById('inc');
const decBtn = document.getElementById('dec');

incBtn.addEventListener('click', () => {
  const currentCount = parseInt(countEl.innerText.split(' ')[1]);

  countEl.innerText = `Count: ${currentCount + 1}`;
});

decBtn.addEventListener('click', () => {
  const currentCount = parseInt(countEl.innerText.split(' ')[1]);

  countEl.innerText = `Count: ${currentCount - 1}`;
});