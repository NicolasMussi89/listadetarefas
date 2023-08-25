const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="removeBtn">Remover</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';
    addRemoveEventListener(taskItem);
  }
}

function addRemoveEventListener(taskItem) {
  const removeBtn = taskItem.querySelector('.removeBtn');
  removeBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });
}
