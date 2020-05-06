const userModel = require('../model/users-schema');
const utility = require('../utils/utilities');
const UserDAO = {
    // create: (userDetail) => {
    //     console.log("dfghfghhi", userDetail);
    //     return new userModel({
    //         username: "abc", // userDetail.username,
    //         email: "abc@g.c",
    //         address: "ban",
    //         password: "abc"
    //             // id: `USR-${utility.getRandomString(3)}`
    //     }).save();
    // },

    create: (userDetail) => {
        return new userModel({
            username: userDetail.username,
            email: userDetail.email,
            address: userDetail.address,
            password: userDetail.password,
            id: `USR-${utility.getRandomString(3)}`
        }).save();
    },

    checkExist: (username) => {
        return userModel.findOne({ username: username });
    },
    comparePassword: (reqPassword, UserPassword) => {
        return reqPassword == UserPassword;
    },
    getById: (data) => {
        return userModel.findOne({ _id: data });
    }
}

module.exports = UserDAO;