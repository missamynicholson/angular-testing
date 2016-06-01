toDoApp.controller("ToDoAppController", function() {
  this.todos = [{text: "ToDo1", completed: true},
                {text: "ToDo2", completed: false}];

  this.addToDo = function(todoText) {
    this.todos.push({text: todoText, completed: false});
  };

  this.removeToDo = function() {
    this.todos.pop();
  };
});
