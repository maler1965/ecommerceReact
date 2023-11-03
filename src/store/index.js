import { configureStore } from "@reduxjs/toolkit";
import posts from "./slices/posts.slice"; //las acciones que queremos que se hagan con los datos que enviamos para que queden como estados globales, son lo que se pone en los slices, que son los archivos con los diferentes estados que queremos dejar disponibles como estados globales
import myPosts from "./slices/myPosts.slice";
import user from "./slices/user.slice";

export default configureStore({  //se integran aqui todos los slices que se han creado, para que sean reconocidos como estados globales
  reducer: {
    posts,
    myPosts,
    user,
  },
});
