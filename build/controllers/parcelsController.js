'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parcels = require('../db/parcels');

var _parcels2 = _interopRequireDefault(_parcels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint linebreak-style: ["error", "windows"] */

var parcelsController = function () {
  function parcelsController() {
    _classCallCheck(this, parcelsController);
  }

  _createClass(parcelsController, null, [{
    key: 'getParcels',
    value: function getParcels(req, res) {
      return res.json({
        message: 'List of all parcels',
        parcels: _parcels2.default
      });
    }

    // create a parcel

  }, {
    key: 'createParcel',
    value: function createParcel(req, res) {
      var newId = _parcels2.default[_parcels2.default.length - 1].id + 1;
      var _req$body = req.body,
          pickupLocation = _req$body.pickupLocation,
          destinationLocation = _req$body.destinationLocation,
          weight = _req$body.weight,
          comment = _req$body.comment,
          quantity = _req$body.quantity;

      var newParcel = {
        id: newId,
        cancel: false,
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
        message: 'invalid parcel'
      });
    }

    // get one parcel

  }, {
    key: 'getOne',
    value: function getOne(req, res) {
      var id = req.params.id;

      var oneParcel = _parcels2.default.find(function (parcel) {
        return parcel.id == id;
      });
      if (oneParcel) {
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
    key: 'cancelParcel',
    value: function cancelParcel(req, res) {
      var Id = req.params.id;
      var cancelParcel = _parcels2.default.find(function (parcel) {
        return parcel.id == Id;
      });
      if (cancelParcel) {
        var toCancel = req.body.cancelled;
        res.status(200).json({
          message: 'order cancelled'
        });
        return cancelParcel.cancel = toCancel;
      }
      return res.status(400).json({
        message: 'parcel cannot be cancelled'
      });
    }

    // remove one parcel

  }, {
    key: 'removeParcel',
    value: function removeParcel(req, res) {
      var id = req.params.id;

      var oneParcel = _parcels2.default.find(function (parcel) {
        return parcel.id == id;
      } // returns true if the parcel is found with the id from params
      );
      if (oneParcel) {
        var newParcels = _parcels2.default.filter(function (parcel) {
          return parcel !== oneParcel;
        } // returns an object without filtered parcel
        );
        return res.status(200).json({
          message: 'parcel deleted',
          Parcels: newParcels
        });
      }
      return res.status(400).json({
        message: 'parcel do not exist'
      });
    }
  }]);

  return parcelsController;
}();

exports.default = parcelsController;