export const ensureAuthenticated = (req, res, next) => {
    if (req.session.username) return next();
    res.redirect('/login');
};

export const pageLoginValidation = (req, res, next) => {
    if (req.session.username) return res.redirect('/home');
    next();
};