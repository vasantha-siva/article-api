const constant = {
    MONGO_URI: 'mongodb://localhost:27017/article',
    PORT: 4000,
    HTML_STATUS_CODE: { SUCCESS: 200, CREATED: 201, UNAUTHORIZED: 401, INVALID_DATA: 406, CONFLICT: 409, INTERNAL_ERROR: 500, BAD_REQUEST: 400, NOT_FOUND: 404, INVALID_CREDENTIAL: 405 },

    MODEL_NAME: { ARTICLE: 'articles', USER: 'users' },
    STATUS: {
        SUCCESS: 'success',
        FAIL: 'fail',
    },
    MESSAGE: {
        USER: {
            USER_ALREADY_REGISTERED: 'It seems like user is already registered with the same UserName.',
            MESSAGE_UNAUTHORIZED_USER: 'Unauthorized User',
            MESSAGE_INVALID_CREDENTIALS: 'Invalid Credentials.',
            NOT_REGISTERED: 'User not registered with the given UserName.',
            LOGIN_SECCESS: 'User loggedin successfully',
            CREATED: 'New user created. Please login to continue..'
        },
        ARTICLE: {
            CREATED: 'New article created',
            UPDATED: 'Article updated successfully',
            DELETED: 'Article deleted successfully'
        },
        COMMON: {
            INTERNAL_ERROR: 'Sorry! Something went wrong.',
            MESSAGE_INVALID_DATA: 'Invalid data.',
            MESSAGE_BAD_REQUEST: 'Bad request/Unknown requested fields.',
            MESSAGE_DATA_NOT_FOUND: 'Data not found.',
            MESSAGE_UNAUTHORIZED_ACCESS: 'You are not authorized for this action.',
            DATA_FOUND: 'Data found',

        }
    },
    JWT: {
        SECRET: 'article@assign',
        TOKEN_TIMEOUT: '1h',

    }

}
module.exports = constant;