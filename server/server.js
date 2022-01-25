require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.port || 8080;
const teamRoutes = require("./routes/teamsRoutes");
const paymentsRoutes = require("./routes/paymentsRoutes");
const usersRoutes = require("./routes/usersRoutes");
const createCheckoutSession = require("./api/payment");
const authenticate = require("./middleware/authenticate");


// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/users", usersRoutes);
app.use("/teams", teamRoutes);
app.use("/payments", paymentsRoutes);

//stripe 
app.post("/create-checkout-session", authenticate, createCheckoutSession)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})