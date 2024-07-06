import { Router } from 'express';
import csurf from 'csurf';
import { login, logout, showLogin } from '../controllers/authController.js';
import { ensureAuthenticated, pageLoginValidation } from '../middlewares/authMiddleware.js';

const authRoutes = Router();
const csrfProtection = csurf({ cookie: true });

authRoutes.get('/login', pageLoginValidation, csrfProtection, showLogin);
authRoutes.post('/login', csrfProtection, login);
authRoutes.post('/logout', ensureAuthenticated, csrfProtection, logout);

export default authRoutes;