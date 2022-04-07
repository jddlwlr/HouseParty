//client side socket.io connection. needs correct port path to server side to function
import { io } from "socket.io-client";
const socket = io("http://localhost:3001");
