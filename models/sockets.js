const UserList = require("./user-list")
const Numeros = require('./generNumeros');
const Preguntas = require('./preguntas-list')

let numeros = new Numeros();
let arrayIds = numeros.generar()
let pos = 0;

class Sockets {

    constructor( io ) {
        this.io = io;
        this.userList = new UserList();
        this.socketEvents();
    }



    enviarPregunta()
    {
        let preguntas = new Preguntas();
        let pregunta = preguntas.buscarPorId(arrayIds[pos])
        pregunta
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

        this.io.on('message', (socket) => {
            socket.emit('current-question', this.enviarPregunta());
            pos += 1;
        })


    }



}


module.exports = Sockets;