'use strict';

const Sequelize = require('sequelize');

// 'assetdb', 'asset', 'asset', 'localhost', 'data/database.sqlite'
module.exports = function (database, username, password, host, storage) {
  
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
    id: { type: Sequelize.INTEGER, primaryKey: true,autoIncrement: true},
    name: Sequelize.STRING,
    status: Sequelize.STRING
  });
  
  return {
    syncAsset: syncAsset,
    insertAsset: insertAsset,
    updateAsset: updateAsset,
    queryAsset: queryAsset
  }
  
  function syncAsset() {
    return Asset.sync({force: true}); 
  }
  
  function insertAsset (asset) {
    return Asset.create({
      name: asset.name,
      status: asset.status
    }); 
  }
    
	function updateAsset (values, options) {
		return Asset.update(values, options);
	}
  
	function queryAsset (condition) {
		return Asset.findAll(condition);
	}
};
