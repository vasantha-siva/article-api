const _ = require('lodash');
const mongoose = require('mongoose');
const validate = require('validator');

const constant = require('../utils/constant');
const Schema = mongoose.Schema;

// Create Schema objects and set validations
const userSchema = new Schema({
    username: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});



module.exports = mongoose.model(constant.MODEL_NAME.USER, userSchema); //Compiling schema to model