const express = require("express");
const cors = require("cors");
require("dotenv").config();

const weatherRoutes = require("./routes/weather");

const app = express();
const PORT = process.env.PORT || 3001;

// CORS setup – only allow your frontend origin
app.use(
  cors({
    origin: "*", // change to your frontend domain in prod
  })
);

app.use(express.json());

// Mount routes
app.use("/api/weather", weatherRoutes);

app.get("/ping", (req, res) => {
  console.log("Health check ping received at:", new Date().toISOString());
  res.status(200).send("pong");
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
