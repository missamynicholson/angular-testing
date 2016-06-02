describe("app", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Todos App");
  });
});

describe('add a todo', function() {
  it('adds a todo to the page', function() {
    browser.get('/');
    $('input').sendKeys('ToDo3');
    element(by.id('add')).click();
    var list = $$('ul li');
    expect(list.first().getText()).toContain("ToDo3: not completed");
  });
});

describe('removes a todo', function() {
  it('removes todo from the page', function() {
    browser.get('/');
    $('input').sendKeys('ToDo3');
    element(by.id('add')).click();
    var list = $$('ul li');
    element(by.id('remove')).click();
    expect(list.count()).toEqual(0);
  });
});

describe('complete a todo', function() {
  it('completes a todo from the page', function() {
    browser.get('/');
    $('input').sendKeys('ToDo3');
    element(by.id('add')).click();
    var list = $$('ul li');
    list.get(0).element(by.id('complete')).click();
    expect(list.get(0).getText()).toContain("ToDo3: completed");
  });
});
