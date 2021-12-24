import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import swaggerJSDoc from 'swagger-jsdoc'; //El swagger es para la documentacion de codigo por si acaso hay muchas rutas
import swaggerUI from 'swagger-ui-express';
import { options } from '../swaggerOptions';
const specs = swaggerJSDoc(options);

import tasksRoutes from '../routes/tasks';

export default app => {
    // Settings
    app.set('port', process.env.PORT || 3000);

    //Middlewares
    app.use(cors());
    app.use(morgan('dev'));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // Routes
    tasksRoutes(app);
    app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

    return app;
};