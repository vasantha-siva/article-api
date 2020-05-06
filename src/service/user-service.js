const _ = require('lodash');
const userDAO = require('./../dao/user-dao');
const constant = require('../utils/constant');

const UserService = {
    // create: (userDetail) => {
    //     return new Promise((resolve, reject) => {
    //         userDAO.checkExist(userDetail.username).then((data) => {
    //             if (data) {
    //                 reject({ status: constant.HTML_STATUS_CODE.INVALID_DATA, message: constant.MESSAGE.USER.USER_ALREADY_REGISTERED });
    //             } else {
    //                 console.log("servicehi");
    //                 userDAO.create(userDetail).then((result) => {
    //                     resolve({ message: constant.MESSAGE.USER.CREATED });
    //                 }).catch((error) => {
    //                     reject({ status: constant.HTML_STATUS_CODE.INTERNAL_ERROR, message: constant.MESSAGE.COMMON.INTERNAL_ERROR });
    //                 });
    //             }
    //         });
    //     });
    // },

    create: (userDetail, user) => {
        return new Promise((resolve, reject) => {
            userDAO.checkExist(userDetail.username).then((data) => {
                if (data) {
                    reject({ status: constant.HTML_STATUS_CODE.INVALID_DATA, message: constant.MESSAGE.USER.USER_ALREADY_REGISTERED });
                } else {
                    userDAO.create(userDetail).then((result) => {
                        // delete result.password;
                        resolve({ message: constant.MESSAGE.USER.CREATED });
                    }).catch((error) => {
                        reject({ status: constant.HTML_STATUS_CODE.INTERNAL_ERROR, message: constant.MESSAGE.COMMON.INTERNAL_ERROR });
                    });
                }
            });
        });
    },

}


module.exports = UserService;