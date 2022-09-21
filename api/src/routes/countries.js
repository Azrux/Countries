const { Router } = require('express');
const { getCountries, getCountryById } = require('../controllers/countries');

//Trae todos los países desde la api
//Guardarlos en la base de datos
//Debe usar los datos de la DB
//Debe traer el detalle de un país en particular
//Debe traer solamente: id, name, flag, continents, capital, subregion, area, population, activities
//Debe incluír los datos de las activities: name, difficulty, duration, season

const router = Router();

router.get('/', getCountries);
router.get('/:id', getCountryById);
// router.put('/:id', updateCountry);
// router.delete('/:id', deleteCountry);

module.exports = router;