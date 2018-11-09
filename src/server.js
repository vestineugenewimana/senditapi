/* eslint linebreak-style: ["error", "windows"] */
import express from 'express';
import morgan from 'morgan';
import router from '../routes/routes';
/*  eslint linebreak-style:['error', 'windows'] */
const app = express(); //  initialize express app
app.use(express.json());
app.use(morgan('dev')); // for logging the user data in color

app.get('/', (req, res) => res.json({
  message: 'Welcome to sendit api',
  Parcelendpoints: [
    {
      allparcels: '/api/v1/parcels',
      oneparcel: '/api/v1/parcels/:id',
      createAparcel: '/api/v1/parcels',
      cancelParcelOrder: '/api/v1/parcels/:id/cancel',
      deleteAparcel: '/api/v1/parcels/:id',
    },
  ],
  Userendpoints: [
    {
      allUsers: '/api/v1/users',
      oneparcel: '/api/v1/users/register',
      loginUser: '/api/v1/users/login',
      userParcels: '/api/v1/users/:userId/parcels',
    },
  ],
}));
app.use(router);

app.listen(process.env.PORT || 5000);

export default app;
