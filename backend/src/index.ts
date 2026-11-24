import express from "express";
import { config } from "dotenv";
import cors from "cors";

config();
const PORT = process.env.API_PORT;
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "toxic orb",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`API available on http://localhost:${PORT} !`);
});
