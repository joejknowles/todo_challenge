describe('The task list', function(){
  beforeEach(function() {
    browser.get('http://localhost:3000');
  });



  it('can be added to', function(){
    taskEntryField.sendKeys(importantTask);
    taskEntryButton.click();
    console.log(list.get(0).getText);
    expect(list.get(0).getText()).toEqual(importantTask);
  });

});

  var taskEntryField = element(by.model('tasksCtrl.newTask'));
  var taskEntryButton = element(by.id('new-task__button'));
  var list = element.all(by.repeater('task in tasksCtrl.visibleTasks'));
  var importantTask = "Investigate smell eminating from fridge's vegetable compartment";