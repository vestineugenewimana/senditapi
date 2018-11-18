import express from 'express';
import parcelController from '../controllers/parcelsController';
/* eslint linebreak-style: ["error", "windows"] */

const router = express.Router();

// parcels endpoints
router.get('/api/v1/parcels', parcelController.getParcels); // endpoint to get all parcels
export default router;
