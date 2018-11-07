'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _parcelsController = require('../controllers/parcelsController');

var _parcelsController2 = _interopRequireDefault(_parcelsController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// endpoints
router.get('/api/v1/parcels', _parcelsController2.default.getParcels);
router.get('/api/v1/parcels/:id', _parcelsController2.default.getOne);
router.post('/api/v1/parcels', _parcelsController2.default.createParcel);
router.delete('/api/v1/parcels/:id', _parcelsController2.default.removeParcel);

exports.default = router;