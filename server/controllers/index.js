// Require express router.
import route from 'express';
const router = route.Router();

import apiRoutes from './api';
import homeRoutes from './homeRoutes';

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

export default router;