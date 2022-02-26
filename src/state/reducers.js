const getDirContents = require("../helpers/getDirContents");

exports.dirReducer = (state = getDirContents(), action) => {
  switch (action.type) {
    case "REFRESH":
      const nextState = [...state];
      const newScan = getDirContents();
      for (const scanItem of newScan) {
        if (nextState.findIndex((existingItem) => existingItem.name === scanItem.name) === -1) nextState.push(scanItem);
      }
      for (const i of nextState) {
        if (newScan.findIndex((scanItem) => scanItem.name === i.name) === -1) i.active = false;
        else i.active = true;
      }
      return nextState;

    default:
      return state;
  }
};
