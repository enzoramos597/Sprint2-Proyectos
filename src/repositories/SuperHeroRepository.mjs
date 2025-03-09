import superHero from '../models/SuperHero.mjs';
//import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository{
    async obtenerPorId(id){
        return await superHero.findById(id);
    }

    async obtenerTodos(){
        return await superHero.find({});
    }

    async obtenerMayoresDe30() {
        return await superHero.find({ edad: { $gt: 30 } });
    }

    /*async obtenerMenoresDe30() {
        return await SuperHero.find({ edad: { $lt: 30 } });
    }*/

    async buscarPorAtributo(atributo, valor) {
        return await superHero.find({ [atributo]: valor });
    }
}

export default new SuperHeroRepository();