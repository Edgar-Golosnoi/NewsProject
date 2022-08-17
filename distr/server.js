"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _indexRouter = _interopRequireDefault(require("./routes/indexRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import session from 'express-session';
// import store from 'session-file-store';
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = (0, _express.default)();
app.use(_express.default.static('public'));
app.use((0, _morgan.default)('dev'));
app.use(_express.default.urlencoded({
  extended: true
}));
app.use(_express.default.json());
app.use('/', _indexRouter.default);
app.listen(PORT, () => {
  console.log('server start on port ', PORT);
});