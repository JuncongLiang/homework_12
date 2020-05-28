const express = require("express");


const AboutCntrl = require("../controllers/aboutCntrl");


module.exports = function(app) {
    app.get('/about', AboutCntrl.getAbout);
}


