import express from 'express';
const postRouter = express.Router();
import {
  getPost,
  createPost,
  deletePost,
  updatePost,
} from '../controllers/postController.js';

postRouter.route('/').get(getPost).post(createPost);

postRouter.route('/:id').delete(deletePost).patch(updatePost);
export default postRouter;
