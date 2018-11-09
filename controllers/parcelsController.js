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

  static cancelParcel(req, res) {
    const id = Number(req.params.id);
    const oneParcel = Parcels.find(parcel => parcel.id === id);
    if (oneParcel) {
      res.status(200).json({
        message: 'order cancelled',
      });

      oneParcel.status = 'cancelled';
    }
    return res.status(400).json({
      message: 'cannot cancel',
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
