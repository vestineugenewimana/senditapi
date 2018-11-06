import Parcels from '../db/parcels';

class parcelsController {
  static getParcels(req, res) {
    return res.json({
      message: 'List of all parcels',
      parcels: Parcels,
    });
  }

  static createParcel(req, res) {
    const newId = Parcels[Parcels.length - 1].id + 1;
    const pickupLocation = req.body.pickupLocation;
    const destinationLocation = req.body.destinationLocation;
    const weight = req.body.weight;
    const quantity = req.body.quantity;
    const comment = req.body.comment;
    const newParcel = {
      id: newId,
      comment,
      pickupLocation,
      destinationLocation,
      weight,
      quantity,
    };
    if (newParcel) {
      Parcels.push(newParcel);
      return res.status(200).json({
        message: 'created a new parcel',
      });
    }
    return res.status(400).json({
      message: 'could not add new parcel',
    });
  }

  static getOne(req, res) {
    const id = req.params.id;
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

  static removeParcel(req, res) {
    const id = req.params.id;
    const oneParcel = Parcels.find(
      parcel => parcel.id == id, // returns true if the parcel is found with the id from params
    );
    if (oneParcel) {
      const newParcels = Parcels.filter(
        parcel => parcel !== oneParcel, // returns an object without filtered parcel
      );
      res.status(200).json({
        message: 'parcel deleted',
        Parcels: newParcels,
      });
    } else {
      return res.status(400).json({
        message: 'parcel do not exist',
      });
    }
  }
}

export default parcelsController;
