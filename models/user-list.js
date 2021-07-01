const User = require("./user")

class UserList{
    constructor() {
        this.users = [];
    }
    addUser(name){
        const user = new User(name);
        this.users.push(user);
        return this.users;
    }

    removeUser(name){
        this.users = this.users.filter(user => user.name !== name);
    }

    getUser(){
        return this.users;
    }
}

module.exports = UserList