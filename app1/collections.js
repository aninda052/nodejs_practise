const mongoose = require('mongoose');

// const userSchema = ;

const userCollection = new mongoose.model(
    'user',
    mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },

        password: String,

        gender: {
            type: String,
            enum: ['m', 'f'],
        },

        status: {
            type: String,
            enum: ['block', 'admin', 'super_admin', 'user'],
            default: 'user',
        },

        registration_date: {
            type: Date,
            default: Date.now,
        },
    })
);
userCollection.createIndexes();
module.exports = userCollection;
