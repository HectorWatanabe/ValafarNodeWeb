import { Router } from 'express';
import csurf from 'csurf';
import { showHome } from '../controllers/homeController.js';
import { ensureAuthenticated } from '../middlewares/authMiddleware.js';

const homeRoutes = Router();
const csrfProtection = csurf({ cookie: true });

homeRoutes.get('/home', ensureAuthenticated, csrfProtection, showHome);

export default homeRoutes;