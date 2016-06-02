describe("ToDoFactory", function() {
  beforeEach(module("toDoApp"));

  var todo;

  beforeEach(inject(function(ToDoFactory) {
    todo = new ToDoFactory("ToDo3");
  }));

  it("changes the todo completed status to completed", function() {
    todo.complete(todo);
    expect(todo.completed).toEqual(true);
  });

  it("expects it to be false by default", function() {
    expect(todo.completed).toEqual(false);
  });

});
