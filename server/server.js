require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const PORT = process.env.port || 8080;
const teamRoutes = require("./routes/teamsRoutes");
const paymentsRoutes = require("./routes/paymentsRoutes");
const usersRoutes = require("./routes/usersRoutes");
const contractsRoutes = require("./routes/contractsRoutes");
const createCheckoutSession = require("./api/payment");
const authenticate = require("./middleware/authenticate");
const showPDF = require("./controllers/contractsController");


// middleware
app.use(cors());
app.use(express.json());
// app.use('*.*',express.static());
// app.Router().get("*.pdf", showPDF);
// app.use("/contracts", express.static(path.join(__dirname, "contracts")));

// routes
app.use("/users", usersRoutes);
app.use("/teams", teamRoutes);
app.use("/payments", paymentsRoutes);
app.use("/contracts", contractsRoutes);




//stripe 
app.post("/create-checkout-session", authenticate, createCheckoutSession)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})