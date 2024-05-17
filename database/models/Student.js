/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },

  imageurl: {
    type: Sequelize.STRING,
    // defaultValue: 'https://www.timeshighereducation.com/sites/default/files/styles/article785xauto/public/capture_1.png', 
    allowNull: true,
  },

  gpa: {
    type: Sequelize.DECIMAL(3, 1), // Use precision of 3 digits, 1 decimal place
    allowNull: true,
    validate: {
      isDecimal: true,
      min: 0.0,
      max: 4.0,
    },
  },
  
  campusId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  }
});

// Export the student model
module.exports = Student;
