import { Router } from 'express';
import UserController from './controllers/UserController';
import TaskController from './controllers/TaskController';
import AuthController from './controllers/AuthController';
import authMiddleware from './middlewares/authMiddlewares';

const routes = Router();

const userController = new UserController();
const taskController = new TaskController();
const authController = new AuthController();

routes.post('/auth', authController.authenticate);

routes.get('/users', userController.index);
routes.get('/users/:id', userController.show);
routes.post('/users', userController.create);


routes.get('/tasks',authMiddleware, taskController.index);
routes.get('/tasks/:id',authMiddleware, taskController.show);
routes.get('/pendindTasks',authMiddleware, taskController.showPendindTasks);
routes.get('/completedTasks',authMiddleware, taskController.showCompletedTasks);
routes.get('/changeStatusTask/:id',authMiddleware, taskController.changeStatusTask);
routes.put('/tasks/:id',authMiddleware, taskController.update);
routes.post('/tasks',authMiddleware, taskController.create);
routes.delete('/tasks/:id',authMiddleware, taskController.delete);



export default routes;