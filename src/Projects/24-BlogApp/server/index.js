const express = require("express");
const cors = require("cors");
const app = express();
require("./db/index");

app.use(cors());
app.use(express.json());

app.use("/api", (req, res) => {
    res.send("HEllo");
});

app.listen(5000, () => console.log("App is running at 5000"));
