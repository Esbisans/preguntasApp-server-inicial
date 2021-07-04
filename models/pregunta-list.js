const Preguntas = require("./preguntas")


const pregunta1 = new Preguntas(1,"soy una pregunta1","soy una respuesta incorrecta1","soy una respuesta incorrecta1","soy una respuesta incorrecta1","soy una respuesta correcta1")
const pregunta2 = new Preguntas(2,"soy una pregunta","soy una respuesta incorrecta","soy una respuesta incorrecta","soy una respuesta incorrecta","soy una respuesta correcta")
let preguntas = [pregunta1,pregunta2]

class PreguntaList{

    constructor() {

    }

    buscarPorId(id)
    {
        const pregunta = preguntas.find(elemento => elemento.id == id);
        //regresa un objeto, si pregunta es el objeto
        console.log(pregunta)
    }



}
module.exports = PreguntaList;