'use strict';

var { test } = require('tap')
var Asset = require('../index')


var testAsset = {name: 'tavolo', status: 'wait'};

test('query', async (t) => {
  const assetService = await Asset('assetdb', 'asset', 'asset', 'localhost', 'data/database2.sqlite');
  const insertResult = await assetService.insertAsset(testAsset);
  const queryResult = await assetService.queryAsset({where:{name: 'tavolo'}, raw: true});
  
  t.equal(queryResult[0].name, testAsset.name);
})
