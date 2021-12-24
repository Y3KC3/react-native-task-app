"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = void 0;
var options = {
  definition: {
    info: {
      title: "Tasks Api"
    }
  },
  apis: ['./src/routes/**/*.js'] //No se porque hay que ponerlo desde el src

};
exports.options = options;