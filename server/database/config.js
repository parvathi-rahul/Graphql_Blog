const dbConfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "password",
    DB: "blogdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
  
  module.exports = { dbConfig };