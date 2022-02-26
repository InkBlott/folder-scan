const store = require("./state/store");
const actions = require("./state/actions");

exports.sendFileList = async (req, res) => {
  try {
    res.status(200).json({ files: store.getState() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.scan = async (req, res) => {
  try {
    store.dispatch(actions.refresh());
    res.status(200).json({ message: "state refreshed" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.sendState = async (req, res) => {
  res.status(200).json(store.getState());
};
