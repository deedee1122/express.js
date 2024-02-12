const { Post } = require('../models/index.js')

module.exports.getAll = function (req, res) {
  Post.findAll()
    .then((posts) => {
      res.status(200).json(posts)
    })
    .catch()
}

module.exports.getOne = function (req, res) {
  const id = req.params.id

  Post.findByPk(id)
    .then((post) => {
      res.status(200).json(post)
    })
    .catch()
}
