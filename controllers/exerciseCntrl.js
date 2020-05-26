// This is an example of a Controller. Note how it requires in the model(s) it needs.
var db = require("../models");
const Exercise = require("../models/exerciseModel.js");

const ExerciseCntrl = {
  // This is called (when needed) from the route page when a 
  // listing of all exercises is needed
  getAll(req, res){
    db.exercise.create().findAll().then(function (results) {
      res.json({result: "success", data: results})
    });
    // -- YOU WILL UPDATE WHAT THE "RESPONSE OBJECT" RETURNS -- //

    // -- EXAMPLE SEQUELIZE DB QUERY -- //
    // Exercise.find({}).then(data => {
    //   res.json(data)
    // });
  },

  postAll(req, res) {
    return new Promise(function (resolve, reject) {
      db.exercise.create().create(req['body']).then(function (result) {
        res.json({result: "success", data: result})
      });
    });
  }
}

// -- WE ARE EXPORTING (MAKING AVAILABLE TO OTHER FILES) THE CONTROLLER LOGIC (OBJECT & METHODS) -- //
module.exports = ExerciseCntrl;