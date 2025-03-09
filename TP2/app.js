const mongoose = require('mongoose');
const { type } = require('node:os');


mongoose.connect('mongodb+srv://Grupo-04:grupo04@cursadanodejs.ls9ii.mongodb.net/Node-js').then(()=> console.log('Conexión exitosa a MongoDB')).catch(error => console.error('Error al conectar a MongoDB', error));

const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: {type: String, require: true},
    nombreReal: {type: String, require: true},
    edad: {type: Number, min:0},
    planetaOrigen: {type: String, default: 'Desconocido'},
    debilidad: [String],
    poderes: [String],
    aliados: [String],
    enemigos:[String],
    createdAT: {type: Date, default: Date.now},
    creador: String
}, {collection: 'Grupo-04'});

const Superhero = mongoose.model('SuperHero'.superheroSchema);

async function insertSuperHero() {
    const hero = new Superhero({
        nombreSuperheroe: 'Spiderman',
        nombreReal: 'Peter Parker',
        edad: 25,
        planetaOrigen: 'Tierra',
        debilidad: 'Radioactiva',
        poder: ['Trepar paredes', 'Sentido arácnido', 'Super fuerza', 'Agilidad'],
        aliado: ['Ironman'],
        enemigo: ['Duende Verde'],
        creador: 'Enzo'
    });
    await hero.save();
    console.log('Superheroe insertado:', hero);
}

insertSuperHero();