const { Activity, Country } = require('../db.js');
const { Op } = require("sequelize");

async function addActivity(req, res) {

  const { name, difficulty, duration, season, country } = req.body;
  const dbActivity = await Activity.findOne({ where: { name: {[Op.iLike]: `%${name}%` }}, include: Country});
  const findCountry = await Country.findOne({where: {id: country}})

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
      return res.status(200).send(`Activity "${newActivity.name}" added at ${findCountry.name}`);
    } else if(dbActivity.countries) {
        const findC = await dbActivity.countries.find(c => c.id === country)
        if(findC) {
          res.status(404).send(`Activity "${dbActivity.name}" already exists in ${findCountry.name}`)
        } else {
          dbActivity.addCountry(country)
          res.status(200).send(`Activity "${dbActivity.name}" added at ${findCountry.name}`)
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

module.exports = {addActivity, getActivities};