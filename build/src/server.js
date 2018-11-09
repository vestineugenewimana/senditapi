'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _routes = require('../routes/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*  eslint linebreak-style:['error', 'windows'] */
var app = (0, _express2.default)(); //  initialize express app
/* eslint linebreak-style: ["error", "windows"] */
app.use(_express2.default.json());
app.use((0, _morgan2.default)('dev')); // for logging the user data in color

app.use(_routes2.default);

app.listen(process.env.PORT || 5000);

exports.default = app;