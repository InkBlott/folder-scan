const express = require("express");
const routes = require("./src/routes");
const store = require("./src/state/store");

const app = express();
const port = 3000;

store.subscribe(() => console.log(store.getState()));
app.use("/", routes);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
  console.log("http://localhost:3000/list");
});
