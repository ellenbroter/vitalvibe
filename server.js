import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const PORT = 5050;
const app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", async (req, res) => {
  try {
    const response = await fetch("https://www.fruityvice.com/api/fruit/all");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});