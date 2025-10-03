const socket = io();
socket.on("alert", (msg) => {
  console.log("Socket alert:", msg);
});
