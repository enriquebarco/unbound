require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.port || 8080;
const teamRoutes = require("./routes/teamsRoutes");
const usersRoutes = require("./routes/usersRoutes");

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/teams", teamRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})