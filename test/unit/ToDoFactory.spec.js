describe("toDoFactory", function(){
  beforeEach(module("toDoApp"));

  var todo;

  beforeEach(inject(function(ToDoFactory) {
    todo = new ToDoFactory("ToDo3");
  }));

  it('makes an incomplete todo when completed not defined', function() {
    expect(todo.completed).toEqual(false);
  });

  it('completes the todo', function() {
    todo.complete();
    expect(todo.completed).toEqual(true);
  });

});
