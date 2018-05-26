import mongoose from 'mongoose';

const URL = 'mongodb://localhost/api-pets';
mongoose.connect(URL, null, (err) => {
    if (err) console.log('Mongoose connection error');
    console.log(`Mongoose in ${URL}`);
})

