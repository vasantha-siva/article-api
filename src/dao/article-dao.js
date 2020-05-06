const articleModel = require('../model/article-schema');
const utility = require('../utils/utilities');
const ArticleDAO = {
    create: (articleDetail) => {
        return new articleModel({
            title: articleDetail.title,
            id: `ART-${utility.getRandomString(3)}`,
            body: articleDetail.body,
            author: articleDetail.author,
        }).save();
    },
    getAll: async(pageId) => {
        pageId = pageId || 1;
        pageId = (parseInt(pageId) - 1) * 5;
        let count = await articleModel.find({}).count();
        let data = await articleModel.find({}).skip(pageId).limit(5);
        return { data, count };
    },
    update: (artId, articleDetail) => {
        return articleModel.updateOne({ id: artId }, { $set: articleDetail });

    },
    delete: (artId) => {
        return articleModel.deleteOne({ _id: artId });
    }
}
module.exports = ArticleDAO;