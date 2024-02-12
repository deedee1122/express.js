const { DataTypes } = require('sequelize')
const sequelize = require('../database/database.js')

const Image = sequelize.define('Image', {
  filename: {
    type: DataTypes.STRING,
    allowNull: false
  },
  filesize: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

module.exports = Image
