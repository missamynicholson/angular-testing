describe("toDoApp", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Angular Testing");
  });

  it("should display Todo1", function() {
    browser.get('/');
    expect($$('ul li').first().getText()).toEqual("ToDo1 - completed");
  });

  it("should display Todo2", function() {
    browser.get('/');
    expect($$('ul li').get(1).getText()).toEqual("ToDo2 - not completed");
  });

  it("adds a todo to the todos array", function() {
    browser.get('/');
    $('input').sendKeys('ToDo3');
    element(by.id('add')).click();
    expect($$('ul li').get(2).getText()).toEqual("ToDo3 - not completed");
  });

  it("removes a todo from the todos array", function() {
    browser.get('/');
    element(by.id('remove')).click();
    expect($$('ul li').count()).toBe(1);
  });
});
