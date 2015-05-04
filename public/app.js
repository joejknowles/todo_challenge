var app = angular.module('ToDo', ['ngResource']);

app.controller('TasksController', function(){

  var self = this;
  self.allTasks = [];
  self.visibleTasks = [];
  self.newTask = "";

  self.addTask = function(){
    self.allTasks.unshift({name: self.newTask, isCompleted: false});
    self.newTask = "";
    self.visibleTasks = self.allTasks;
  };

  self.showActive = function() {
    selectTasksByCompleted(false);
  };

  self.showCompleted = function() {
    selectTasksByCompleted(true);
  };

  self.showAll = function() {
    self.visibleTasks = self.allTasks;
  };

  self.clearCompleted = function() {
    self.allTasks = selectTasksByCompleted(false);
  };

  var selectTasksByCompleted = function(isCompleted) {
    return self.visibleTasks = self.allTasks.filter(function(task) {
      return task.isCompleted === isCompleted;
    });
  };

});

