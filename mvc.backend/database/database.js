const { Sequelize } = require('sequelize')
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../database.sqlite'
})

// ({ sequelize, modelName: 'Image'}),

// (async () => {
//     await sequelize.sync();
//     const jane = await User.create({
//       username: 'janedoe',
//       birthday: new Date(1980, 6, 20)
//     });
//     console.log(jane.toJSON());
//   })();

module.exports = sequelize
