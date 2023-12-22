import { useMemo, useEffect, useState } from "react";
import io from "socket.io-client";

export const useSocket = (serverPath) => {

  console.log("estoy en inicio de  useSocket.js  ")
  
  const socket = useMemo( //es para recordar datos, memorisar
    () =>
      io.connect(serverPath, {
        transports: ["websocket"],
      }),
    [serverPath] //esto es lo que recordara,  asi se impide que este repitiendo el renderizado, en este caso mantiene la coneccion
  );

  const [online, setOnline] = useState(false);

  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on("connect", () => {
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
    });
  }, [socket]);

  console.log("estoy en final de  useSocket.js  ")

  return {
    socket,
    online,
  };
};
