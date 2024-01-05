import { useParams } from "react-router-dom";
import usePostCrud from "../../hooks/usePostCrud";//
import { useEffect } from "react";//
import UserInfo from "../../components/postId/UserInfo";//
import PostIdInfo from "../../components/postId/PostIdInfo";//
import "./postId.css"; //
import useComment from "../../hooks/useComment";//
import useComment1 from "../../hooks/useComment1";//
//import PostId from "./pages/postId/PostId";//
//import PostId from "./PostId";

/* ----------- */




const PostId2 = () => {

  console.log("estoy en inicio de  PostId2.jsx  ")
 

  const { postId2, getPostById2 } = usePostCrud(); // el postId2 seria de los productos generales es decir de los de todos los vendedores o los selectos
  //const { postId, getPostById } = usePostCrud(); // el postId seria del usuario que esta visitando

  console.log({ postId2});

  //================
 // const {  comment1, getComment1 } = useComment1();// cambiar a postId
 // const {   comment1b,  getComment1a } = useComment(); // cambiar a postId
 

  //console.log({ comment1});
//================


  //const comment =  localStorage.getItem("comment")               //const { comment } = useComment();
  let change = postId2  //  postId2 contiene todos los comentarios publicos el post no tiene los comentarios
  console.log({change});
  

  if (postId2){
     localStorage.setItem("postId2", JSON.stringify(postId2));
  }

  const post = JSON.parse(localStorage.getItem("postProduct")); //se lo convierte de json a javascript si se lo guardo como json
  console.log({post});
  
  let commError = JSON.parse(localStorage.getItem("commError"))
  console.log({commError});

  const { id } = useParams();
  console.log({id});  // Es del producto al que se hizo click

 //console.log({comment});



 
 //let comment3 = []

 // if (comment1) {
 //   comment3 =  localStorage.getItem("comments1"); //JSON.parse(localStorage.getItem("comment1"));
 // }


/* 
 console.log({comment1b});
*/
 let comment1bc = []

 if (!postId2){

 comment1bc = null; 

 } else {
   comment1bc = postId2 //comment1b
 }




  useEffect(() => { // Esta parte del codigo lo deja para el final, despues de haber hecho lo demas recien lo realiza
    console.log("estoy dentro de useEffect  getPostById2 de  PostId2  ")
    console.log({id});
    getPostById2(id); // Se va al otro archivo, regresa despues de hacer la peticion, el get, pero no recibe todabia la promesa, el then.
    //getComment1a(id);
    console.log({postId2}); // regresa aqui, pero aun no hay datos porque aun no recibe la promesa, y se va a continuar con lo que falta de los otros archivos y a RECIVIR LA PROMESA, el then. LUEGO REGRESA A INICIAR TODO EL ARCHIVO  PostId2.jsx DESDE EL INICIO
  }, [  ]); //comment



/*
 if (!comment1){
    getComment1(id);
  }
*/

//================



 /* comment1b*/
 //comment1bc = localStorage.getItem("postId2b")
/*
   if(!comment1bc){

   }
*/
 //comment1b = JSON.parse(localStorage.getItem("postId2b"))


 //localStorage.setItem("postId2", JSON.stringify(postId2));



 let delComment = JSON.parse(localStorage.getItem("postId2D"))


/*
  useEffect(() => {
    console.log({id});
    getPostById(id);
    console.log({postId});
  }, [  ]);
  */

  if(!postId2){
    change = {post: post }  //commError
    console.log({postId2});
  }

  //getPostById(id);
  //console.log({postId});
 // console.log({postId2});
  console.log({change});
  console.log({comment1bc});

  //postId={postId}

  if (delComment){
    comment1bc = delComment
    delComment = []
  }

//postId2

/*
useEffect(() => {
  console.log("estoy dentro de useEffect Comment1 de  PostId2  ")
  getComment1(id);
 // getPostById2(generalId);
  console.log({id});
}, [  ]);//comment3

*/

 console.log("estoy en final de  PostId2.jsx  ")


 //comment1={comment1}  comment1bc={comment1bc}

  return (
    <div className="postid_content">
      <UserInfo postId2={change}  />
      <PostIdInfo postId2a={change} comment1bc={comment1bc} post={post} />
    </div>
  );
};

export default PostId2;
