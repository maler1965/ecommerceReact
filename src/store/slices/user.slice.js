import { createSlice } from "@reduxjs/toolkit";//
import blogApi from "../../api/blog";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: localStorage.getItem("user")   ?? null,
    },

  reducers: {//payload es donde se recoge los datos que se envian para guardar, lo guarda o carga el estado con estos nuevos datos, anula el dato inicial que tenia
   
    setUser: (state, action) => action.payload, 
  
/*
    setUser: (state, action) => {
      localStorage.setItem("user", action.payload)
      state.user = action.payload;
  }, */
  
  },
});

//console.log({setUser})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;




export const loginThunk = (data) => (dispatch) => { //esto es una funcion que se lo hace disponible, mediante exportarlo, para que lo usen desde otra pagina y recibe como parametros los datos que el usuario ha introducido en los input del login, y tambien recibe el dispatch, para hacerlos disponible dentro de la funcion
  blogApi  // a la informacion que tiene esta variable se le une lo que comienza con el punto, y asi se completa la ruta final para hacer la solicitud a la base de datos mediante axion
    .post("/auth/signin", data)
    .then((res) => {
     console.log(res.data.token);
      localStorage.setItem("token", res.data.token);
   //   localStorage.setItem("user", res.data.user);
     dispatch(setUser(res.data.user));
    })
    .catch((err) => {
      console.log(err);
      console.log(err.response.data.message );
      console.log(setUser(err.response.data.message) );
      window.alert(err.response.data.message + ". " + "" + "Si no estas registrado, primero da click en Registro")
    });
};


export const registerThunk = (formData) => (dispatch) => {
  blogApi
    .post("/auth/signup", formData)
    .then((res) => {
      //console.log(res);
      localStorage.setItem("token", res.data.token);
     // localStorage.setItem("user", res.data.user);
      //const pruevaUser = res.data.user
      //console.log({pruevaUser});
      dispatch(setUser(res.data.user));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const renewThunk = () => (dispatch) => {
/**/
  blogApi
    .get("/auth/renew")
    
    .then((res) => {
      //console.log({res});
      localStorage.setItem("token", res.data.token);
      dispatch(setUser(res.data.user));
    })
    .catch((err) => {
      //console.log("Pedro, error");
      console.log(err);
    });
    
};
