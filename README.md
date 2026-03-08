# VELOSYNC - Secure P2P File Sharing

**VELOSYNC** is a fast, highly secure, and decentralized peer-to-peer (P2P) file-sharing application. It establishes a direct connection between users using **WebRTC**, ensuring that files are transferred directly from device to device without ever being stored on a central server. All transfers are protected with robust End-to-End Encryption.

## Key Features

  * **Direct P2P Transfer**: Uses WebRTC DataChannels for peer-to-peer file transfer. Data goes directly between users, bypassing any central servers.
  * **End-to-End Encryption (E2EE)**: Secures file transfers using the Web Crypto API. Generates ECDH (P-256 curve) key pairs for secure key exchange and derives AES-GCM (256-bit) session keys to encrypt payloads.
  * **Secure Signaling & Auditing**:
      * **Rate Limiting**: Custom IP-based sliding window rate limiter (max 20 requests/2 mins) on the signaling server to prevent abuse.
      * **IP Hashing**: User IP addresses are hashed securely using SHA-256 with a daily rotating salt for privacy.
      * **Audit Logging**: Comprehensive server-side logging that records socket events, room creation/joining, and rate limit violations. Logs are automatically rotated and purged every 6 hours to save disk space.
  * **Easy Session Sharing**:
      * Generate a unique Session ID.
      * Share via **QR Code** or direct **URL Link**.
      * Integrated sharing buttons for WhatsApp and Email.
  * **Modern UI**: Built with React and Vite for a fast, responsive experience, complete with new informational routes (About, Privacy, How It Works).

## Tech Stack

### Frontend

  * **Framework**: React (v19) with Vite
  * **Routing**: React Router DOM (`react-router-dom`)
  * **Security**: Web Crypto API (Native ECDH & AES-GCM implementation)
  * **Connectivity**: `socket.io-client`, native `RTCPeerConnection`
  * **Utilities**: `qrcode.react` (for session QR codes), `uuid`

### Backend (Signaling Server)

  * **Runtime**: Node.js
  * **WebSocket**: `socket.io` (Custom implementation over native HTTP)
  * **Security & Logging**: `crypto` (SHA-256 for IP hashing), `fs` & `path` (Audit logging), `nanoid` (Session ID generation)

## Technical Architecture

### Connection Flow

1.  **Initiator** creates a room on the Signaling Server.
2.  Server generates a unique **Session ID** (using `nanoid`) and logs the action via the Audit Logger.
3.  **Receiver** joins via the link or QR code.
4.  Peers exchange WebRTC SDP offers/answers, ICE candidates, and **Public Keys (ECDH)** via the Signaling Server.
5.  Both peers derive a shared **AES-GCM Session Key**.
6.  **WebRTC Connection** is established (STUN server: `stunprotocol.org`).
7.  Files are encrypted, chunked, and sent directly over the `RTCDataChannel`.

### Security & Rate Limiting Logic

  * The backend implements a sliding window rate limiter tracking hashed IP addresses.
  * Blocks abusive connections exceeding the request threshold within a 2-minute window.
  * Automatically cleans up old IP hash data every hour.
  * The `auditlogger.js` service writes timestamped logs to the local file system and runs a background interval to delete logs older than 6 hours.

## Installation & Setup

### Prerequisites

  * Node.js (v18 or higher recommended)
  * npm or yarn

### 1\. Clone the Repository

```bash
git clone https://github.com/AkshithaMuttangi/P2P_FILE_SHARING_PLATFORM.git
cd P2P_FILE_SHARING_PLATFORM
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

## Usage

1.  Open the application in your browser.
2.  **Sender**: The home screen will generate a unique link and QR code. Share this with the receiver.
3.  **Receiver**: Scan the QR code or open the link.
4.  Once connected, cryptographic keys will be exchanged behind the scenes, and the UI will transition to the **File Transfer** screen.
5.  Drag and drop files to encrypt and send them instantly.

## Project Structure

```text
├── backend/
│   ├── routes/
│   │   └── websocket.js       # Socket.io logic, Rate limiting, WebRTC signaling
│   ├── utils/
│   │   └── auditlogger.js     # Timestamped file logging and auto-rotation
│   ├── logs/                  # Auto-generated directory for audit logs
│   ├── server.js              # Entry point, HTTP server creation
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── FileTransfer.jsx   # Encrypted file sending/receiving
│   │   │   ├── LoadingPage.jsx    # Receiver connecting 
│   │   │   ├── P2PNetwork.jsx     # Background network visualization
│   │   │   ├── SessionCreate.jsx  # Session creation
│   │   │   ├── About.jsx          # Platform info
│   │   │   ├── HowItWorks.jsx     # Usage guide
│   │   │   └── Privacy.jsx        # Privacy policy
│   │   ├── Encryption.js          # ECDH and AES-GCM Web Crypto logic
│   │   ├── webrtc.js              # WebRTC configuration & STUN servers
│   │   ├── App.jsx                # Router configuration
│   │   └── main.jsx
│   └── package.json
└── README.md
```