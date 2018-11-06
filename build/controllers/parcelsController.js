'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parcels = require('../db/parcels');

var _parcels2 = _interopRequireDefault(_parcels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var parcelsController = function () {
  function parcelsController() {
    _classCallCheck(this, parcelsController);
  }

  _createClass(parcelsController, null, [{
    key: 'getParcels',
    value: function getParcels(req, res) {
      return res.json({
        'message': 'List of all parcels',
        parcels: _parcels2.default
      });
    }
  }, {
    key: 'createParcel',
    value: function createParcel(req, res) {
      var newId = _parcels2.default[_parcels2.default.lenght - 1].id + 1;
      var pickupLocation = req.body.pickupLocation;
      var destinationLocation = req.body.destinationLocation;
      var weight = req.body.weight;
      var quantity = req.body.quantity;
      var comment = req.body.comment;
      var newParcel = {
        id: newId,
        comment: comment,
        pickupLocation: pickupLocation,
        destinationLocation: destinationLocation,
        weight: weight,
        quantity: quantity
      };
      if (newParcel) {
        _parcels2.default.push(newParcel);
        return res.status(200).json({
          message: 'created a new parcel'
        });
      }
      return res.status(400).json({
        message: 'could not add new parcel'
      });
    }
  }, {
    key: 'getOne',
    value: function getOne(req, res) {
      var id = req.params.id;
      var oneParcel = _parcels2.default.find(function (parcel) {
        return parcel.id === id;
      });
      if (parcel) {
        return res.json({
          message: 'parcel found',
          parcel: oneParcel
        });
      }
      return res.status(400).json({
        message: 'parcel not found'
      });
    }
  }, {
    key: 'updateOne',
    value: function updateOne(req, res) {
      var id = req.params.id;
      var updateParcel = _parcels2.default.find(function (parcel) {
        return parcel.id === id;
      });
      if (updateParcel) {
        var newParcel = {
          id: id, destinationLocation: destinationLocation, weight: weight, comment: comment,
          pickupLocation: req.body.pickupLocation
        };
        return res.json({
          message: 'parcel found',
          parcel: newParcel
        });
      }
      return res.status(400).json({
        message: 'parcel not found'
      });
    }
  }, {
    key: 'removeParcel',
    value: function removeParcel(req, res) {
      var id = req.params.id;
      var oneParcel = _parcels2.default.find(function (parcel) {
        return parcel.id == id; //returns true if the parcel is found with the id from params
      });
      if (oneParcel) {
        var newParcels = _parcels2.default.filter(function (parcel) {
          return parcel !== oneParcel; //returns an object without filtered parcel
        });
        res.status(200).json({
          message: 'parcel deleted',
          Parcels: newParcels
        });
      } else {
        return res.status(400).json({
          message: 'parcel do not exist'
        });
      }
    }
  }]);

  return parcelsController;
}();

exports.default = parcelsController;