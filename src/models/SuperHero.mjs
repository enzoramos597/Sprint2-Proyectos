import mongoose from 'mongoose';

const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: {type: String, require: true},
    nombreReal: {type: String, require: true},
    edad: {type: Number, min:0},
    planetaOrigen: {type: String, default: 'Desconocido' },
    debilidad: {type: String},
    poderes: [String],
    aliados: [String],
    enemigos:[String],    
    creador: { type: String }
    //createdAT: {type: Date, default: Date.now}
});

const superHero = mongoose.model('Grupo-04', superheroSchema, 'Grupo-04');
export default superHero