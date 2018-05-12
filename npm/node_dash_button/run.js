require('dotenv').config();
const dashButton = require('node-dash-button');

const dash = dashButton(process.env.AMAZON_DASH_BUTTON_MAC_ADDRESS);
dash.on('detected', () => {
  console.log('Amazon Button Pushed!');
});
