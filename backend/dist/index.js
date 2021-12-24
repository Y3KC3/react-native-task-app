"use strict";

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./server/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Initialization
var app = (0, _config["default"])((0, _express["default"])()); //Server

app.listen(app.get('port'), function () {
  console.log('Server On Port: ', app.get('port'));
});