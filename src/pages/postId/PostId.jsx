import { useParams } from "react-router-dom";
import usePostCrud from "../../hooks/usePostCrud";//
import { useEffect } from "react";//
import UserInfo from "../../components/postId/UserInfo";//
import PostIdInfo from "../../components/postId/PostIdInfo";//
import "./postId.css"; //
import useComment2 from "../../hooks/useComment2";//
import useComment1 from "../../hooks/useComment1";//
import useComment from "../../hooks/useComment";//
/* ----------- */

//


const PostId = () => {
  
  console.log("estoy en inicio de  PostId.jsx  ")
  

  const {  comment2, getComment2 } = useComment2();
  const {  comment1, getComment1 } = useComment1();
  const {  comment1a, getComment1a } = useComment();
  //const { postId, getPostById } = usePostCrud(); // el postId2 seria de los productos generales es decir de los de todos los vendedores o los selectos

//el postId seria del usuario que esta visitando

   const {postId2, getPostById2} = usePostCrud();

  const post = JSON.parse(localStorage.getItem("postProduct"));//se lo convierte de json a javascript si se lo guardo como json
  //const postIdNew = JSON.parse(localStorage.getItem("postId2"));//se lo convierte de json a javascript si se lo guardo como json

  //const post = localStorage.getItem("postProduct")    // postId2

  //const jsonPost = JSON.parse( post);
  //console.log({jsonPost});

  //const postId2 = JSON.parse(localStorage.getItem("postId2"))

  const comment =  localStorage.getItem("comment2")
let comment3 = []
  if (comment1) {
    comment3 =  localStorage.getItem("comment1"); //JSON.parse(localStorage.getItem("comment1"));
  }
  
   let comment4 = []
  // comment4 = JSON.parse(localStorage.getItem("postId2"));//se lo convierte de json 
   //const commentPed = comment4.push(JSON.parse(localStorage.getItem("postId2")));

  //const commentPed = comment4.push( localStorage.getItem("postId2"));

 //const comment4 = []


  const { id } = useParams(); // este id es del visitante
  console.log({id});  //2
  console.log({comment4});
  console.log({comment1a});

const generalId = post?.id
console.log({generalId}); //id general del producto del que se hizo click

console.log(post?.user?.id) //id del dueno del producto

// console.log({comment});
//getComment1a(id);


/*
console.log("estoy fuera de if comment1a de PostId  ")

  if (comment4) {
    console.log("estoy dentro de if comment1a de PostId  ")
    comment4 = JSON.parse(localStorage.getItem("postId2"));//se lo convierte de json 
    getPostById2(generalId);
  }



*/
  useEffect(() => {
    console.log("estoy dentro de useEffect Comment2 de  PostId  ")
    getComment2(id);
    getPostById2(generalId);
    console.log({id});
  }, [ comment ]); //comment2

  //getPostById2(id);

  useEffect(() => {
    console.log("estoy dentro de useEffect Comment1 de  PostId  ")
    getComment1(id);
    getPostById2(generalId);
    console.log({id});
  }, [ comment3 ]);


  useEffect(() => {
    console.log("estoy dentro de useEffect Comment4 de  PostId  ")
    getComment1a(id);
    getPostById2(generalId);
    console.log({id});
  }, [  ]); //comment4  commentPed > 0 

  //getPostById(id); comment1a


  console.log({comment});
  console.log({comment1});
  console.log({comment2});
  console.log({comment3});
  console.log({comment4});
  console.log({postId2});
  console.log({comment1a});

console.log("estoy en final de  PostId.jsx  ")

  return (
    <div className="postid_content">
      <UserInfo comment1={comment1} comment2={comment2} postId2={postId2}  post={post} />
      <PostIdInfo comment1={comment1} comment4={comment4} comment3={comment3} comment2={comment2}  postId2a={postId2} post={post} />
    </div>
  );
};

export default PostId;
