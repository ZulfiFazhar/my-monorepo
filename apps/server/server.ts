import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "@/routes/user.routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Hello from Bun + Express!" });
});

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
