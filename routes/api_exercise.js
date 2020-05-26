const express = require('express')
// -- BRING IN THE `EXPRESS ROUTER` -- //
const router = express.Router()
const ExerciseCntrl = require('../controllers/exerciseCntrl');
const workoutContrl = require('../controllers/workoutContrl');

// -- USE MVC ARCHITECTURE --> HAVE CLEAN ROUTES AND MOVE THE LOGIC TO THE /CONTROLLERS DIRECTORY -- //


// GET  "/""
// Calls controller which will return all activities for a specific workout
router.get("/", (req, rep) => {
    ExerciseCntrl.getAll(req, rep);
});

// -- ADD ADDITIONAL ROUTES -- //

module.exports = router

