describe('The tasks', function(){
  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('are described as active when created', function(){
    taskEntryField.sendKeys(importantTask);
    taskEntryButton.click();
    var checkbox = list.get(0).element(by.model('task.isCompleted'));
    expect(checkbox.getAttribute('checked')).toEqual(null);
  });

    it('can be marked as done', function(){
    taskEntryField.sendKeys(importantTask);
    taskEntryButton.click();
    var checkbox = list.get(0).element(by.model('task.isCompleted'));
    checkbox.click();
    expect(checkbox.getAttribute('checked')).toEqual('true');
  });

});

  var taskEntryField = element(by.model('tasksCtrl.newTask'));
  var taskEntryButton = element(by.id('new-task__button'));
  var list = element.all(by.repeater('task in tasksCtrl.visibleTasks'));
  var importantTask = "Investigate smell eminating from fridge's vegetable compartment";