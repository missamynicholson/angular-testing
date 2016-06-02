describe("ToDoService", function() {
  beforeEach(module("toDoApp"));

  var service, factory, httpMock;

  beforeEach(inject(function(ToDoService, _ToDoFactory_, $httpBackend) {
    service = ToDoService;
    factory = _ToDoFactory_;
    httpMock = $httpBackend;
  }));

  it("returns an array of todos from the page", function() {
    url = "http://quiet-beach-24792.herokuapp.com/todos.json";
    mockedResponse = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];
    httpMock.expect("GET", url).respond(mockedResponse);

    var todos = [new factory("ToDo1", true), new factory("ToDo2")];

    service.getAll().then(function(response) {
      expect(response).toEqual(todos);
    });
    httpMock.flush();
  });

});
