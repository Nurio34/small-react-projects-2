const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);

mongoose
    .connect(process.env.MONGO_CONNECT)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
