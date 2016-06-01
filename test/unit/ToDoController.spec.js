describe("ToDoAppController", function() {
  beforeEach(module("toDoApp"));

  var controller, ToDoFactory;

  beforeEach(inject(function($controller, _ToDoFactory_) {
    controller = $controller("ToDoAppController");
    ToDoFactory = _ToDoFactory_;
  }));

  it('initialises with an array of todos', function() {
    var todos = [new ToDoFactory("ToDo1", true), new ToDoFactory("ToDo2")];
    expect(controller.todos).toEqual(todos);
  });

  it('adds a todo to todos array', function() {
    controller.addToDo("ToDo3");
    var todo = new ToDoFactory("ToDo3");
    expect(controller.todos).toContain(todo);
  });

  it('removes a todo from todos array', function() {
    controller.removeToDo();
    expect(controller.todos).not.toContain({text: "ToDo2", completed: false});
  });

});
