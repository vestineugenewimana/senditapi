/* eslint linebreak-style: ["error", "windows"] */
import express from 'express';
import morgan from 'morgan';
import router from '../routes/routes';
/*  eslint linebreak-style:['error', 'windows'] */
const app = express(); //  initialize express app
app.use(express.json());
app.use(morgan('dev')); // for logging the user data in color

app.use(router);

app.listen(process.env.PORT || 5000);

export default app;
