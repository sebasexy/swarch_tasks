'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.list_all_tasks_from_user = function(req, res){
  Task.find({email : req.query.email}, function(err, task){
    if (err)
        res.send(err);
    res.json(task);
  });
};

exports.list_all_pending_tasks_from_user = function(req, res){
    Task.find({$or: [ {status: 'pending'}, {status : 'late'}], email: req.query.email}, function(err, task){
      if(err)
        res.send(err);
      res.json(task);
    });
};


exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.find({title:req.query.title, email: req.query.email}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({email:req.query.email, title:req.query.title}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {
  Task.remove({
    email:req.query.email, title:req.query.title
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};