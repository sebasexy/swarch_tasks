'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks);

  app.route('/task/user')
    .get(todoList.list_all_tasks_from_user)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

  app.route('/task/delete/user')
    .delete(todoList.delete_for_user);
  
  app.route('/task/user/pending')
    .get(todoList.list_all_pending_tasks_from_user);

  app.route('/task')
    .post(todoList.create_a_task)
    .get(todoList.read_a_task);
};