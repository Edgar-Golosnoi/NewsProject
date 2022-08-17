"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Registration;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _audioPlay = _interopRequireDefault(require("audio-play"));

var _audioLoader = _interopRequireDefault(require("audio-loader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Registration() {
  // const playHandler = async () => {
  //   const sound = await load('/sound/whoosh.mp3');
  //   play(sound);
  // };
  // const [input, setInput] = useState({ username: '', password: '', repeat: '' });
  // const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // const signUpHandler = async (event) => {
  //   event.preventDefault();
  //   const response = await fetch('/registration', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(Object.fromEntries(new FormData(event.target))),
  //   });
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
    // value={input.username}
    // onChange={changeHandler}
    type: "text",
    name: "username",
    className: "form-control",
    id: "exampleInputEmail1",
    "aria-describedby": "emailHelp",
    placeholder: "Your Name"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Password"), /*#__PURE__*/_react.default.createElement("input", {
    // value={input.password}
    // onChange={changeHandler}
    type: "password",
    name: "password",
    className: "form-control",
    id: "exampleInputPassword1",
    placeholder: "Your Password"
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn btn-danger"
  }, "Sign up!"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    class: "btn btn-outline-danger float-left"
  }, "\u2190Back to Auth"))));
}