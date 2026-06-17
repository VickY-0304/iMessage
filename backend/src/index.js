import express from "express";
import "dotenv/config";
import { connectDb } from "./lib/db.js";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
const PORT = process.env.PORT || 2026;
const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(express.json());
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(PORT, () => {
  connectDb();
  console.log(`Server connected port ${PORT}`);
});
