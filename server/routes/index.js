import userRouter from './userRoutes';

function route(app) {
  app.use('/api/v1/users', userRouter);
}

export default route;
