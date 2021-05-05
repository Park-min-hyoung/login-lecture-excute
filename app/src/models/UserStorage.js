"use strict";

const fs = require("fs").promise;

class UserStorage {
    static #getUserInfo(data,id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

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
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch((err) => console.err);
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