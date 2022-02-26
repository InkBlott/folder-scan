const express = require("express");
const actions = require("./controllers");
const router = express.Router();

router.get("/list", actions.sendFileList);

router.get("/scan", actions.scan);

router.get("/download-state", actions.sendState);

module.exports = router;
