import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const app = express();

app.use(cookieParser());
app.use(express.json()); // Middleware to enable you send json object to express server
app.use(cors());

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);

        console.log("Connected to mongoDB");
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
});

// mongoose.connection.on("connected", () => {
//     console.log("mongoDB connected");
// });

app.get("/", (req, res) => {
    res.send("Welcome to booking app api");
});

app.use("/api/auth", authRoute);

app.use("/api/users", usersRoute);

app.use("/api/hotels", hotelsRoute);

app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
});


app.listen(process.env.PORT || 8000, () => {
    connect();
    console.log("connected to backend");
});