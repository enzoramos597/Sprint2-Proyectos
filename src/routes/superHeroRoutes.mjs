import express from 'express';
import {  obtenerSuperheroePorIdController, obtenerTodosLosSuperheroresController, buscarSuperheroesPorAtributoController, obtenerSuperheroresMayoresDe30Controller } from '../controllers/superheroesController.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroresController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/mayores-30', obtenerSuperheroresMayoresDe30Controller);

export default router;