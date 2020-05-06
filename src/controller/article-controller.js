const express = require('express');
const isAuthenticate = require('../service/token-service');
const articleService = require('../service/article-service');
const route = express.Router();
const constant = require('../utils/constant');
const response = require('../utils/custom-response');


// Create Article
route.post('/', isAuthenticate, (req, res) => {
    articleService.create(req.body, req.user).then((result) => {
        res.status(constant.HTML_STATUS_CODE.SUCCESS).json(response.success(constant.HTML_STATUS_CODE.SUCCESS, { message: result }));
    }).catch((error) => {
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(response.error(constant.HTML_STATUS_CODE.INTERNAL_ERROR, { message: error.message }));
    })
});

route.get('/', isAuthenticate, (req, res) => {
    let pageId = req.query.pageId;
    articleService.getAll(pageId, req.user).then((result) => {
        res.status(constant.HTML_STATUS_CODE.SUCCESS).json(response.success(constant.HTML_STATUS_CODE.SUCCESS, result));
    }).catch((error) => {
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(response.error(constant.STATUS.FAIL, error.message));
    })
});

route.put('/:artd', isAuthenticate, (req, res) => {
    articleService.update(req.params.artd, req.body, req.user).then((result) => {
        res.status(constant.HTML_STATUS_CODE.SUCCESS).json(response.success(constant.HTML_STATUS_CODE.SUCCESS, { message: result }));
    }).catch((error) => {
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(response.error(constant.STATUS.FAIL, error.message));
    })
});
route.delete('/:artId', isAuthenticate, (req, res) => {
    articleService.delete(req.params.artId, req.user).then((result) => {
        res.status(constant.HTML_STATUS_CODE.SUCCESS).json(response.success(constant.HTML_STATUS_CODE.SUCCESS, { message: result }));
    }).catch((error) => {
        res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(response.error(constant.STATUS.FAIL, error.message));
    })
});




module.exports = route;