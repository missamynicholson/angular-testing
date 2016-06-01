toDoApp.factory("ToDoFactory", function() {
  var Todo = function(taskText, completed) {
    this.text = taskText;
    this.completed = (typeof completed !== "undefined") ? completed : false;
  };
  Todo.prototype.complete = function() {
    this.completed = true;
  };
  return Todo;
});
