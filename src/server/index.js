
'use strict';

const path = require('path');
const express = require('express');
const app = express();
app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/bower_components', express.static(path.join(__dirname, '../../bower_components')));

app.listen(3000, function () {
  console.log('LSA app listening on port 3000!')
});
