function addTask(task) {
  const taskList = document.querySelector('#task-list');
  const taskItem = document.createElement('li');
  taskItem.textContent = task;
  taskList.appendChild(taskItem);
}