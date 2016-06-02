describe("app", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Todos App");
  });
});

describe('Todos tracker', function() {
  it('has a todo', function() {
    browser.get('/');
    var todo = $('#todo');
    expect(todo.getText()).toContain('ToDo1: completed');
  });

  it('has another todo', function() {
    browser.get('/');
    var list = $$('ul li');
    expect(list.get(1).getText()).toEqual("ToDo2: not completed");
  });
});

describe('add a todo', function() {
  it('adds a todo to the page', function() {
    browser.get('/');
    $('input').sendKeys('ToDo3');
    element(by.id('add')).click();
    var list = $$('ul li');
    expect(list.get(2).getText()).toEqual("ToDo3: not completed");
  });
});
