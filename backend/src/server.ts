import http from "http";
import app from "./app";
import { ENV } from "./config/env";

const PORT = ENV.PORT;

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`Server starts on port ${PORT}`)
})