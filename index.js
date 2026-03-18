function addTask(task) {
  const taskList = document.querySelector('#task-list');
  const taskItem = document.createElement('li');
  taskItem.textContent = task;
  taskList.appendChild(taskItem);
}


/**
 * 删除任务函数, 未经过测试
 * @param {} task 
 */
function removeTask(task) {
  const taskList = document.querySelector('#task-list');
  const taskItems = taskList.querySelectorAll('li');
  taskItems.forEach(item => {
    if (item.textContent === task) {
      taskList.removeChild(item);
    }
  });
}