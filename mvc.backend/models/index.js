const Post = require('./Post.js')
const Image = require('./Image.js')

Post.belongsToMany(Image, { through: 'PostImages' })
Image.belongsToMany(Post, { through: 'PostImages' })

module.exports = { Post, Image }
