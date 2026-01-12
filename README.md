# P2P_FILE_SHARING_PLATFORM


# 🔐 P2P Encrypted File Sharing (EasyShare)

A fast, secure, and decentralized **peer-to-peer (P2P) file sharing web application** built with **WebRTC**.  
Files are transferred **directly between users**, end-to-end encrypted, without being stored on any central server.

---

## 📌 Overview

EasyShare enables users to securely send and receive files directly from one browser to another using **WebRTC DataChannels**.  
Unlike traditional cloud-based solutions, files never touch a storage server — ensuring **privacy, speed, and security**.

Key highlights:
- Direct P2P file transfer
- End-to-end encryption
- Session-based sharing via link or QR code
- Chunked file transfer for reliability
- Bi-directional sharing in a single session

---

## ✨ Features (MVP)

### 🔗 Direct Peer-to-Peer Sharing
- Files flow directly from **User A → User B**
- No server-side file storage

### 🔒 End-to-End Encryption
- Files encrypted on the sender’s device
- Decrypted only on the receiver’s device
- Uses **Web Crypto API / CryptoJS**
- Protects against eavesdropping and MITM attacks

### 🔑 Session via Link or QR Code
- Backend generates a **one-time session ID**
- Shared via:
  - URL
  - QR Code
- Receiver opens the link to join the session

### 📦 File Chunking
- Large files are split into small chunks
- Improves transfer reliability and performance

### 🔄 Bi-Directional Sharing
- Both peers can **send and receive files simultaneously**
- Single WebRTC session supports two-way transfer

### 📊 Transfer Progress & Activity Log
- Real-time upload/download progress
- Activity log of sent and received files

### 🖥️ Multi-Device Support
- Works on:
  - Desktop
  - Laptop
  - Mobile browsers

### 🎨 Basic UI
- File selection
- Drag & drop support
- File metadata display
- Clear send/receive panels

---

## 🚀 Optional / Future Features

- Unordered data channels for faster preview
- ICE reconnection / tickle ICE on network change
- Built-in chat
- Group file sharing sessions
- BLE / Nearby Share integration

---

## 🔄 Technical Flow

### 1️⃣ Session Creation
1. User A visits the website
2. Browser opens a signaling WebSocket
3. ICE candidates gathered via STUN
4. User A requests a new session
5. Server generates a **session ID**
6. User A receives encrypted session ID
7. User A shares link or QR code

---

### 2️⃣ Session Join
1. User B opens shared link / scans QR
2. Browser opens signaling socket
3. ICE candidates gathered via STUN
4. User B sends SDP Offer + ICE candidates

---

### 3️⃣ Signaling Exchange
- Signaling server relays:
  - SDP Offer / Answer
  - ICE candidates
- **No file data passes through the server**

---

### 4️⃣ Connection Establishment
- ICE connectivity checks performed
- Best candidate pair selected:
  - Direct
  - STUN
  - TURN (fallback)

---

### 5️⃣ Direct P2P Transfer
- WebRTC DataChannel established
- Encrypted chunks sent directly
- Signaling server no longer involved

---

## 🧠 WebRTC Connection Flow

### STEP 1: Signaling (Coordination)

Peer A ── SDP / ICE ──> Signaling Server ──> Peer B  
Peer B ── SDP / ICE ──> Signaling Server ──> Peer A


### STEP 2: Network Discovery (STUN)

Peer ── STUN Server ──> Public IP : Port


### STEP 3: ICE Candidate Selection
- Host candidates
- STUN (srflx)
- TURN relay (fallback)

### STEP 4: P2P Data Transfer

Peer A ======================= Peer B
Encrypted UDP packets


---

## 🏗️ Technical Architecture

### Frontend
- **React.js**
- **Tailwind CSS**
- **WebRTC** (DataChannels)
- **Web Crypto API / CryptoJS**
- **QR Code library**

### Backend (Signaling Server)
- **Node.js**
- **Express.js**
- **WebSocket**
- Handles:
  - Session creation
  - SDP relay
  - ICE candidate exchange

### Networking
- **STUN servers** for NAT traversal
- **TURN servers** as fallback relay

---

## 🖼️ UI Overview

**Main Panels:**
- Send Files
- Transfer Status (Upload / Download progress)
- Receive Files
- Activity Log

Features:
- Drag & drop file selection
- Real-time progress indicators
- Clear send/receive separation

---

## 🔐 Security Considerations

- No file storage on server
- End-to-end encryption
- One-time session IDs
- Short-lived signaling connections
- Server never accesses file contents

---

## 📄 License

This project is open-source and intended for educational and experimental use.

---

## 🤝 Contributions

Contributions, feature requests, and improvements are welcome!  
Feel free to fork the project and submit a pull request.

---

## 📬 Contact

For questions or suggestions, please open an issue or reach out via the repository.

---

🚀 **Fast. Private. Serverless.**
