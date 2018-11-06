import Parcels from '../db/parcels'


class parcelsController{
  static getParcels(req, res){
    return res.json({
      'message':'List of all parcels',
      parcels:Parcels
    })
  }
  static createParcel(req, res){
    const newId = Parcels[Parcels.lenght -1].id + 1
    const pickupLocation = req.body.pickupLocation
    const destinationLocation = req.body.destinationLocation
    const weight = req.body.weight
    const quantity = req.body.quantity
    const comment = req.body.comment 
    const newParcel = {
      id:newId,
      comment,
      pickupLocation,
      destinationLocation,
      weight,
      quantity
    };
    if(newParcel){
      Parcels.push(newParcel);
      return res.status(200).json({
        message:'created a new parcel'
      })      
    }
    return res.status(400).json({
      message:'could not add new parcel'
    })
  }
}