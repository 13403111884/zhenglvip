const { sequelize } = require('./../../../../core/db')
const { Sequelize: Seq, Model } = require('sequelize')

class User extends Model {

}

User.init({
  id: {
    type: Seq.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Seq.STRING(9)
  },

}, { sequelize })
