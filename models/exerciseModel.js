

module.exports = function (sequelize, DataTypes) {
  var Exercise = sequelize.define("Exercise", {
    exercise_type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    exercise_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    }
  });
  return Exercise;
};


