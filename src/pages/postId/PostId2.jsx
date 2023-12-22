import { useParams } from "react-router-dom";
import usePostCrud from "../../hooks/usePostCrud";//
import { useEffect } from "react";//
import UserInfo from "../../components/postId/UserInfo";//
import PostIdInfo from "../../components/postId/PostIdInfo";//
import "./postId.css"; //
//import PostId from "./pages/postId/PostId";//
//import PostId from "./PostId";

/* ----------- */




const PostId2 = () => {

  console.log("estoy en inicio de  PostId2.jsx  ")
 

  const { postId2, getPostById2 } = usePostCrud(); // el postId2 seria de los productos generales es decir de los de todos los vendedores o los selectos
  //const { postId, getPostById } = usePostCrud(); // el postId seria del usuario que esta visitando

  //const comment =  localStorage.getItem("comment")               //const { comment } = useComment();
  
  localStorage.setItem("postId2", JSON.stringify(postId2));

  const { id } = useParams();
  console.log({id});  // Es del producto al que se hizo click

 //console.log({comment});

/**/
  useEffect(() => {
    console.log("estoy dentro de useEffect  getPostById2 de  PostId2  ")
    console.log({id});
    getPostById2(id);
    console.log({postId2});
    //localStorage.setItem("postId2", JSON.stringify(postId2));
  }, [  ]); //comment
  
/*
  useEffect(() => {
    console.log({id});
    getPostById(id);
    console.log({postId});
  }, [  ]);
  */


  //getPostById(id);
  //console.log({postId});
  console.log({postId2});


  //postId={postId}

 console.log("estoy en final de  PostId2.jsx  ")

  return (
    <div className="postid_content">
      <UserInfo postId2={postId2}  />
      <PostIdInfo postId2a={postId2}   />
    </div>
  );
};

export default PostId2;
