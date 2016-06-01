describe("toDoApp", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Angular Testing");
  });

  it("should display Todo1", function() {
    browser.get('/');
    expect($$('ul li').first().getText()).toEqual("ToDo1");
  });
});
