"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _AuthPage = _interopRequireDefault(require("./Auth/AuthPage"));

var _Registration = _interopRequireDefault(require("./Auth/Registration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_AuthPage.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/registration",
    element: /*#__PURE__*/_react.default.createElement(_Registration.default, null)
  }));
}

/*#__PURE__*/
_react.default.createElement(_reactRouterDom.Route, {
  path: "/",
  element: /*#__PURE__*/_react.default.createElement("h1", null, "hello")
});