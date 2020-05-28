const express = require('express')

const router = express.Router()
const ExerciseCntrl = require('../controllers/exerciseCntrl');
const workoutContrl = require('../controllers/workoutContrl');

router.get("/", (req, rep) => {
    ExerciseCntrl.getAll(req, rep);
});



module.exports = router

