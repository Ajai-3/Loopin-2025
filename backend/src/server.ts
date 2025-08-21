import http from "http";
import app from "./app";
import { ENV } from "./infrastructure/config/env";
import { connectDB } from "./infrastructure/config/db";

const PORT = ENV.PORT;

const server = http.createServer(app)

connectDB()

server.listen(PORT, () => {
    console.log(`Server starts on port ${PORT}`)
})