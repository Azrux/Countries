const { Activity, Country } = require('../db.js');
const { Op } = require("sequelize");

async function addActivity(req, res) {

  const { name, difficulty, duration, season, country } = req.body;
  const dbActivity = await Activity.findOne({ where: { name: {[Op.iLike]: `%${name}%` }}, include: Country});

  try {
    if(!dbActivity) {
      const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
        country
      })  
      await newActivity.addCountry(country);
      return res.status(200).send(`Activity "${newActivity.name}" added`);
    } else if(dbActivity.countries) {
        const findC = await dbActivity.countries.find(c => c.id === country)
        if(findC) {
          res.status(404).send(`Activity "${dbActivity.name}" already exists`)
        } else {
          dbActivity.addCountry(country)
          res.status(200).send(`Activity "${dbActivity.name}" added`)
        }
    }    
  } catch(e) {
    return res.send(e);
  }
}

function getActivities(req, res) {
  Activity.findAll({include: Country})
  .then(r => res.send(r))
  .catch(e => res.send(e))
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

module.exports = {addActivity, getActivities};