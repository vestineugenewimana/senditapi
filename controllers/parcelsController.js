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
    const newId = Parcels[Parcels.length - 1].id + 1;
    const {
      pickupLocation, destinationLocation, weight, comment, quantity,
    } = req.body;
    const newParcel = {
      id: newId,
      cancel: false,
      comment,
      pickupLocation,
      destinationLocation,
      weight,
      quantity,
    };
    Parcels.push(newParcel);
    return res.status(200).json({
      message: 'created a new parcel',
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
    if (oneParcel) {
      const newParcels = Parcels.filter(
        parcel => parcel !== oneParcel, // returns an object without filtered parcel
      );
      return res.status(200).json({
        message: 'parcel deleted',
        Parcels: newParcels,
      });
    }
    return res.status(400).json({
      message: 'parcel do not exist',
    });
  }
}

export default parcelsController;
