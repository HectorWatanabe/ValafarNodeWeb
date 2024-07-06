import 'dotenv/config';

export const APP_PORT = process.env.APP_PORT || 4000;

export const APP_SESSION_CONFIG = {
    secret: process.env.SESSION_SECRET || 'valafar_session_secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: process.env.SESSION_HTTPS || false
    }
};