import Pets from '../models/petsModel';

export default {
    findAll: (req, res) => {
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
    },

    findOne: (req, res) => {
        Pets.findById(req.params.id, (err, pet) => {
            if (err) {
                res.status(500).json({
                    message: 'Error has occurred',
                    error: err
                });
            } else {
                res.json(pet)
            }
        });
    },

    save: (req, res) => {
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
    },

    update: (req, res) => {
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
    },

    deleteOne: (req, res) => {
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
    }

}