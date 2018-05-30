import express from 'express';
import petsController from '../controllers/petsController';

const router = express.Router();

router.get('/', petsController.findAll);

router.get('/pets/:id', petsController.findOne);

router.post('/pets', petsController.save);

router.put('/pets/:id', petsController.update);

router.delete('/pets/:id', petsController.deleteOne);

export default router;