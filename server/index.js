import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import authenticationRoutes from "./routes/authentication.js"

dotenv.config();

const app = express();

//Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//Router Middleware
app.use("/api", authenticationRoutes);

//Start the Express server
app.listen(process.env.PORT_URI, () => {
  console.log(`Server is running on port ${process.env.PORT_URI}`);
});

//Database Connection para alam mo
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database Error", err));




