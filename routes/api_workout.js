const express = require('express')

const router = express.Router()

const ExerciseCntrl = require('../controllers/exerciseCntrl');
const workoutContrl = require('../controllers/workoutContrl');

router.post("/", (req, rep) => {
    console.log(req['body'])
    workoutContrl.create(req, rep);
});



router.get("/", (req, rep) => {
    workoutContrl.findAll(req, rep);
});



module.exports = router

