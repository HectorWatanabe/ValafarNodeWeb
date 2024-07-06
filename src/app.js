import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { APP_SESSION_CONFIG } from './config/dotenvConfig.js';
import path from 'path';
import session from 'express-session';
import authRoutes from './routes/authRoutes.js';
import homeRoutes from './routes/homeRoutes.js';

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src/views'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(session(APP_SESSION_CONFIG));

app.use(express.static(path.join(path.resolve(), 'src/public')));

app.use('/', homeRoutes);
app.use('/', authRoutes);
app.get('/', (req, res) => res.redirect('/login'));

export default app;