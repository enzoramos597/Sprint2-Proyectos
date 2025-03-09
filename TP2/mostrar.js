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


const mostrar = async ()=>{
    const SuperHero = await Superhero.find()
    console.log(SuperHero);
}




async function updateSuperHero(id){
    const result = await Superhero.updateOne(
        { _id: id },
        { 
            $set: { edad: 25 }
        }
    );
    console.log('Resultado de la actualización:', result);
}

async function updateSuperHero(nombreSuperHeroe){
    const result = await Superhero.updateOne(
        { nombreSuperHeroe: nombreSuperHeroe },
        { 
            $set: { edad: 30}
        }
    );
    console.log('Resultado de la actualización:', result);
}


/*async function updateSuperHero(id){
    const result = await Superhero.updateOne(
        { _id: id },
        { 
            $set: { edad: 25 }
        }
    );
    console.log('Resultado de la actualización:', result);
}



const actualizar = async (id) => {
    const result = await Superhero.updateOne({_id:id},
        {
            $set:{
                edad: 26
            }
        }
    )
}*/



async function deleteSuperHero(id) {
    const result = await Superhero.deleteOne({ _id: id });
     console.log('Superhéroe eliminado:', result);    
}

async function findSuperHeroes(){
    const heroes = await Superhero.find({ planetaOrigen: 'Tierra'});
    console.log('Supeheroes encontrados:', heroes);
}
//insertSuperHero();
//mostrar();
//updateSuperHero('Spiderman')
//updateSuperHero('67ccd885f14f9381a8f4bbb5')
//actualizar('67ccd885f14f9381a8f4bbb5')
//deleteSuperHero('67ccd885f14f9381a8f4bbb5')
//findSuperHeroes();