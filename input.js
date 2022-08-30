const {MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, messages} = require('./constants');

let connection;



const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  //on data, call handleUserInput
  stdin.on('data', handleUserInput);

  return stdin;
};

//check what was passed in as data, in this case key press
const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log('quit');
    process.exit();
  }
  if (key.toLowerCase() === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (key.toLowerCase() === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (key.toLowerCase() === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key.toLowerCase() === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }

  if (Object.keys(messages).includes(key)) {
    connection.write(messages[key]);
  }


};


module.exports = setupInput;