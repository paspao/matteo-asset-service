'use strict';

var tap = require('tap')
var assetModule = require('../index');

var testAsset = {name: 'tavolo', status: 'wait'};

assetModule.syncAsset().then(function () {
  return assetModule.insertAsset(testAsset);  
})
.then(function () {
  return assetModule.queryAsset({where:{name: 'tavolo'}, raw: true});
})
.then(function (result) {
  tap.equal(testAsset.name, 'tavolo');
  tap.equal(testAsset.status, 'wait');
}, function (err) {
    console.log(err);
});
