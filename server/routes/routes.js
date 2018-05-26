import express from 'express';
import petsController from '../controllers/petsController';

const router = express.Router();

router.get('/', petsController.listPets);

router.get('/pets/:breed', petsController.listPetsForBeed);

router.post('/pets', petsController.addPet);

router.put('/pets/:id', petsController.updatePet);

router.delete('/pets/:id', petsController.delete);

export default router;