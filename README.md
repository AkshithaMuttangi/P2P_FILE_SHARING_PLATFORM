# VELOSYNC - Secure P2P File Sharing

**VELOSYNC** is a fast, secure, and decentralized peer-to-peer (P2P) file-sharing application. It establishes a direct connection between users using **WebRTC**, ensuring that files are transferred directly from device to device without ever being stored on a central server.

##  Key Features

  * **Direct P2P Transfer**: Uses WebRTC DataChannels for peer-to-peer file transfer. Data goes directly between users, not through the server.
  * **Secure Signaling**:
      * **Rate Limiting**: Custom IP-based rate limiting on the signaling server to prevent abuse.
      * **IP Hashing**: User IP addresses are hashed with a daily salt for privacy.
  * **Easy Session Sharing**:
      * Generate a unique Session ID.
      * Share via **QR Code** or direct **URL Link**.
      * Integrated sharing buttons for WhatsApp and Email.
  * **Modern UI**: Built with React and Vite for a fast, responsive experience.

##  Tech Stack

### Frontend

  * **Framework**: React (v19) with Vite
  * **Styling**: CSS (Custom animations, Glow effects)
  * **Connectivity**: `socket.io-client`, native `RTCPeerConnection`
  * **Utilities**: `qrcode.react` (for session QR codes), `uuid`

### Backend (Signaling Server)

  * **Runtime**: Node.js
  * **WebSocket**: `socket.io` (Custom implementation)
  * **Security**: `crypto` (SHA-256 for IP hashing), `nanoid` (Session ID generation)
  * **Server**: Native Node.js `http` module (Lightweight, no Express overhead)

##  Technical Architecture

### Connection Flow

1.  **Initiator** creates a room on the Signaling Server.
2.  Server generates a unique **Session ID** (using `nanoid`).
3.  **Receiver** joins via the link or QR code.
4.  Peers exchange SDP offers/answers and ICE candidates via the Signaling Server (Socket.io).
5.  **WebRTC Connection** is established (STUN server: `stunprotocol.org`).
6.  Files are chunked and sent directly over the `RTCDataChannel`.

### Rate Limiting Logic

The backend implements a sliding window rate limiter:

  * Limits requests based on hashed IP addresses.
  * Blocks abusive connections that exceed the request threshold within a 2-minute window.
  * Automatically cleans up old IP hash data every hour.

##  Installation & Setup

### Prerequisites

  * Node.js (v16 or higher recommended)
  * npm or yarn

### 1\. Clone the Repository

```bash
git clone https://github.com/your-username/p2p-file-sharing.git
cd p2p-file-sharing
```

### 2\. Backend Setup

Navigate to the backend folder and install dependencies:

```bash
cd backend
npm install
```

Start the Signaling Server:

```bash
npm start
# Server runs on http://localhost:8080
```

### 3\. Frontend Setup

Open a new terminal, navigate to the frontend folder, and install dependencies:

```bash
cd frontend
npm install
```

Start the Development Server:

```bash
npm run dev
# App runs on http://localhost:5173
```

## 🖥️ Usage

1.  Open the application in your browser.
2.  **Sender**: The home screen will generate a unique link and QR code. Share this with the receiver.
3.  **Receiver**: Scan the QR code or open the link.
4.  Once connected, the UI will transition to the **File Transfer** screen.
5.  Drag and drop files to send them instantly.

##  Project Structure

```
├── backend/
│   ├── routes/
│   │   └── websocket.js    # Socket.io logic, Rate limiting, Room management
│   ├── server.js           # Entry point, HTTP server creation
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── SessionCreate.jsx  # Landing page, QR generation
│   │   │   ├── FileTransfer.jsx   # File sending/receiving UI
│   │   │   └── P2PNetwork.jsx     # Background network visualization
│   │   ├── webrtc.js              # WebRTC configuration & STUN servers
│   │   ├── App.jsx                # Routing logic
│   │   └── main.jsx
│   └── package.json
└── README.md
```