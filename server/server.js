const express = require("express");
const app = express();

require("dotenv").config({ path: "./config/.env" });

app.use(express.json());

app.use("/auth", require("./routes/auth"));

// Server is running, better catch it..
app.listen(process.env.PORT, console.log(`Server running on port http://localhost:${process.env.PORT}`));
