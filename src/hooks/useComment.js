import { useState } from "react";//
//import blogApi from "../api/blog";//
//import { useDispatch } from "react-redux";//
import axios from "axios";
import { useNavigate } from "react-router-dom";


const useComment = () => {

  console.log("estoy en inicio de  useComment.js  ")

  const [comment1a, setComment1a] = useState();
  const [comment1, setComment1] = useState();
  const [comment2, setComment2] = useState();


 // const dispatch = useDispatch();
 const navigate = useNavigate();



  const createComment = (textId, id) => {

    console.log("estoy en inicio de  createComment  ")
    
    /*
    blogApi
      .post(`/comments/${id}`, { text }) */

      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
       
      console.log("estoy en   createComment despues de headers ")

      axios
        .post(`http://localhost:3000/api/v1/comments/${id}`, { textId }, { headers })


      .then((res) => { //aqui se define que es lo que se va a coger de lo que envia la api como respuesta
        console.log("estoy en   createComment despues de then")
        console.log({res});
        console.log(res.data.message);
        console.log(res.data.comment.text);//"se creo"
        console.log(res.data.comment);
        setComment1a(res.data.comment) //guardar comentario actual
        console.log("se creo")
        console.log({ comment1a })
       localStorage.setItem("comment1a", res.data.comment); //cambie
        localStorage.setItem("postId2", JSON.stringify(res.data.comment));
        navigate(`/post/${id}`)
      })
      //.catch((err) => console.log(err));

      .catch(err => {
        console.log("probando comment, estoy en error")
        console.log({err})
        navigate("/login")
        window.alert(err.response.data.message + ". " + "" + "Tiempo de uso terminado, pero no te preocupes, solo da click en 'Entrar' otra vez.")
        }
        ) ;
  };





  const createComment1 = ( textId1, id) => {

    console.log("estoy en inicio de  createComment1  ")

    /*
    blogApi
      .post(`/comments/${id}`, { text }) */

      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };

      console.log("estoy en   createComment1 despues de headers ")
       
      axios
        .post(`http://localhost:3000/api/v1/comments1/${id}`, {  textId1 }, { headers })


      .then((res) => { //aqui se define que es lo que se va a coger de lo que envia la api como respuesta
        console.log("estoy en   createComment1 despues de then ")
        console.log({res});
       // console.log(res.data.message);
        console.log(res.data.comment1);//"se creo"
        setComment1(res.data.comment1) //guardar comentario actual
        console.log("se creo comment1")
        console.log({ comment1 })
        //localStorage.setItem("comment1", res.data.comment1);
        localStorage.setItem("comment1", JSON.stringify(res.data.comment1));
        navigate(`/post/${id}`)
      })
      //.catch((err) => console.log(err));

      .catch(err => {
        console.log("probando comment1, estoy en error")
        console.log({err})
        window.alert(err.response.data.message + ". " + "" + "Tiempo de uso terminado, pero no te preocupes, solo da click en 'Entrar' otra vez.")
        }
        ) ;
  };





  const createComment2 = ( textId2, id) => {

    console.log("estoy en inicio de  createComment2  ")
    /*
    blogApi
      .post(`/comments/${id}`, { text }) */

      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };

      console.log("estoy en   createComment2 despues de headers ")
       
      axios
        .post(`http://localhost:3000/api/v1/comments2/${id}`, {  textId2 }, { headers })


      .then((res) => { //aqui se define que es lo que se va a coger de lo que envia la api como respuesta
        console.log("estoy en   createComment2 despues de then ")
        console.log({res});
       // console.log(res.data.message);
        console.log(res.data.comment2);//"se creo"
        setComment2(res.data.comment2) //guardar comentario actual
        console.log("se creo comment2")
        console.log({ comment2 })
        localStorage.setItem("comment2", res.data.comment2);
        navigate(`/post/${id}`)
      })
      //.catch((err) => console.log(err));

      .catch(err => {
        console.log("probando comment2, estoy en error")
        console.log({err})
        window.alert(err.response.data.message + ". " + "" + "Tiempo de uso terminado, pero no te preocupes, solo da click en 'Entrar' otra vez.")
        }
        ) ;
  };



  const getComment1a = ( id) => {

    console.log("estoy en inicio de  getComment1a  ")

    /*
    blogApi
      .post(`/comments/${id}`, { text }) */
  
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };

      console.log("estoy en   getComment1a despues de headers ")
       
      axios
        .get(`http://localhost:3000/api/v1/comments/`,  { headers }) //${id}
  
  
      .then((res) => { //aqui se define que es lo que se va a coger de lo que envia la api como respuesta
        console.log("estoy en   getComment1a despues de then ")
        console.log({res});
       console.log(res.data);
       console.log(res.data.comments);//"se creo"
        setComment1(res.data.comments) //guardar comentario actual
        console.log("se consigui")
        //console.log(res.data.comments2.text)
        localStorage.setItem("comments", res.data.comments);
       // navigate(`/post/${id}`)
      })
  
  
      //.catch((err) => console.log(err));
  
      .catch(err => {
        console.log("probando comments, estoy en error")
        console.log({err})
        navigate("/login")
        window.alert(err.response.data.message + ". " + "" + "Tiempo de uso terminado, pero no te preocupes getComment1, solo da click en 'Entrar' otra vez.")
        }) ;
  
  };
  
  //localStorage.setItem("comment1", JSON.stringify(comment1));
  console.log({ comment1 })
  console.log({ comment2 })
  console.log({ comment1a })


  console.log("estoy en final de  useComment.js  ")

  return {
    createComment, //al llamar a la funcion useComment puedes desetruccturar esta funcion o el estado de abajo comment
    createComment1,
    createComment2,
    getComment1a,
    comment1a,
    comment1,
    comment2,
  };
};

export default useComment;
