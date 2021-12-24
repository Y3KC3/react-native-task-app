"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = require("../controllers/tasks");

var router = (0, _express.Router)();

var _default = function _default(app) {
  /**
   * @swagger
   * tags: 
   *  name: Tasks
   *  description: Tasks endpoint
  */

  /**
      * @swagger
      * /tasks:
      *  get:
      *   summary: Get all tasks
      *   tags: [Tasks]
  */
  router.get('/tasks', _tasks.getTasks);
  /**
      * @swagger
      * /tasks/count:
      *  get:
      *   summary: Get the Count to the tasks
      *   tags: [Tasks]
  */

  router.get('/tasks/count', _tasks.getTasksCount);
  /**
      * @swagger
      * /tasks/:id:
      *  get:
      *   summary: Get a task by id
      *   tags: [Tasks]
  */

  router.get('/task/:id', _tasks.getTask);
  /**
      * @swagger
      * /tasks:
      *  post:
      *   summary: add a task
      *   tags: [Tasks]
  */

  router.post('/tasks', _tasks.saveTask);
  /**
      * @swagger
      * /tasks/:id:
      *  delete:
      *   summary: delete a task by id
      *   tags: [Tasks]
  */

  router["delete"]('/tasks/:id', _tasks.deleteTask);
  /**
      * @swagger
      * /tasks/:id:
      *  get:
      *   summary: update a task by id
      *   tags: [Tasks]
  */

  router.put('/tasks/:id', _tasks.updateTask);
  app.use(router);
};

exports["default"] = _default;