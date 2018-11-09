const endpoints = {
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
};
export default endpoints;
