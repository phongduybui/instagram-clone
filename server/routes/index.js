import userRoute from './userRouter.js';
import postRoute from './postRouter.js';
const route = function (app) {
  app.use('/api/v1/users', userRoute);
  app.use('/api/v1/posts', postRoute);
};

export default route;
