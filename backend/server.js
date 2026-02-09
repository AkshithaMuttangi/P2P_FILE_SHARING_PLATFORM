import http from "http";
import { startSocket } from "./routes/websocket.js";

const server = http.createServer();

startSocket(server);

const PORT = process.env.PORT || 8080;

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
