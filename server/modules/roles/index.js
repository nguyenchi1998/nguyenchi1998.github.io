import express from 'express';
import roleController from './controllers';
import Auth from './../../middleware/auth';
import request from './request';

const router = express.Router();

router.use(Auth.checkAuth);

router.get('/', Auth.checkRole('admin'), roleController.all);
router.get('/:id', roleController.show);
router.post('/', request, roleController.create);
router.delete('/:id', roleController.delete);

export default router;
