import {bindTouch, readFromLS, writeToLS} from "./utilities.js";

let liveTasks = null;



function displayList(list, element, hidden) {
  console.log(list);
  element.innerHTML = "";

  list.forEach(task => {
    const item = document.createElement('li');
    // const formattedDate = new Date(task.id).toLocaleDateString("en-US");
    item.innerHTML = `<input type="checkbox"><label>${task.content}</label><button class='delBtn'>X</button>`;
    element.appendChild(item);
  })
}

function getTasks(key) {
  if (liveTasks === null) {
    liveTasks = readFromLS(key) || [];
  }
  return liveTasks;
}

function addTask(value, key) {
  const newTask = {
    id: new Date(),
    content: value,
    completed: false
  };

  liveTasks.push(newTask);
  writeToLS(key, liveTasks);
}

function removeTask(value, key) {
  const deleteTask = {
    id: key,
    content: value,
    completed: false
  };
  liveTasks.removeChild(deleteTask);
  writeToLS(key, liveTasks);
}

function filterTasks(key, completed = true) {
  let tasks = getTasks(key);
  return tasks.filter(item => item.completed === hidden);
}



// function findTask(key) {}

function completeTask(key) {
  
}


export default class Tasks {
  constructor(listElement, key) {
    this.listElement = listElement;
    this.key = key;
    bindTouch('#addTask', this.newTask.bind(this));
    this.listTasks();
  }

  newTask() {
    const task = document.getElementById('taskInput');
    console.log(task);
    addTask(task.value, this.key);
    task.value = '';
    this.listTasks();
  }

  listTasks(hidden = true) {
    displayList(getTasks(this.key), this.listElement, hidden);
    
  }


  completedTasks() {
    const taskList = document.getElementById('todoList');
    completeTask(taskList.value, this.key);
    console.log(taskList);
  }

  // deleteTask() {
  //   const task = document.getElementById('todoList');
  //   removeTask(task.value, this.key);
  //   this.listTasks();
  // }
}




