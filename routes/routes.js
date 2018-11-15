import express from 'express';
import parcelController from '../controllers/parcelsController';
import userController from '../controllers/userController';
/* eslint linebreak-style: ["error", "windows"] */

const router = express.Router();

// parcels endpoints
router.get('/api/v1/parcels', parcelController.getParcels);
router.get('/api/v1/parcels/:id', parcelController.getOne);
router.post('/api/v1/parcels', parcelController.createParcel);
router.put('/api/v1/parcels/status/:id', parcelController.changeParcelStatus);
router.put('/api/v1/parcels/:id/cancel', parcelController.cancelParcel);
router.delete('/api/v1/parcels/:id', parcelController.removeParcel);
// users endpoints

router.get('/api/v1/users', userController.getUsers);
router.post('/api/v1/users/register', userController.addUser);
router.post('/api/v1/users/login', userController.userLogin);
router.get('/api/v1/users/:userId/parcels', userController.userParcel);
export default router;
