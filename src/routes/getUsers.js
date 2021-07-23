'use strict';
const mockDBCalls = require('../database/index.js');

const getUsersHandler = async (req, res, next) => {
    try {
        const data = await mockDBCalls.getUsers();
        return res.status(200).send(JSON.stringify(data));
    } catch (e) {
        return next(new Error("Can't get Users' Data"));
    }
};

module.exports = (app) => {
    app.get('/users', getUsersHandler);
};

