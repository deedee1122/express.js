const { DataTypes } = require('sequelize')

const sequelize = require('../database/database.js')

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  }
}
)

module.exports = Post
