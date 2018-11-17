/* eslint-enable no-console */
const schedule = require('node-schedule');

schedule.scheduleJob('* * * * *', () => {
  console.log('tick');
});
/* eslint-disable no-console */
