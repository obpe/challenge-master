'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (req, res, next) => {
    try {
        const itemToLookup = req.query.item;
        const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);
        return res.status(200).send(JSON.stringify(data));
    } catch (e) {
        return next(new Error("Somethin Wrong in Backend"));
    }
};

module.exports = (app) => {
    app.get('/users/age', getListOfAgesOfUsersWithHandler);
};
