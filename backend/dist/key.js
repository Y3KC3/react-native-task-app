"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.key = void 0;

var _dotenv = require("dotenv");

// Nos sirve para guardar informacion como variables de entorno
(0, _dotenv.config)();
var key = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'mobiletasks'
};
exports.key = key;