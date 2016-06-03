describe("toDoApp", function() {
  var mock = require('protractor-http-mock');

  beforeEach(function(){
    mock([{
      request: {
        path: 'http://quiet-beach-24792.herokuapp.com/todos.json',
        method: 'GET'
      },
      response: {
        data: [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}]
      }
    }]);
  });


  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Angular Testing");
  });

  it("should display Todo1", function() {
    browser.get('/');
    expect($$('ul li').first().getText()).toContain("ToDo1 - completed");
  });

  it("should display Todo2", function() {
    browser.get('/');
    expect($$('ul li').get(1).getText()).toContain("ToDo2 - not completed");
  });

  it("adds a todo to the todos array", function() {
    browser.get('/');
    $('input').sendKeys('ToDo3');
    element(by.id('add')).click();
    expect($$('ul li').get(2).getText()).toContain("ToDo3 - not completed");
  });

  it("removes a todo from the todos array", function() {
    browser.get('/');
    element(by.id('remove')).click();
    expect($$('ul li').count()).toBe(1);
  });

  it("complete the second todo", function() {
    browser.get('/');
    $('input').sendKeys('ToDo3');
    element(by.id('add')).click();
    $$('ul li').get(2).element(by.buttonText('Complete')).click();
    expect($$('ul li').get(2).getText()).toContain("ToDo3 - completed");
  });

  it("should show all todos if no filter or 'All' is chosen", function() {
    browser.get('/');
    var select = element(by.model('showCompleted'));
    select.$('[value=""]').click();
    expect($$('ul li').count()).toBe(2);
  });

  it("should filter todos to show completed only", function() {
    browser.get('/');
    var select = element(by.model('showCompleted'));
    select.$('[value="true"]').click();
    expect($$('ul li').count()).toBe(1);
  });

  it("should filter todos to show active only", function() {
    browser.get('/');
    var select = element(by.model('showCompleted'));
    select.$('[value="false"]').click();
    expect($$('ul li').count()).toBe(1);
  });

  it("view total number of tasks", function() {
    browser.get('/');
    var total = element(by.id('total'));
    expect(total.getText()).toMatch("2");
  });

  it("view total number of tasks if one is added", function() {
    browser.get('/');
    $('input').sendKeys('ToDo3');
    element(by.id('add')).click();
    var total = element(by.id('total'));
    expect(total.getText()).toMatch("3");
  });
});
