const { DataTypes, } = require ("sequelize");
const db = require ("../utils/database");

const Todo = db.define("todo", {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title:{
    type: DataTypes.STRING(50),
    allowNull: false
  },
  description:{
    type: DataTypes.STRING,
    allowNull: false
  },
  status:{
    type: DataTypes.BOOLEAN,    
  }
})

module.exports = Todo;