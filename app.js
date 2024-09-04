require('dotenv').config();
const express = require("express");
const cors = require("cors");
const { startMoralis } = require("./config/moralis");
const routes = require("./routes/routes");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/", routes);

startMoralis().then(() => {
  app.listen(port, () => {
    console.log(`Listening for API calls on port ${port}`);
  });
});
