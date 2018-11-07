/* eslint-disable no-console */
const io = require('socket.io-client');

const channelName = 'lightning_ticker_FX_BTC_JPY';
const socket = io('https://io.lightstream.bitflyer.com', { transports: ['websocket'] });

socket.on('connect', () => {
  socket.emit('subscribe', channelName);
});
socket.on(channelName, (message) => {
  console.log(channelName, message);
});
/* eslint-enable no-console */
