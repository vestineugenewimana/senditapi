import Parcels from '../db/parcels';
/* eslint linebreak-style: ["error", "windows"] */

class parcelsController {
  // this should get all parcels
  static getParcels(req, res,next) {
    return res.json({
      message: 'List of all parcels',
      parcels: Parcels,
    });
  }
}
export default parcelsController;
