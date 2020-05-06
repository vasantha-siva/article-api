const _ = require('lodash');
const mongoose = require('mongoose');

const constant = require('../utils/constant');
const Schema = mongoose.Schema;

// Create Schema objects and set validations
const articleSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    body: {
        type: String,
        trim: true,
        required: true
    },
    author: {
        type: String,
        trim: true,
        required: true
    },
    id: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});




module.exports = mongoose.model(constant.MODEL_NAME.ARTICLE, articleSchema); //Compiling schema to model