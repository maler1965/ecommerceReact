import { useState } from "react";//
//import blogApi from "../api/blog";//
//import { useDispatch } from "react-redux";//
import axios from "axios";
import { useNavigate } from "react-router-dom";


const useComment1 = () => {

  console.log("estoy en inicio de  useComment1.js  ")

  const [comment1, setComment1] = useState();

 // const dispatch = useDispatch();
 const navigate = useNavigate();



  const createComment1 = (textId1, id) => {
    
    console.log("estoy dentro de createComment1 ,inicio")

    /*
    blogApi
      .post(`/comments/${id}`, { text }) */

      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
       
      console.log("estoy dentro de createComment1, despues de headers ")

      axios
        .post(`http://localhost:3000/api/v1/comments1/${id}`, { textId1 }, { headers })


      .then((res) => { //aqui se define que es lo que se va a coger de lo que envia la api como respuesta
        console.log("estoy dentro de createComment1, despues de then ")
        console.log({res});
       // console.log(res.data.message);
       console.log(res.data.comment1.text);//"se creo"
        setComment1(res.data.comment1.text) //guardar comentario actual
        console.log("se creo")
        console.log( res.data.comment1 )
        localStorage.setItem("comment1", res.data.comment1.text);
        navigate(`/post/${id}`)
      })


      //.catch((err) => console.log(err));

      .catch(err => {
        console.log("probando comment1, estoy en error")
        console.log({err})
        navigate("/login")
        window.alert(err.response.data.message + ". " + "" + "Tiempo de uso terminado, pero no te preocupes createComment1, solo da click en 'Entrar' otra vez.")
        }) ;

  };


//===================

const getComment1 = ( id) => {

  console.log("estoy dentro de getComment1 ,inicio")

  /*
  blogApi
    .post(`/comments/${id}`, { text }) */

    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    console.log("estoy dentro de getComment1, despues de headers ")
     
    axios
      .get(`http://localhost:3000/api/v1/comments1/`,  { headers }) //${id}


    .then((res) => { //aqui se define que es lo que se va a coger de lo que envia la api como respuesta
      console.log("estoy dentro de getComment1, despues de then ")
      console.log({res});
     console.log(res.data);
     console.log(res.data.comments1);//"se creo"
      setComment1(res.data.comments1) //guardar comentario actual
      console.log("se consigui")
      //console.log(res.data.comments2.text)
      localStorage.setItem("comments1", res.data.comments1);
     // navigate(`/post/${id}`)
    })


    //.catch((err) => console.log(err));

    .catch(err => {
      console.log("probando comment1, estoy en error")
      console.log({err})
      navigate("/login")
      window.alert(err.response.data.message + ". " + "" + "Tiempo de uso terminado, pero no te preocupes getComment1, solo da click en 'Entrar' otra vez.")
      }) ;

};

console.log({comment1})

//==================

console.log("estoy en final de  useComment1.js  ")

  return {
    createComment1, //al llamar a la funcion useComment puedes desetruccturar esta funcion o el estado de abajo comment
    comment1,
    getComment1,
  };
  
};

export default useComment1;
