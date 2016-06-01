describe("app", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Angular Testing");
  });

  it("should display hello world message", function() {
    browser.get('/');
    expect($$("p").first().getText()).toEqual("Hello world");
  });
});
