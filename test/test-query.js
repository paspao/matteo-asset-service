'use strict';

var { test } = require('tap')
var Asset = require('../index')


var testAsset = {name: 'tavolo', status: 'wait'};

test('testname', async (t) => {
  const assetService = await Asset('assetdb', 'asset', 'asset', 'localhost', 'data/database2.sqlite');
  const insertResult = await assetService.insertAsset(testAsset);
  const queryResult = await assetService.queryAsset({where:{name: 'tavolo'}, raw: true});
  
  // console.log(queryResult);
  t.equal(queryResult[0].name, testAsset.name);
})

/* assetModule.syncAsset().then(function () {
  return 
})
.then(function () {
  return assetModule.queryAsset({where:{name: 'tavolo'}, raw: true});
})
.then(function (result) {
  tap.equal(testAsset.name, 'tavolo');
  tap.equal(testAsset.status, 'wait');
}, function (err) {
    console.log(err);
}); */
