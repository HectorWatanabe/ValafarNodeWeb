import bcrypt from 'bcryptjs';
import { users } from '../models/user.js';
import { renderPage } from '../helpers/renderHelper.js';

export const showLogin = (req, res) => {
    renderPage(res, 'login', {
        error: null,
        csrfToken: req.csrfToken()
    });
};

export const login = async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (!user) return renderPage(res, 'login', {
        error: 'Error con las credenciales.',
        csrfToken: req.csrfToken()
    });

    const match = await bcrypt.compare(password, user.password);

    if (!match) return renderPage(res, 'login', {
        error: 'Error con las credenciales.',
        csrfToken: req.csrfToken()
    });

    req.session.username = user.username;
    res.redirect('/home');
};

export const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.redirect('/home');
        res.clearCookie('connect.sid');
        res.redirect('/login');
    });
};