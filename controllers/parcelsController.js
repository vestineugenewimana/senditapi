import Joi from 'joi';
import Parcels from '../db/parcels';
/* eslint linebreak-style: ["error", "windows"] */

class parcelsController {
  static getParcels(req, res) {
    return res.json({
      message: 'List of all parcels',
      parcels: Parcels,
    });
  }

  // create a parcel
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

  // get one parcel
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

  // change parcel status
  static changeParcelStatus(req, res) {
    const { id } = req.params;
    const oneParcel = Parcels.find(parcel => parcel.id == id);
    if (oneParcel) {
      const { updatedStatus } = req.body;
      oneParcel.status = updatedStatus;
      return res.status(200).json({
        message: 'status changed',
      });
    }
    return res.status(400).json({
      message: 'status could not be changed',
    });
  }
  // cancel a parcel order

  static cancelParcel(req, res) {
    const Id = req.params.id;
    const cancelParcel = Parcels.find(parcel => parcel.id == Id);
    if (cancelParcel) {
      const toCancel = req.body.cancelled;
      res.status(200).json({
        message: 'order cancelled',
      });
      return (cancelParcel.cancel = toCancel);
    }
    return res.status(400).json({
      message: 'parcel cannot be cancelled',
    });
  }

  // remove one parcel
  static removeParcel(req, res) {
    const { id } = req.params;
    const oneParcel = Parcels.find(
      parcel => parcel.id == id, // returns true if the parcel is found with the id from params
    );
    const parcelIndex = Parcels.indexOf(oneParcel);
    if (oneParcel) {
      Parcels.splice(parcelIndex, 1);
      return res.status(200).json({
        message: 'parcel deleted',
        Parcels,
      });
    }
    return res.status(400).json({
      message: 'parcel do not exist',
    });
  }
}

export default parcelsController;
