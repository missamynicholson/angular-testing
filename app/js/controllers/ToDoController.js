toDoApp.controller('ToDoController', function() {
  this.todos = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];

  this.addTodo = function(todoText) {
    this.todos.push({text: todoText, completed: false});
  };

  this.removeTodo = function() {
    this.todos.pop();
  };
});