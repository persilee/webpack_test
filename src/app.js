'use strict';

import moment from 'moment';
// import test from './test.js';
// import styles from './main.css';
var data = require('data.json');



var rightNow = moment().format('YYYY-MM-DD,h:mm:ss a');
console.log(rightNow);
console.log(data.say);
