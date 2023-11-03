import { useState } from "react";//
//import blogApi from "../api/blog";//
//import { useDispatch } from "react-redux";//
import axios from "axios";
import { useNavigate } from "react-router-dom";


const useComment = () => {
  const [comment, setComment] = useState();

 // const dispatch = useDispatch();
 const navigate = useNavigate();

  const createComment = (text, id) => {

    /*
    blogApi
      .post(`/comments/${id}`, { text }) */

      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
       
      axios
        .post(`http://localhost:3000/api/v1/comments/${id}`, { text }, { headers })


      .then((res) => { //aqui se define que es lo que se va a coger de lo que envia la api como respuesta
        console.log({res});
        console.log(res.data.message);
        console.log(res.data.comment.text);//"se creo"
        setComment(res.data.comment.text) //guardar comentario actual
        console.log("se creo")
        console.log({ comment })
        localStorage.setItem("comment", res.data.comment.text);
        navigate(`/post/${id}`)
      })
      //.catch((err) => console.log(err));

      .catch(err => {
        console.log("probando comment, estoy en error")
        console.log({err})
        window.alert(err.response.data.message + ". " + "" + "Tiempo de uso terminado, pero no te preocupes, solo da click en 'Entrar' otra vez.")
        }
        ) ;
  };

  return {
    createComment, //al llamar a la funcion useComment puedes desetruccturar esta funcion o el estado de abajo comment
    comment,
  };
};

export default useComment;
