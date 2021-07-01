const UserList = require("./user-list")

class Sockets {

    constructor( io ) {
        this.io = io;
        this.userList = new UserList();
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            console.log('Cliente conectado');

            socket.emit('current-users', this.userList.getUser());
            socket.on('add-user', ({name}) => {
                this.userList.addUser(name)
                this.io.emit('current-users', this.userList.getUser());
            })

        });
    }


}


module.exports = Sockets;