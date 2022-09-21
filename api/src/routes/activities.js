const { Router } = require('express');
const { addActivity } = require('../controllers/activities');

const router = Router();

// Recibe los datos del FRONT
// Crea una actividad en la DB, relacionada con el país

router.post('/', addActivity)

module.exports = router;