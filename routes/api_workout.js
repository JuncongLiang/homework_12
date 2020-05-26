const express = require('express')
// -- BRING IN THE `EXPRESS ROUTER` -- //
const router = express.Router()

const ExerciseCntrl = require('../controllers/exerciseCntrl');
const workoutContrl = require('../controllers/workoutContrl');

// -- USE MVC ARCHITECTURE --> HAVE CLEAN ROUTES AND MOVE THE LOGIC TO THE /CONTROLLERS DIRECTORY -- //
router.post("/", (req, rep) => {
    console.log(req['body'])
    workoutContrl.create(req, rep);
});


// GET  "/""
// Calls controller which will return all activities for a specific workout
router.get("/", (req, rep) => {
    workoutContrl.findAll(req, rep);
});

// -- ADD ADDITIONAL ROUTES -- //

module.exports = router

