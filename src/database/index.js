'use strict';
const _ = require('lodash');
const db = require('./db.js');


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
    return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
    const dataAccessMethod = () => {
        const userAges = {};

        for (let indx in db.usersById) {
            const user = db.usersById[indx];
            let name = user.username;
            let age = user.age;

            if (db.itemsOfUserByUsername[user].includes(item)) {
                if (age in userAges) userAges[age] += 1;
                userAges[age] = 1;
            }
        }
        return userAges;
    }
    return mockDBCall(dataAccessMethod);
}

module.exports = {
    getUsers,
    getListOfAgesOfUsersWith
};
