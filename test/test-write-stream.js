'use strict';

var { test } = require('tap')
var Asset = require('../index')

var Readable = require('stream').Readable

var testAsset = {name: 'tavolo', status: 'wait'}

test('writestream', async (t) => {
  const assetService = await Asset('assetdb', 'asset', 'asset', 'localhost', 'data/database2.sqlite')
  const ws = assetService.createWriteStream()
  console.log(ws)
  
  var rs = new Readable({objectMode: true})
  var name = 'chair'
  var rndName
  var obj
  var i = 0

  obj = {name: name, status: 'operational'}

  rs._read = function() {
      console.log('_read called')
      obj.name = name + Math.random()
      rs.push(obj)
      i++
      if (i === 100) rs.push(null)
  }
  
  rs.pipe(ws)
})
