import { Router } from 'express';
import { getTasks, getTasksCount, getTask, saveTask, deleteTask, updateTask } from '../controllers/tasks';
const router = Router();

export default app => {
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
    router.get('/tasks', getTasks);
    /**
        * @swagger
        * /tasks/count:
        *  get:
        *   summary: Get the Count to the tasks
        *   tags: [Tasks]
    */
    router.get('/tasks/count', getTasksCount);
    /**
        * @swagger
        * /tasks/:id:
        *  get:
        *   summary: Get a task by id
        *   tags: [Tasks]
    */
    router.get('/task/:id', getTask);
    /**
        * @swagger
        * /tasks:
        *  post:
        *   summary: add a task
        *   tags: [Tasks]
    */
    router.post('/tasks', saveTask);
    /**
        * @swagger
        * /tasks/:id:
        *  delete:
        *   summary: delete a task by id
        *   tags: [Tasks]
    */
    router.delete('/tasks/:id', deleteTask);
    /**
        * @swagger
        * /tasks/:id:
        *  get:
        *   summary: update a task by id
        *   tags: [Tasks]
    */
    router.put('/tasks/:id', updateTask);
    
    app.use(router);
};