require("dotenv").config();
const fs = require("fs");

const getDirContents = () => {
  const items = fs.readdirSync(process.env.FOLDER_PATH);
  const holder = [];
  for (const item of items) {
    holder.push({ name: item, active: true });
  }
  return holder;
};

module.exports = getDirContents;
