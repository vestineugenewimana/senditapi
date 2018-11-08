import express from 'express';
import parcelController from '../controllers/parcelsController';

const router = express.Router();

// endpoints
router.get('/api/v1/parcels', parcelController.getParcels);
router.get('/api/v1/parcels/:id', parcelController.getOne);
router.post('/api/v1/parcels', parcelController.createParcel);
router.put('/api/v1/parcels/:id/cancel', parcelController.cancelParcel);
router.delete('/api/v1/parcels/:id', parcelController.removeParcel);

export default router;
