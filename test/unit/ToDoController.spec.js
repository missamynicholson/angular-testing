describe("ToDoAppController", function() {
  beforeEach(module("toDoApp"));

  var controller, factory, httpMock;

  beforeEach(inject(function($controller, _ToDoFactory_, $httpBackend) {
    controller = $controller("ToDoAppController");
    factory = _ToDoFactory_;
    httpMock = $httpBackend;

    url = "http://quiet-beach-24792.herokuapp.com/todos.json";
    exampleResponse = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];
    httpMock.expect("GET", url).respond(exampleResponse);
    httpMock.flush();
  }));

  it('initialises with an array of todos from API', function() {
    var todos = [new factory("ToDo1", true), new factory("ToDo2")];
    expect(controller.todos).toEqual(todos);
  });

  it('adds a todo to todos array', function() {
    controller.addToDo("ToDo3");
    var todo = new factory("ToDo3");
    expect(controller.todos).toContain(todo);
  });

  it('removes a todo from todos array', function() {
    controller.removeToDo();
    expect(controller.todos).not.toContain({text: "ToDo2", completed: false});
  });

});
