import express from 'express';
import userController from './controllers';
import Auth from '../../middleware/auth';
import request from './request';

const router = express.Router();

router.use(Auth.checkAuth);

router.get('/', Auth.checkRole('admin'), userController.all);
router.get('/list-friend/:id', userController.allListFriendByUser);
router.get('/:id', userController.show);
router.post('/', request.createUser, userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;
