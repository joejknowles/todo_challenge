describe('The app', function(){
  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('shows the title',function(){
    console.log(element[0]);
    expect(browser.getTitle()).toEqual('To Do');
  });
});