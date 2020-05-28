// -- BRING IN OUR PROJECT REQUIREMENTS -- //
const express = require("express")
const path = require("path")

// -- Requiring our models for syncing -- //
// ================== > 
let db = require("./models");

// -- Requiring our Routes -- //
const api_routes = require("./routes/api_routes");
const api_workout =  require("./routes/api_workout");
const api_exercise =  require("./routes/api_exercise");
const about_routes = require("./routes/html_routes");

// -- CREATE AN `EXPRESS` INSTANCE -- //
const app = express();
// -- DEFINE A PORT -- //
const PORT = process.env.PORT || 5000;

// -- PARSE FORM (CLIENT-SIDE) INPUTS -- //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// -- TELL EXPRESS WHERE OUR STATIC FILES ARE LOCATED -- //
app.use(express.static("public"));


require("./routes/html_routes")(app);



app.use('/api/activity', api_routes);
app.use('/api/workout', api_workout);
app.use('/api/exercise', api_exercise);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`App running on port ${PORT}!`);
  });
});

