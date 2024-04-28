/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  },

    imageurl: {
    type: Sequelize.STRING,
    defaultValue: 'https://news.harvard.edu/wp-content/uploads/2024/03/admissions_2028_111623_Features_DG_0013-2500-2048x1366.jpg', 
    allowNull: true,
  }
});

// Export the campus model
module.exports = Campus;
