const { Country, Activity } = require('../db.js');
const axios = require('axios');
const { Op } = require("sequelize");

async function getCountries (req, res) {

  const { name } = req.query;
  const dbCountries = await Country.count()

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
          namedCountry ? res.status(200).send(namedCountry) : res.status(404).send("Country can't be found");
        } else {
          Country.findAll()
            .then((r) => res.status(200).send(r))
    } 
  } catch (error) {
    return res.status(404).send(error)
  }
}

async function getCountryById(req, res) {
  const { id } = req.params
  const upperId = id.toUpperCase();
  const findCountry = await Country.findOne({where: {id: upperId}, include: Activity })
  findCountry ? res.status(200).send(findCountry) : res.status(404).send("Country can't be found");
}

module.exports = {
  getCountries,
  getCountryById,
}