'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Exercises', [
      {
        distance: 100,
        sets: 5,
        reps: 5,
        weight: 50,
        duration: 30,
        exercise: "Barbell Curl", createdAt: new Date(), workout: '-1-', updatedAt: new Date()
      },
      {
        distance: 100,
        sets: 5,
        reps: 5,
        weight: 50,
        duration: 30,
        exercise: "Lateral Curl", createdAt: new Date(), workout: '-1-', updatedAt: new Date()
      },
      {
        distance: 100,
        sets: 5,
        reps: 5,
        weight: 50,
        duration: 30,
        exercise: "Bench Press", createdAt: new Date(), workout: '-1-', updatedAt: new Date()
      },
      {
        distance: 100,
        sets: 5,
        reps: 5,
        weight: 50,
        duration: 30,
        exercise: "Treadmill", createdAt: new Date(), workout: '-1-', updatedAt: new Date()
      },
      {
        distance: 100,
        sets: 5,
        reps: 5,
        weight: 50,
        duration: 30,
        exercise: "Stairmaster", createdAt: new Date(), workout: '-1-', updatedAt: new Date()
      }
    ], {})
  },

};
