toDoApp.controller('ToDoController', ["ToDoFactory", function(ToDoFactory) {
  this.todos = [];

  this.addTodo = function(todoText) {
    this.todos.push(new ToDoFactory(todoText));
  };

  this.removeTodo = function() {
    this.todos.pop();
  };
}]);
