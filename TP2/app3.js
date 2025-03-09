const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Grupo-04:grupo04@cursadanodejs.ls9ii.mongodb.net/Node-js')
    .then(() => console.log('✅ Conexión exitosa a MongoDB'))
    .catch(error => console.error('❌ Error al conectar a MongoDB', error));

const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: [String],
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAT: { type: Date, default: Date.now },
    creador: String
}, { collection: 'Grupo-04' });

const Superhero = mongoose.model('SuperHero', superheroSchema);

async function insertSuperHero() {
    const hero = new Superhero({
        nombreSuperHeroe: 'Spiderman',
        nombreReal: 'Peter Parker',
        edad: 25,
        planetaOrigen: 'Tierra',
        debilidad: ['Radioactiva'],
        poderes: ['Trepar paredes', 'Sentido arácnido', 'Super fuerza', 'Agilidad'],
        aliados: ['Ironman'],
        enemigos: ['Duende Verde'],
        creador: 'Enzo'
    });

    await hero.save();
    console.log('✅ Superhéroe insertado:', hero);
}

insertSuperHero();

/*async function updateSuperHero(nombreSuperHeroe) {
    try {
        const result = await Superhero.updateOne(
            { nombreSuperHeroe: nombreSuperHeroe },
            { $set: { edad: 28 } }
            
        );

        if (result.modifiedCount > 0) {
            console.log(`✅ Superhéroe "${nombreSuperHeroe}" actualizado correctamente.`);
        } else {
            console.log(`⚠️ No se encontró el superhéroe "${nombreSuperHeroe}" o ya tiene la edad especificada.`);
        }
    } catch (error) {
        console.error('❌ Error al actualizar:', error);
    }
    //console.log('✅ Superhéroe insertado:', hero);
}

updateSuperHero('Spiderman');*/


/*async function deleteSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.deleteOne({ nombreSuperHeroe: nombreSuperHeroe });
     console.log('Superhéroe eliminado:', result);
    deleteSuperHero('Spiderman');
}

deleteSuperHero('Spiderman');*/

async function deleteSuperHero(nombreSuperHeroe) {
    try {
        const result = await Superhero.deleteOne({ nombreSuperHeroe: nombreSuperHeroe });

        if (result.deletedCount > 0) {
            console.log(`✅ Superhéroe "${nombreSuperHeroe}" eliminado correctamente.`);
        } else {
            console.log(`⚠️ No se encontró el superhéroe "${nombreSuperHeroe}".`);
        }
    } catch (error) {
        console.error('❌ Error al eliminar el superhéroe:', error);
    }
}

// Llamar a la función para eliminar a "Spiderman"
deleteSuperHero('Spiderman');