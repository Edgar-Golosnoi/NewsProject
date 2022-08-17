"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AuthPage;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _audioPlay = _interopRequireDefault(require("audio-play"));

var _audioLoader = _interopRequireDefault(require("audio-loader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AuthPage() {
  // const playHandler = async () => {
  //   const sound = await load('/sound/whoosh.mp3');
  //   play(sound);
  // };
  // const signInHandler = async (event) => {
  //   event.preventDefault();
  //   const response = await fetch('/auth', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(Object.fromEntries(new FormData(event.target))),
  //   });
  // if (response.ok) {
  //   setHeroesState((prev) => prev.filter((el) => el.id !== anyProp.id));
  // }
  // };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mx-auto mt-5",
    style: {
      width: '400px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '250px'
    }
  }), /*#__PURE__*/_react.default.createElement("form", {
    className: "container bg-secondary rounded-3 py-3 item",
    align: "center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Username"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "user",
    className: "form-control",
    id: "exampleInputEmail1",
    "aria-describedby": "emailHelp",
    placeholder: "Your Name"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Password"), /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    name: "password",
    className: "form-control",
    id: "exampleInputPassword1",
    placeholder: "Your Password"
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn btn-danger"
  }, "Sign in!"), /*#__PURE__*/_react.default.createElement("div", {
    className: "mx-auto mt-5"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Don't register yet?")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/registration",
    className: "btn btn-danger"
  }, "Registration")));
} // fetch na /auth