describe('The list', function(){
  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('only shows active tasks when option selected', function(){
    taskEntryField.sendKeys(importantTask);
    taskEntryButton.click();
    var checkbox = list.get(0).element(by.model('task.isCompleted'));
    checkbox.click();
    taskEntryField.sendKeys("respond to David Cameron's \"urgent\" voicemail");
    taskEntryButton.click();
    element(by.id('show-active')).click();
    expect(list.count()).toEqual(1);
  });

  it('only shows completed tasks when option selected', function(){
    taskEntryField.sendKeys(importantTask);
    taskEntryButton.click();
    var checkbox = list.get(0).element(by.model('task.isCompleted'));
    checkbox.click();
    taskEntryField.sendKeys("respond to David Cameron's \"urgent\" voicemail");
    taskEntryButton.click();
    element(by.id('show-completed')).click();
    expect(list.count()).toEqual(1);
  });


  it('can return to showing all tasks', function(){
    taskEntryField.sendKeys(importantTask);
    taskEntryButton.click();
    var checkbox = list.get(0).element(by.model('task.isCompleted'));
    checkbox.click();
    taskEntryField.sendKeys("respond to David Cameron's \"urgent\" voicemail");
    taskEntryButton.click();
    element(by.id('show-active')).click();
    element(by.id('show-all')).click();
    expect(list.count()).toEqual(2);
  });

  it('can clear completed tasks', function(){
    taskEntryField.sendKeys(importantTask);
    taskEntryButton.click();
    var checkbox = list.get(0).element(by.model('task.isCompleted'));
    checkbox.click();
    taskEntryField.sendKeys("respond to David Cameron's \"urgent\" voicemail");
    taskEntryButton.click();
    element(by.id('clear-completed')).click();
    element(by.id('show-completed')).click();
    expect(list.count()).toEqual(0);
    element(by.id('show-all')).click();
    expect(list.count()).toEqual(1);
  });


});
  var taskEntryField = element(by.model('tasksCtrl.newTask'));
  var taskEntryButton = element(by.id('new-task__button'));
  var list = element.all(by.repeater('task in tasksCtrl.visibleTasks'));
  var importantTask = "Investigate smell eminating from fridge's vegetable compartment";