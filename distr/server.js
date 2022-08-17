"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _sessionFileStore = _interopRequireDefault(require("session-file-store"));

var _indexRouter = _interopRequireDefault(require("./routes/indexRouter"));

var _apiRouter = _interopRequireDefault(require("./routes/apiRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = (0, _express.default)();
const FileStore = (0, _sessionFileStore.default)(_expressSession.default);
const sessionConfig = {
  name: 'user_sid',
  // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test',
  // Секретное слово для шифрования, может быть любым
  resave: false,
  // Пересохранять ли куку при каждом запросе
  saveUninitialized: false,
  // Создавать ли сессию без инициализации ключей в req.session
  store: new FileStore(),
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    // Срок истечения годности куки в миллисекундах
    httpOnly: true // Серверная установка и удаление куки, по умолчанию true

  }
};
app.use(_express.default.static('public'));
app.use((0, _morgan.default)('dev'));
app.use(_express.default.urlencoded({
  extended: true
}));
app.use(_express.default.json());
app.use((0, _expressSession.default)(sessionConfig));
app.use('/', _indexRouter.default);
app.use('/auth', _apiRouter.default);
app.listen(PORT, () => {
  console.log('server start on port ', PORT);
});