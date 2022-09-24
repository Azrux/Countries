const { Country, Activity } = require('../db.js');
const axios = require('axios');
const { Op } = require("sequelize");

async function getCountries (req, res) {
  const dbCountries = await Country.count()
  const { name } = req.query;

  try {
  if(!dbCountries) {
    const apiCountriesRes = await axios.get('https://restcountries.com/v3/all')
    const apiCountries = apiCountriesRes.data.map(c => {
        return {
          id: c.cca3,
          name: c.name.common,
          flag: c.flags[0],
          continents: c.continents.toString(),
          capital: c.capital ? c.capital.toString() : 'Unknown',
          subregion: c.subregion ? c.subregion : 'Unknown',
          area: Math.round(c.area),
          population: c.population
        }
      })
      await Country.bulkCreate(apiCountries);
    } else if(name) {
          const namedCountry = await Country.findOne({ where: { name: {[Op.iLike]: `%${name}%` }}});
          namedCountry ? res.send(namedCountry) : res.status(404).send("Country can't be found");
        } else {
          Country.findAll()
            .then((r) => res.send(r))
    } 
  } catch (error) {
    return res.send(error)
  }
}

async function getCountryById(req, res) {
  const { id } = req.params
  const upperId = id.toUpperCase();
  return  await Country.findOne({where: {id: upperId}, include: Activity })
    .then(Countries => res.send(Countries))
    .catch(error => res.send(error))
}


  
// function updateCountry(req, res, next) {
//   const { id } = req.params;
//   const country = req.body;
//   return Country.update(country, { where: { id }})
//     .then((updatedCountry) => {
//       res.send(updatedCountry)
//     })
//     .catch(error => next(error)) 
// }
  
// function deleteCountry(req, res, next) { //NO
//   const { id } = req.params;
//   return Country.destroy({ where: { id }})
//     .then(() => {
//       res.sendStatus(200)
//     })
//     .catch(error => next(error)) 
// }

module.exports = {
  getCountries,
  getCountryById,
  //getCountryByName,
  // updateCountry,
  // deleteCountry
}