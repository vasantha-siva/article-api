const _ = require('lodash');
const articleDAO = require('../dao/article-dao');
const constant = require('../utils/constant');
const ArticleService = {
    create: async(articledetail, user) => {
        return new Promise((resolve, reject) => {
            articledetail['author'] = user.username;

            articleDAO.create(articledetail).then((article) => {
                resolve(article);
            }).catch((error) => {
                reject({ status: constant.HTML_STATUS_CODE.INTERNAL_ERROR, message: constant.MESSAGE.COMMON.INTERNAL_ERROR });

            });
        })
    },
    getAll: async(pageId, user) => {
        return new Promise((resolve, reject) => {
            articleDAO.getAll(pageId).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject({ status: constant.HTML_STATUS_CODE.INTERNAL_ERROR, message: constant.MESSAGE.COMMON.INTERNAL_ERROR });

            })
        })
    },

    update: (artId, articledetail, user) => {
        return new Promise((resolve, reject) => {
            articleDAO.update(artId, articledetail).then(data => {
                resolve(data);
            }).catch((error) => {
                reject({ status: constant.HTML_STATUS_CODE.INTERNAL_ERROR, message: constant.MESSAGE.COMMON.INTERNAL_ERROR });

            });
        })
    },
    delete: (artId, user) => {
        return new Promise((resolve, reject) => {
            articleDAO.delete(artId).then(data => {
                resolve(data);
            }).catch((error) => {
                reject({ status: constant.HTML_STATUS_CODE.INTERNAL_ERROR, message: constant.MESSAGE.COMMON.INTERNAL_ERROR });

            });
        })
    }

}


module.exports = ArticleService;