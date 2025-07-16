const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const taskInput = document.getElementById('task-input');
  const taskTime = document.getElementById('task-time');

  const taskText = taskInput.value.trim();
  const taskDateTime = taskTime.value;

  if (!taskText || !taskDateTime) return;

  const li = document.createElement('li');
  li.className = 'task';

  const span = document.createElement('span');
  span.textContent = `${taskText} (Due: ${new Date(taskDateTime).toLocaleString()})`;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const doneBtn = document.createElement('button');
  doneBtn.textContent = '✅';
  doneBtn.onclick = () => li.classList.toggle('done');

  const editBtn = document.createElement('button');
  editBtn.textContent = '✏️';
  editBtn.onclick = () => editTask(span, taskText, taskDateTime);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.onclick = () => li.remove();

  actions.append(doneBtn, editBtn, deleteBtn);
  li.append(span, actions);
  taskList.appendChild(li);

  taskInput.value = '';
  taskTime.value = '';
});

function editTask(span, oldText, oldDateTime) {
  const newText = prompt('Edit task:', oldText);
  const newDateTime = prompt('Edit date and time:', oldDateTime);
  if (newText && newDateTime) {
    span.textContent = `${newText} (Due: ${new Date(newDateTime).toLocaleString()})`;
  }
}
