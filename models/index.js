// -- SEQUELIZE SCHEMA MODEL CONFIG FILE -- //
// --> YOU DO NOT NEED TO MODIFY ANYTHING IN THIS FILE <-- //

'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}




let worouts = {
    create() {
        const worouts = sequelize.define("Workouts", {
            name: Sequelize.STRING(100),
            date: Sequelize.STRING(100),
        });

        return worouts;
    }
}

let exercise = {
    create() {
        const exercise = sequelize.define("Exercise", {
            distance: Sequelize.STRING(100),
            sets: Sequelize.STRING(100),
            reps: Sequelize.STRING(100),
            weight: Sequelize.STRING(100),
            duration: Sequelize.STRING(100),
            exercise: Sequelize.STRING(100),
            workout: Sequelize.STRING(100),
        });
        return exercise;
    }
}

worouts.create().sync()
    .then(() => {
        console.log('init db ok')
    })
    .catch(err => {
        console.log('init db error', err)
    })

exercise.create().sync()
    .then(() => {
        console.log('init db ok')
    })
    .catch(err => {
        console.log('init db error', err)
    })

db.worouts = worouts;
db.exercise = exercise;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
