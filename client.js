const net = require('net');
const {IP,PORT} = require('./constants');
// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)
const connect = function(playerName) {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");
  
  conn.on('connect', () => {
    console.log("connected!");
    if (!playerName) playerName = "XYZ";
    conn.write(`Name: LTC`);

  });
  conn.on('data', (data) => {
    console.log(data);
  });

  
  return conn;
};


module.exports = connect;