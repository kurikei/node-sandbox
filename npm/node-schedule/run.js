/* eslint-disable no-console */
const schedule = require('node-schedule');

schedule.scheduleJob('* * * * *', () => {
  console.log('tick');
});
/* eslint-enable no-console */
