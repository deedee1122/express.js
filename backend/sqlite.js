const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  });


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
);


const Image = sequelize.define('Image', {
  filename: {
    type: DataTypes.STRING,
    allowNull: false
  },
  filesize: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

Post.belongsToMany(Image, { through: 'PostImages' });
Image.belongsToMany(Post, { through: 'PostImages' });
sequelize.sync({ force: true });
sequelize.authenticate().then (() =>{
  console.log('successful')
}).catch((err) =>{
  console.log(err)
})