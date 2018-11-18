import Joi from 'joi';
import Parcels from '../db/parcels';
/* eslint linebreak-style: ["error", "windows"] */

class parcelsController {
  // this should get all parcels
  static getParcels(req, res) {
    return res.json({
      message: 'List of all parcels',
      parcels: Parcels,
    });
  }

  static createParcel(req, res) {
    const data = req.body;
    const schema = Joi.object().keys({
      pickupLocation: Joi.string().required(),
      destinationLocation: Joi.string().required(),
      weight: Joi.string().required(),
      status: Joi.string(),
      quantity: Joi.number().required(),
      comment: Joi.string(),
    });
    Joi.validate(data, schema, (err, value) => {
      const newId = Parcels[Parcels.length - 1].id + 1;
      if (err) {
        res.status(400).json({
          message: 'invalid data',
        });
      } else {
        Parcels.push(value);
        res.status(200).json({
          message: 'created a new parcel',
          data: Object.assign({ newId }, value),
        });
      }
    });
  }

  // get one parcel by its id
  static getOne(req, res) {
    const { id } = req.params;
    const oneParcel = Parcels.find(parcel => parcel.id == id);
    if (oneParcel) {
      return res.json({
        message: 'parcel found',
        parcel: oneParcel,
      });
    }
    return res.status(400).json({
      message: 'parcel not found',
    });
  }
}
export default parcelsController;
