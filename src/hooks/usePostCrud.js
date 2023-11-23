import blogApi from "../api/blog";
import { useDispatch } from "react-redux";
import { getAllPostThunk } from "../store/slices/posts.slice";
import { getMyPostsThunk } from "../store/slices/myPosts.slice";
import { useState } from "react";
import axios from "axios";


const usePostCrud = () => {
  const [postId, setPostId] = useState();
  const [postId2, setPostId2] = useState();

  const dispatch = useDispatch();

  
  // POST - Crear un nuevo posts
  const createNewPost = (formData, socket) => {

    //puso aqui el headers porque en api/blog.js no le funcionaba
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    axios
      .post("http://localhost:3000/api/v1/posts", formData, { headers })
      .then((res) => {
        socket.emit("new-post", res.data.post);
        dispatch(getAllPostThunk());
        dispatch(getMyPostsThunk());
      })
      .catch((err) => console.log(err));
  };



  // UPDATE - Actualizar un post
  const updatePostById = (id, data) => {
    blogApi
      .patch(`/posts/${id}`, data)
      .then(() => {
        dispatch(getAllPostThunk());
        dispatch(getMyPostsThunk());
      })
      .catch((err) => console.log(err));
  };
  // DELETE - Borrar un post
  const deletePostById = (id) => {
    blogApi
      .delete(`/posts/${id}`)
      .then(() => {
        dispatch(getAllPostThunk());
        dispatch(getMyPostsThunk());
      })
      .catch((err) => console.log(err));
  };




  // GET - Obtener posts por ID
  const getPostById = (id) => {
   // blogApi
     // .get(`/posts/${id}`)

     const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
  
    
    axios
      .get(`http://localhost:3000/api/v1/posts/${id}`, { headers })

      .then((res) => {
        // socket.emit("new-post", res.data.post);
        console.log("probando getPostById", res.data);
        setPostId(res.data.post);
       })
       .catch(err => {
         console.log("probando getPostById, estoy en error")
         console.log(err)
         }
         )

      //.then((res) => setPostId(res.data.post))
     // .catch((err) => console.log(err));
  };



  const getPostById2 = (id) => {
   
     
     axios
       .get(`http://localhost:3000/api/v1/posts/one/${id}`, )
 
       .then((res) => {
         // socket.emit("new-post", res.data.post);
         console.log("probando getPostById2", res.data);
         setPostId2(res.data.post);
        })
        .catch(err => {
          console.log("probando getPostById2, estoy en error2")
          console.log(err)
          }
          )
 
       //.then((res) => setPostId(res.data.post))
      // .catch((err) => console.log(err));
   };


  return {
    createNewPost,
    updatePostById,
    deletePostById,
    getPostById,
    getPostById2,
    postId,
    postId2,
  };
};

export default usePostCrud; //para usar esta funcion primero se llama por este nombre usePostCrud(), luego se pone cual funcion o estado interno quiere uno importar, de las que se estan retornando
