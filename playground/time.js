var moment = require('moment');

// var date = new Date();
// console.log(date.getDay());

// var date = moment();
// date.add(100, 'year');
// console.log(date.format(`MMM Do, YYYY`));

var date = moment(1234567890);
console.log(date.format(`MMM Do, YYYY, h:mm a`));