const app = require("./index");
const connect = require("./config/db");
app.listen(3344, async function () {
  await connect();
  console.log("Listening on port 3344");
});
