describe("toDoApp", function() {
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
});
