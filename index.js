'use strict';

const Sequelize = require('sequelize');

// 'assetdb', 'asset', 'asset', 'localhost', 'data/database.sqlite'
module.exports = async function (database, username, password, host, storage) {
  
  const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: 'sqlite',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },

    // SQLite only
    storage: storage,

    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    operatorsAliases: false
  });
  
  const Asset = sequelize.define('asset', {
    // id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    name: Sequelize.STRING,
    status: Sequelize.STRING
  });
  
  await Asset.sync({force: true});
  
  return {
    insertAsset: insertAsset,
    updateAsset: updateAsset,
    queryAsset: queryAsset
  }
  
  async function insertAsset (asset) {
    var result = await Asset.create({
      name: asset.name,
      status: asset.status
    });
    
    return result.toJSON();
  }
  
  async function updateAsset (values, options) {
    var result = await Asset.update(values, options);
    return result;
  }
  
  async function queryAsset (condition) {
    var result = await Asset.findAll(condition);
    return result;
  }
  
};
