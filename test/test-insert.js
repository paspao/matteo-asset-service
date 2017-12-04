'use strict';

var { test } = require('tap')
var Asset = require('../index')


var testAsset = {name: 'tavolo', status: 'wait'};

test('insert', async (t) => {
  const assetService = await Asset('assetdb', 'asset', 'asset', 'localhost', 'data/database2.sqlite');
  const insertResult = await assetService.insertAsset(testAsset);
  
  t.equal(insertResult.name, testAsset.name);
})
