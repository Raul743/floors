import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv-safe';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

// Routes
import routes from './routes';

// Environment variables
dotenv.config({
  allowEmptyValues: true,
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development',
});

// Database
import './database';

// App
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use(routes);

// Port
const port = process.env.PORT || 5000;

// Listen
if (require.main == module) {
  app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
  });
}

export default app;
