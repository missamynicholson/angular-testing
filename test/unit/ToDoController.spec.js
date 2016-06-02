describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with two toDos', function() {
    var todos = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];
    expect(ctrl.todos).toEqual(todos);
  });

  it('adds a todo into todos array', function() {
    ctrl.addTodo("ToDo3");
    var newTodo = {text: "ToDo3", completed: false};
    expect(ctrl.todos).toContain(newTodo);
  });

  it('removes a todo out of the todos array', function() {
    ctrl.removeTodo();
    expect(ctrl.todos.length).toEqual(1);
  });
});