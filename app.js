import express from "express";
import { config } from "dotenv";
import home from "./routes/home.js";
import cors from "cors";
import gettrain from "./routes/getTrains.js";

config();

const PORT = process.env.PORT || 8000;
const app = express();
// Enable All CORS Requests
app.use(cors());

app.use("/", home);
app.use("/trains", gettrain);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
