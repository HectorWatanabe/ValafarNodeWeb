import { renderPage } from "../helpers/renderHelper.js";
import { users } from "../models/user.js";

export const showHome = (req, res) => {
    if (!req.session.username) return res.redirect('/login');
    renderPage(res, 'home', {
        user: users.find(item => item.username === req.session.username),
        csrfToken: req.csrfToken()
    });
};