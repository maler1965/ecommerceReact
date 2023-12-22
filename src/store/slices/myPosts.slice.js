import { createSlice } from "@reduxjs/toolkit";//
//import blogApi from "../../api/blog"; //
import axios from "axios";//

console.log("estoy en inicio de  myPosts.slice.js ")


const myPostsSlice = createSlice({
  
  name: 'myPosts',
  initialState: {
    myPosts: localStorage.getItem("myPosts") ?? [],
    },

  reducers: {
    setMyPost: (state, action) => action.payload
  }
})

export const { setMyPost } = myPostsSlice.actions

export default myPostsSlice.reducer



// 
export const getMyPostsThunk = () => (dispatch) => {

  console.log("estoy dentro de  getMyPostsThunk  ")

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  
  axios
    .get("http://localhost:3000/api/v1/posts/me", { headers })
    .then((res) => {
     // socket.emit("new-post", res.data.post);
     console.log("probando myPosts", res.data);
     dispatch(setMyPost(res.data));
    })
    .catch(err => {
      console.log("probando myPosts, estoy en error")
      console.log(err )
      }
      ) ;
};

console.log("estoy en final de  myPosts.slice.js ")
/*
export const getMyPostsThunk = () => (dispatch) => {

  const token = localStorage.getItem("token")
  console.log(" estoy en getmypoststhunk, con token ", token)



  blogApi.get('/posts/me')
  
    .then((res) => {
      console.log("probando myPosts", res.data);
     dispatch(setMyPost(res.data));
    })
    .catch(err => {
      console.log("probando myPosts, estoy en error")
      console.log(err)
      }
      ) 
    
}
*/

//====================================

/*

Este código utiliza Redux Toolkit para crear un slice llamado "myPosts" que maneja el estado de los posts del usuario y proporciona una acción llamada setMyPost para actualizar ese estado. Además, define una función getMyPostsThunk que realiza una solicitud a una API para obtener los posts del usuario y luego actualiza el estado utilizando la acción setMyPost. Aquí está una explicación paso a paso:

Importaciones:

Se importa createSlice de @reduxjs/toolkit para crear un slice Redux.
Se importa blogApi desde un módulo blog que probablemente contiene funciones para realizar solicitudes a una API.
Creación del slice myPostsSlice:

Se crea un slice llamado "myPosts" utilizando createSlice. El estado inicial se define como un array vacío ([]).
Se define una sola acción llamada setMyPost que toma el estado actual y una acción como argumentos y actualiza el estado con el valor de action.payload.
Exportación de la acción:

Se exporta la acción setMyPost para que pueda ser utilizada en otros lugares.
Exportación del reducer:

Se exporta el reducer del slice myPostsSlice que se utilizará para manejar el estado relacionado con los posts del usuario.
getMyPostsThunk:

getMyPostsThunk es una función que utiliza Redux Thunk para realizar una solicitud a la API.
Dentro de la función, se realiza una solicitud GET a la ruta '/posts/me' utilizando blogApi.get('/posts/me'). Esta solicitud probablemente obtiene los posts del usuario.
Si la solicitud tiene éxito (then), se llama a dispatch(setMyPost(res.data)). Esto actualiza el estado utilizando la acción setMyPost con los datos de los posts obtenidos de la respuesta de la API.
Si la solicitud falla (catch), se imprime un mensaje de error en la consola.
En resumen, este código se encarga de manejar el estado de los posts del usuario en una aplicación Redux, proporcionando una forma de obtener los posts del usuario desde una API y actualizar el estado con esos datos.

*/