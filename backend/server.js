import http from "http";
import { startSocket } from "./routes/websocket.js";

const server = http.createServer();

startSocket(server);

server.listen(8080, () => {
    console.log("🚀 Server running at http://localhost:8080");
});
