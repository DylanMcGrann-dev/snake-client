const { connect } = require("./client");
const { setupInput } = require("./input");
// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)
console.log("Connecting ...");


setupInput(connect());