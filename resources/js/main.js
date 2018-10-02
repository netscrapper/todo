
var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')):{
    todo: [],
    completed: []
  };

renderTodoList();

function renderTodoList() {
    if (!data.todo.length && !data.completed.length) return;
  
    for (var i = 0; i < data.todo.length; i++) {
      var value = data.todo[i];
      addItemToDOM(value);
    }
  
    for (var j = 0; j < data.completed.length; j++) {
      var value = data.completed[j];
      addItemToDOM(value, true);
    }
  }