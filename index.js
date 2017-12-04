const Sequelize = require('sequelize');
const sequelize = new Sequelize('assetdb', 'asset', 'asset', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: 'data/database.sqlite',

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

const Asset = sequelize.define('asset', {
  id: { type: Sequelize.INTEGER, primaryKey: true,autoIncrement: true},
  name: Sequelize.STRING,
  status: Sequelize.STRING
});

module.exports={
  syncAsset: function() {return Asset.sync({force: true}); },
  
  insertAsset: function(asset) {
    return Asset.create({
      name: asset.name,
      status: asset.status
    }); 
  },
    
	updateAsset: function(){
		return "updated";
	},
	queryAsset: function(){
		return "some asset";
	}
}
