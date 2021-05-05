"use strict";

const fs = require("fs");

class UserStorage {

    static getUsers(...fields) {
        //const users = this.#users;
        
        const newUsers = fields.reduce((newUser, field) => {
            if(users.hasOwnProperty(field)) {
                newUser[field] = users[field];
            }
            return newUser;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        fs.readFile("./src/databases/users.json"), (err, data) => {
            if (err) throw err;

            const users = JSON.parse(data);

            const idx = users.id.indexOf(id);
            const userKeys = Object.keys(users);
            const userInfo = userKeys.reduce((newUser, info) => {
                newUser[info] = users[info][idx];
                return newUser;
            }, {});
            console.log(userInfo);
            return userInfo;
        }
    }

    static save(userInfo) {
        //const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success: true };
    }
}

module.exports = UserStorage;