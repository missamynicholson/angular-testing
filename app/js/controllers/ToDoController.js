toDoApp.controller("ToDoAppController", ["ToDoFactory", "ToDoService", function(ToDoFactory, ToDoService) {
  var self = this;
  ToDoService.getAll().then(function(response) {
    self.todos = response;
  });

  this.addToDo = function(todoText) {
    self.todos.push(new ToDoFactory(todoText));
  };

  this.removeToDo = function(todo) {
    self.todos.pop();
  };
}]);
