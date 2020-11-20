import express from 'express';
import messageController from './controllers';
import Auth from './../../middleware/auth';

const router = express.Router();

router.use(Auth.checkAuth);
router.get('/:roomId', messageController.all);
router.post('/', messageController.create);
router.delete('/:id', messageController.delete);

export default router;
