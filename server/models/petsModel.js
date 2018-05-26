import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PetSchema = new Schema ({
    name: {type: String, require: true, minlength: 2, maxlength: 50},
    email: {type: String, require: true, minlength: 10, maxlength: 50},
    age: {type: Number, require: true, min: 0, max:20},
    breed: {type: String, require: true, minlength: 2, maxlength: 20},
    weight: Number,
    height: Number,
    registerDate: { type: Date, default: Date.now() }
});

export default mongoose.model('Pets', PetSchema);