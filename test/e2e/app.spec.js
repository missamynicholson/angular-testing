describe("app", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("ToDoApp");
  });

  it("should say hello world on the page", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("ToDoApp");
    var hello = element(by.id('hello'))
    expect(hello.getText()).toEqual("hello world");
  });
});
