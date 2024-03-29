import blogApi from "../api/blog";
import { useDispatch } from "react-redux";
import { getAllPostThunk } from "../store/slices/posts.slice";
import { getMyPostsThunk } from "../store/slices/myPosts.slice";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const usePostCrud = () => {

  console.log("estoy en inicio de  usePostCrud.js  ")

  const navigate = useNavigate();


  const [postId, setPostId] = useState();
  const [postId2, setPostId2] = useState();
  const [delComment, setDelComment] = useState();
  const [delCommentAll, setDelCommentAll] = useState();

  console.log({postId2 })
  console.log({postId })

  const dispatch = useDispatch();

  
  // POST - Crear un nuevo posts      setDelCommentAll
  const createNewPost = (formData, socket) => {

    console.log("estoy en inicio de  createNewPost  ")

    //puso aqui el headers porque en api/blog.js no le funcionaba
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    console.log("estoy en   createNewPost despues de headers ")

    axios
      .post("http://localhost:3000/api/v1/posts", formData, { headers })

      .then((res) => {
        console.log("estoy en   createNewPost despues de then "),
        socket.emit("new-post", res.data.post),
        dispatch(getAllPostThunk()),
        dispatch(getMyPostsThunk()),
        console.log("estoy en  createNewPost  de usePostCrud")
      })
      .catch((err) => {
      console.log(err),

      localStorage.setItem("Error_createNewPost_usePostCrud", JSON.stringify(err?.response?.data?.message))
      //navigate("/error")
    }
      
      );
      
  };



  // UPDATE - Actualizar un post
  const updatePostById = (id, data) => {
    console.log("estoy en inicio de  updatePostById  ")

    blogApi
      .patch(`/posts/${id}`, data)
      .then(() => {
        dispatch(getAllPostThunk());
        dispatch(getMyPostsThunk());
        console.log("estoy en updatePostById  de usePostCrud")
      })
      .catch((err) => console.log(err));
  };
  // DELETE - Borrar un post
  const deletePostById = (id) => {
    console.log("estoy en inicio de  deletePostById  ")
    blogApi
      .delete(`/posts/${id}`)
      .then(() => {
        dispatch(getAllPostThunk());
        dispatch(getMyPostsThunk());
        console.log("estoy en deletePostById  de usePostCrud")
      })
      .catch((err) => console.log(err));
  };




    // DELETE - Borrar un post
    const deletePostById2One = (id) => {
      //blogApi

      console.log("estoy en inicio de  deletePostById2One   ")

      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
    
      console.log("estoy en   deletePostById2One despues de headers ")

      axios
      .delete(`http://localhost:3000/api/v1/comments/${id}`, { headers })

       // .delete(`/posts/${id}`)
       // .then(() => {

        .then((res) => {
        console.log("estoy en   deletePostById2One despues de then "),
         // dispatch(getAllPostThunk());
        //  dispatch(getMyPostsThunk());  nouComments

        console.log({res}),
        console.log(res.data.nouComments),
        setDelComment(res.data.nouComments), //guardar comentario actual junto con los demas de este usuario 
        console.log("se creo"),
  
        localStorage.setItem("delComment", JSON.stringify(res.data.nouComments)), 
        localStorage.setItem("postId2D", JSON.stringify(res.data.nouComments)),
       
        console.log("estoy en deletePostById2One  despues de localStorage"),
        navigate(`/post/${id}`)
        })


        .catch((err) => {
        console.log(err)

        localStorage.setItem("Error_deletePostById2One_usePostCrud", JSON.stringify(err?.response?.data?.message))
        //navigate("/error")
        }
        );
    };







     // DELETE - Borrar un post
     const deletePostById2All = (id) => {
      //blogApi

      console.log("estoy en inicio de  deletePostById2All   ")

      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
    
      console.log("estoy en   deletePostById2All despues de headers ")

      axios
      .delete(`http://localhost:3000/api/v1/comments/all/${id}`, { headers })

       // .delete(`/posts/${id}`)
        //.then(() => {
          .then((res) => {

          console.log("estoy en   deletePostById2All despues de then ")
         // dispatch(getAllPostThunk());
        //  dispatch(getMyPostsThunk());

        console.log({res});
        console.log(res.data.nouCommentsAll);
        setDelCommentAll(res.data.nouCommentsAll) //guardar comentario actual junto con los demas de este usuario 
        console.log("se creo")
  
        localStorage.setItem("delCommentAll", res.data.nouCommentsAll); //
       localStorage.setItem("postId2All", JSON.stringify(res.data.nouCommentsAll));

          console.log("estoy en deletePostById2All  despues de dispatch(getAllPostThunk()")
          navigate(`/post/${id}`)

        })


        .catch((err) => {

          console.log(err),
          localStorage.setItem("Error_deletePostById2All_usePostCrud", JSON.stringify(err?.response?.data?.message))
          //navigate("/error")
        }
        );
    };




  // GET - Obtener posts por ID
  const getPostById = (id) => {
   // blogApi
     // .get(`/posts/${id}`)
     console.log("estoy en inicio de  getPostById  ")

     const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
  
    console.log("estoy en   getPostById despues de headers ")
    
    axios
      .get(`http://localhost:3000/api/v1/posts/${id}`, { headers })

      .then((res) => {
        // socket.emit("new-post", res.data.post);
        console.log("probando getPostById de usePostCrud", res.data);
        setPostId(res.data.post);
       })
       .catch(err => {
         console.log("probando getPostById, estoy en error"),
         console.log(err),

         localStorage.setItem("Error_getPostById_usePostCrud", JSON.stringify(err?.response?.data?.message))
         //navigate("/error")
         }
         )

      //.then((res) => setPostId(res.data.post))
     // .catch((err) => console.log(err));
  };



  const getPostById2 = (id) => {
   
    console.log("estoy en inicio de  getPostById2  ")
    console.log("estoy en   getPostById2 ,no tiene headers ")
     
     axios
       .get(`http://localhost:3000/api/v1/posts/one/${id}`, )
 
       .then((res) => {
         // socket.emit("new-post", res.data.post);
         console.log("probando getPostById2 de usePostCrud", res.data ); //.commens
         setPostId2(res.data); //.commens   response
         //navigate(`/user2/${id}`)
        })

        .catch(err => {
          console.log("probando getPostById2, estoy en error2")
          console.log(err)
          console.log(err?.response)
          console.log(err?.response?.data)
          console.log(err?.response?.data?.message)
          localStorage.setItem("commError", JSON.stringify(err?.response?.data?.message));


          dispatch(getAllPostThunk());

          localStorage.setItem("Error_getPostById2_usePostCrud", JSON.stringify(err?.response?.data?.message))
        // navigate("/error")
          //navigate(`/user2/${id}`)
          }
          )
 
       //.then((res) => setPostId(res.data.post))  ///post/${id}
      // .catch((err) => console.log(err));
   };

   console.log({postId2 })
  console.log({postId })
  
console.log("estoy en final de  usePostCrud.js  ")

  return {
    createNewPost,
    updatePostById,
    deletePostById,
    deletePostById2One,
    deletePostById2All,
    getPostById,
    getPostById2,
    postId,
    postId2,
    delComment,
    delCommentAll,
  };
};

export default usePostCrud; //para usar esta funcion primero se llama por este nombre usePostCrud(), luego se pone cual funcion o estado interno quiere uno importar, de las que se estan retornando
