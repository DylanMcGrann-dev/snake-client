const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",// IP address here,
    port: 50542 // PORT number here,
  });
  conn.on('data', (data) => {
    console.log(data);
  });
  conn.on('connect',() => {
    console.log('successfully connected to server');
  });
  conn.on('connect',() => {
    conn.write('Name: BOB');
    
     
  });
  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();
module.exports = {connect};