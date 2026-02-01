import { io } from "socket.io-client";

export const socket = io("http://localhost:8080", {
  path: "/ws",
});

export const pc = new RTCPeerConnection({
  iceServers: [],
});

export let dc = null;

export let roomCreated = false;

export function markRoomCreated() {
  roomCreated = true;
}

export function setDC(channel) {  //for creater
  dc = channel;
}


// receiver side  either keep it here or in the start of loading page so that it dosnet form a race condition
pc.ondatachannel = (event) => {
  dc = event.channel;

  dc.onopen = () => {
    console.log("DataChannel OPEN (receiver)");
  };

  dc.onmessage = (e) => {
    console.log("Received:", e.data);
  };
};
