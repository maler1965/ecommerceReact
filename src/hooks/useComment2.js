import { useState } from "react";//
//import blogApi from "../api/blog";//
//import { useDispatch } from "react-redux";//
import axios from "axios";
import { useNavigate } from "react-router-dom";


const useComment2 = () => {

  console.log("estoy en inicio de  useComment2.js  ")

  const [comment2, setComment2] = useState();

 // const dispatch = useDispatch();
 const navigate = useNavigate();


  const createComment2 = (textId2, id) => {

    console.log("estoy dentro de createComment2 ,inicio")

    /*
    blogApi
      .post(`/comments/${id}`, { text }) */

      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };

      console.log("estoy dentro de createComment2 ,despues de headers")
       
      axios
        .post(`http://localhost:3000/api/v1/comments2/${id}`, { textId2 }, { headers })


      .then((res) => { //aqui se define que es lo que se va a coger de lo que envia la api como respuesta
        console.log("estoy dentro de createComment2 ,despues de then")
      console.log({res});
       // console.log(res.data.message);
       console.log(res.data.comment2.text);//"se creo"
        setComment2(res.data.comment2.text) //guardar comentario actual
        console.log("se creo")
        console.log( res.data.comment2 )
        localStorage.setItem("comment2", res.data.comment2.text);
        navigate(`/post/${id}`)
      })


      //.catch((err) => console.log(err));

      .catch(err => {
        console.log("probando comment2.jsx en createComment2, estoy en error")
        console.log({err})
        navigate("/login")
        window.alert(err.response.data.message + ". " + "" + "Tiempo de uso terminado, pero no te preocupes (useComment2.js), solo da click en 'Entrar' otra vez.")
        //navigate("/login")
      }) ;

  };


//===================

const getComment2 = ( id) => {

  console.log("estoy dentro de getComment2 ,inicio")
  /*
  blogApi
    .post(`/comments/${id}`, { text }) */

    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
     
    console.log("estoy dentro de getComment2 ,despues de headers")

    axios
      .get(`http://localhost:3000/api/v1/comments2/`,  { headers }) //${id}


    .then((res) => { //aqui se define que es lo que se va a coger de lo que envia la api como respuesta
      console.log("estoy dentro de getComment2 ,despues de then")
      console.log({res});
     console.log(res.data);
     console.log(res.data.comments2);//"se creo"
      setComment2(res.data.comments2) //guardar comentario actual
      console.log("se consigui")
      //console.log(res.data.comments2.text)
      localStorage.setItem("comment2", res.data.comment2);
     // navigate(`/post/${id}`)
    })


    //.catch((err) => console.log(err));

    .catch(err => {
      console.log("probando comment2.jsx  en getComment2, estoy en error")
      console.log({err})
      navigate("/login")
      window.alert(err.response.data.message + ". " + "" + "Tiempo de uso terminado, pero no te preocupes kelly, solo da click en 'Entrar' otra vez.")
      //navigate("/login")
    }) ;

};

console.log({comment2})

//==================


console.log("estoy en final de  useComment2.js  ")

  return {
    createComment2, //al llamar a la funcion useComment puedes desetruccturar esta funcion o el estado de abajo comment
    comment2,
    getComment2,
  };
  
};

export default useComment2;
