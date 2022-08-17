import { Router } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../db/models';

const router = Router();

router.post('/registration', async (req, res) => {
  const { email, password } = req.body;
  //   console.log(email, password);
  const hashPassword = await bcrypt.hash(password, 5);
  try {
    const user = await User.findOne({ where: { email } });
    // console.log(user);
    if (!user) {
      const newUser = await User.create({ email, password: hashPassword });
      req.session.user = { email: newUser.email };
      return res.json({ email: newUser.email });
    }
    res.status(400).json({ message: 'this email already exists' });
  } catch (err) {
    console.error(err);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const user = await User.findOne({ where: { email } });
    console.log(user);
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.user = { email: user.email };

        return res.json({ email: user.email });
      }
    }
    res.status(400).json({ message: 'email or passwored incorrected' });
  } catch (err) {
    console.error(err);
  }
});
router.get('/logout', async (req, res) => {
  res.clearCookie('user_sid'); // Удалить куку
  req.session.destroy(); // Завершить сессию
  res.sendStatus(200);
});

export default router;
