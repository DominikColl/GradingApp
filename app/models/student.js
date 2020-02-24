'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    name: DataTypes.STRING,
    percentgrade: DataTypes.STRING,
    lettergrade: DataTypes.STRING
  }, {});
  Student.associate = function (models) {
    // associations can be defined here
  };
  return Student;
};