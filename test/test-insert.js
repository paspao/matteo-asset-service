'use strict';

var tap = require('tap')
var assetModule = require('../index');

var testAsset = {name: 'tavolo', status: 'wait'};

assetModule.syncAsset().then(function () {
  return assetModule.insertAsset(testAsset);  
})
.then(function (result) {
  console.log(result.toJSON());
  tap.equal(result.toJSON().name, testAsset.name);
  tap.equal(result.toJSON().status, testAsset.status);
},
function (err) {
  console.log(err);
});
