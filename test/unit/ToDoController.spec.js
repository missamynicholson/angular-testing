describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl, todo;

  beforeEach(inject(function($controller, _ToDoFactory_) {
    ctrl = $controller('ToDoController');
    todo = new _ToDoFactory_("ToDo3");
  }));

  it('initialises with an empty array', function() {
    expect(ctrl.todos).toEqual([]);
  });

  it('adds a todo into todos array', function() {
    ctrl.addTodo("ToDo3");
    expect(ctrl.todos).toContain(todo);
  });

  it('removes a todo out of the todos array', function() {
    ctrl.addTodo("ToDo3");
    ctrl.removeTodo();
    expect(ctrl.todos.length).toEqual(0);
  });
});
