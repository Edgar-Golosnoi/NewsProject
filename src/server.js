import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import indexRouter from './routes/indexRouter';

const PORT = process.env.SERVER_PORT || 3002;
const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log('server start on port ', PORT);
});
