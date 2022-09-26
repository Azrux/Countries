const { Router } = require('express');
const { addActivity, getActivities } = require('../controllers/activities');

const router = Router();

// Recibe los datos del FRONT
// Crea una actividad en la DB, relacionada con el país

router.post('/', addActivity)
router.get('/', getActivities)

module.exports = router;