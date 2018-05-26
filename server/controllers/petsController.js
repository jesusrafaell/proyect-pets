import Pets from '../models/petsModel';

function findAll (req, res) {
    Pets.find(null, (err, pets) => {
        if (err) {
            res.status(500).json({
                message: 'Error has occurred',
                error: err
            });
        } else {
            res.json(pets)
        }
    });
};

function findForBeed (req, res) {
    Pets.find({ breed: req.params.breed }, (err, pets) => {
        if (err) {
            res.status(500).json({
                message: 'Error has occurred',
                error: err
            });
        } else {
            res.json(pets)
        }
    });
};

function save (req, res) {
    Pets.create(req.body, (err, pet) => {
        if (err) {
            res.status(500).json({
                message: 'Error has occurred',
                error: err
            });
        } else {
            res.json(pet)
        }
    });
};

function update (req, res) {
    Pets.findByIdAndUpdate(req.params.id, req.body, (err, pet) => {
        if (err) {
            res.status(500).json({
                message: 'Error has occurred',
                error: err
            });
        } else {
            res.json(pet)
        }
    });
};

function deleteOne (req, res) {
    Pets.findByIdAndRemove(req.params.id, null, (err, pet) => {
        if (err) {
            res.status(500).json({
                message: 'Error has occurred',
                error: err
            });
        } else {
            res.json(pet)
        }
    });
};

export default {
    listPets: findAll,
    listPetsForBeed: findForBeed,
    addPet: save,
    updatePet: update,
    delete: deleteOne
};
