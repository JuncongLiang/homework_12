const express = require('express')

const router = express.Router()
const ExerciseCntrl = require('../controllers/exerciseCntrl');

router.get("/", (req, rep) => {
    ExerciseCntrl.getAll(req, rep);

});

router.post("/", (req, rep) => {
    ExerciseCntrl.postAll(req, rep);

});


module.exports = router

