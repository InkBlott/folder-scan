const { createStore } = require("redux");
const { dirReducer } = require("./reducers");

const store = createStore(dirReducer);

module.exports = store;
