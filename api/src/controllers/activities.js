const { Activity, Country } = require('../db.js');
const { Op } = require("sequelize");

async function addActivity(req, res) {

  const { name, difficulty, duration, season, country } = req.body;
  const dbActivity = await Activity.findOne({ where: { name: {[Op.iLike]: `%${name}%` }}});

  try {
    if(!dbActivity) {
        const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
        country
      })
      await newActivity.addCountry(country.slice(0, 3).toUpperCase())
        //console.log(newActivity);
      return res.send(`Activity ${newActivity.name} added at ${country}`);
    } else {
      await dbActivity.addCountry(country.slice(0, 3).toUpperCase())
      return res.send(`Activity ${dbActivity.name} added at ${country}`);
    }
  } catch(e) {
    return res.send(e);
  }
}

//Edita la activity si ya existe y la agrega a countries
// function updateActivity(req, res, next) { 
//   const { id } = req.params;
//   const country = req.body;
//   return Country.update(country, { where: { id }})
//     .then((updatedCountry) => {
//       res.send(updatedCountry)
//     })
//     .catch(error => next(error)) 
// }

//Elimina una activity
// function deleteCountry(req, res, next) { //NO
//   const { id } = req.params;
//   return Country.destroy({ where: { id }})
//     .then(() => {
//       res.sendStatus(200)
//     })
//     .catch(error => next(error)) 
// }

module.exports = {addActivity};