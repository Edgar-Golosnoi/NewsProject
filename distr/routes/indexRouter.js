"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _server = require("react-dom/server");

var _react = _interopRequireDefault(require("react"));

var _Layout = _interopRequireDefault(require("../components/Layout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Student } from '../../db/models';
const route = _express.default.Router();

route.get('/', async (req, res) => {
  const initState = {
    path: req.originalUrl
  };
  const html = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_Layout.default, {
    initState: initState
  }));
  res.write('<!DOCTYPE html>');
  res.end(html);
});
var _default = route;
exports.default = _default;