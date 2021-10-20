const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const app = express();

require("dotenv").config({ path: "./config/.env" });

connectDB();

app.use(express.json());

app.use("/private", require("./routes/private"));
app.use("/auth", require("./routes/auth"));

app.use(errorHandler);

// Server is running, better catch it..
app.listen(process.env.PORT, console.log(`Server running on port http://localhost:${process.env.PORT}`));
