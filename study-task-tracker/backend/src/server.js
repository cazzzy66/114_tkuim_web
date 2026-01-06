require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { connectDB } = require("./utils/db");
const { notFoundHandler, errorHandler } = require("./middlewares/error");
const taskRoutes = require("./routes/task.routes");

const app = express();

// middleware
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json());
app.use(morgan("dev"));

// health
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "OK",
    data: { service: "study-task-tracker-backend" }
  });
});

// routes
app.use("/api/tasks", taskRoutes);

// errors
app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err.message);
    process.exit(1);
  }
})();
