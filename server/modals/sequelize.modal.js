const Sequelize = require("sequelize");
const { dbConfig } = require("../database/config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  operatorAliases: false,
  dialect: "mysql",
  define: {
    timestamps: false,
  },
  pool: {
    idle: dbConfig.pool.idle,
    min: dbConfig.pool.min,
    max: dbConfig.pool.max,
    acquire: dbConfig.pool.acquire,
  },
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Post = require("./post.modal")(sequelize, Sequelize, db);
db.Comment = require("./comment.modal")(sequelize, Sequelize, db);

//define the associations
Object.values(db).forEach((model) => {
  if (model.associate) {
    model.associate(db);
  }
});

module.exports=db;