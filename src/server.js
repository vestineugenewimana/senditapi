/* eslint linebreak-style: ["error", "windows"] */
import express from 'express';
import morgan from 'morgan';
import router from '../routes/routes';
import endpoints from '../db/endoints';
/*  eslint linebreak-style:['error', 'windows'] */
const app = express(); //  initialize express app
app.use(express.json());
app.use(morgan('dev')); // for logging the user data in color

app.get('/', (req, res) => res.json({
  message: 'Welcome to sendit api',
  endpoints,
}));
app.use(router);

app.listen(process.env.PORT || 5000);

export default app;
