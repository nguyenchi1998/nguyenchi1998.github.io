import express from 'express';
import roomController from './controllers';
import Auth from '../../middleware/auth';
import request from './request';

const router = express.Router();

router.use(Auth.checkAuth);

router.get('/:userId', roomController.all);
router.get('/detail/:roomId', roomController.show);
router.post('/', request, roomController.create);

export default router;
