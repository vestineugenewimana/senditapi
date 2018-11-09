'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _parcelsController = require('../controllers/parcelsController');

var _parcelsController2 = _interopRequireDefault(_parcelsController);

var _userController = require('../controllers/userController');

var _userController2 = _interopRequireDefault(_userController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// parcels endpoints
router.get('/api/v1/parcels', _parcelsController2.default.getParcels);
router.get('/api/v1/parcels/:id', _parcelsController2.default.getOne);
router.post('/api/v1/parcels', _parcelsController2.default.createParcel);
router.put('/api/v1/parcels/:id/cancel', _parcelsController2.default.cancelParcel);
router.delete('/api/v1/parcels/:id', _parcelsController2.default.removeParcel);
// users endpoints

router.get('/api/v1/users', _userController2.default.getUsers);
router.post('/api/v1/users/register', _userController2.default.addUser);
router.post('/api/v1/users/login', _userController2.default.userLogin);
router.get('/api/v1/users/:userId/parcels', _userController2.default.userParcel);
exports.default = router;