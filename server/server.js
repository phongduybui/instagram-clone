import express from 'express';
import connectDB from './config/db.js';
import route from './routes/index.js';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();
const port = 5000;

app.use(express.json());

route(app);

// Apply middlewares for error handling
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`.red.bold.bgGreen);
});
