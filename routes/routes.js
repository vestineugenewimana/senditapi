import express from 'express';
import parcelController from '../controllers/parcelsController'

const router = express.Router()

//endpoints
router.get('/api/v1/parcels', parcelController.getParcels)
router.get('/api/v1/parcels/:id',parcelController.getOne)
router.post('/api/v1/parcels', parcelController.createParcel)
router.delete('/api/v1/parcels/:id', parcelController.removeParcel)
router.put('/api/v1/parcels/:id', parcelController.updateOne)

export default router