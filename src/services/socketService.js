import { io } from 'socket.io-client';

const socket = io("wss://ws.bitpin.ir/");

export default socket;
