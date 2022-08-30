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
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === 'c') {
    connection.write("Say: C'MERE!");
  }
  if (key === 'q') {
    connection.write("Say: Quit runnin'!");
  }
  if (key === 'e') {
    connection.write("Say: EVASIVE MANEUVERS");
  }


};


module.exports = setupInput;