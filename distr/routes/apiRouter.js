"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _models = require("../db/models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.post('/registration', async (req, res) => {
  const {
    email,
    password
  } = req.body; //   console.log(email, password);

  const hashPassword = await _bcrypt.default.hash(password, 5);

  try {
    const user = await _models.User.findOne({
      where: {
        email
      }
    }); // console.log(user);

    if (!user) {
      const newUser = await _models.User.create({
        email,
        password: hashPassword
      });
      req.session.user = {
        email: newUser.email
      };
      return res.json({
        email: newUser.email
      });
    }

    res.status(400).json({
      message: 'this email already exists'
    });
  } catch (err) {
    console.error(err);
  }
});
router.post('/login', async (req, res) => {
  const {
    email,
    password
  } = req.body;
  console.log(email, password);

  try {
    const user = await _models.User.findOne({
      where: {
        email
      }
    });
    console.log(user);

    if (user) {
      const checkPass = await _bcrypt.default.compare(password, user.password);

      if (checkPass) {
        req.session.user = {
          email: user.email
        };
        return res.json({
          email: user.email
        });
      }
    }

    res.status(400).json({
      message: 'email or passwored incorrected'
    });
  } catch (err) {
    console.error(err);
  }
});
router.get('/logout', async (req, res) => {
  res.clearCookie('user_sid'); // Удалить куку

  req.session.destroy(); // Завершить сессию

  res.sendStatus(200);
});
var _default = router;
exports.default = _default;