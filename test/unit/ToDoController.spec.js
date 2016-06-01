describe("ToDoAppController", function() {
  beforeEach(module("toDoApp"));

  var controller;

  beforeEach(inject(function($controller) {
    controller = $controller("ToDoAppController");
  }));

  it('initialises with an array of todos', function() {
    var todos = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];
    expect(controller.todos).toEqual(todos);
  });

  it('adds a todo to todos array', function() {
    controller.addToDo("ToDo3");
    expect(controller.todos).toContain({text: "ToDo3", completed: false});
  });

  it('removes a todo from todos array', function() {
    controller.removeToDo();
    expect(controller.todos).not.toContain({text: "ToDo2", completed: false});
  });

});
