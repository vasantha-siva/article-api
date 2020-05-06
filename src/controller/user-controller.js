const express = require('express');
const constant = require('./../utils/constant');
const userService = require('./../service/user-service');
const isAuthenticate = require('./../service/token-service');
const response = require('../utils/custom-response');
const route = express.Router();


// Registration User
// route.post('/', (req, res) => {
//     console.log("hi");
//     userService.create(req.body).then((result) => {
//         res.status(constant.HTML_STATUS_CODE.CREATED).json(response.success(constant.HTML_STATUS_CODE.CREATED, result));
//     }).catch((error) => {
//         res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(response.error(constant.STATUS.FAIL, { message: error.message }));
//     });
// });

route.post('/', (req, res) => {
    userService.create(req.body, req.user).then((result) => {
        res.status(constant.HTML_STATUS_CODE.CREATED).json(response.success(constant.HTML_STATUS_CODE.CREATED, result));
    }).catch((error) => {
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(response.error(constant.STATUS.FAIL, { message: error.message }));
    });
});



module.exports = route;