const connect = require('./client');
const setupInput = require('./input');

const playerName = process.argv[2];




console.log("Connecting...");
const connectionObj = connect(playerName);
setupInput(connectionObj);


