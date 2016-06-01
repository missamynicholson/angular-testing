describe("ToDoAppController", function() {
  beforeEach(module("toDoApp"));

  var controller;

  beforeEach(inject(function($controller) {
    controller = $controller("ToDoAppController");
  }));

  it('initialises with an array of todos', function() {
    expect(controller.todos).toContain("ToDo1");
  });

});
