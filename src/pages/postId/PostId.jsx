import { useParams } from "react-router-dom";
import usePostCrud from "../../hooks/usePostCrud";//
import { useEffect } from "react";//
import UserInfo from "../../components/postId/UserInfo";//
import PostIdInfo from "../../components/postId/PostIdInfo";//
import "./postId.css"; //
import useComment2 from "../../hooks/useComment2";//
import useComment1 from "../../hooks/useComment1";//
//import useComment from "../../hooks/useComment";//
/* ----------- */


//

const PostId = () => {
  
 

  const {  comment2, getComment2 } = useComment2();
  const {  comment1, getComment1 } = useComment1();
  //const { postId, getPostById } = usePostCrud(); // el postId2 seria de los productos generales es decir de los de todos los vendedores o los selectos

//el postId seria del usuario que esta visitando

   const {postId2, getPostById2} = usePostCrud();

  const post = JSON.parse(localStorage.getItem("postProduct"));//se lo convierte de json a javascript si se lo guardo como json

  //const post = localStorage.getItem("postProduct")

  //const jsonPost = JSON.parse( post);
  //console.log({jsonPost});

  //const postId2 = JSON.parse(localStorage.getItem("postId2"))

  const comment =  localStorage.getItem("comment2")
  const comment3 =  localStorage.getItem("comment1")
  //const { comment } = useComment();

  const { id } = useParams(); // este id es del visitante
  console.log({id});  //2

const generalId = post?.id
console.log({generalId}); //id general del producto del que se hizo click

console.log(post?.user?.id) //id del dueno del producto

// console.log({comment});

/**/
  useEffect(() => {
    getComment2(id);
    getPostById2(generalId);
    console.log({id});
  }, [ comment ]); //comment2

  //getPostById2(id);

  useEffect(() => {
    getComment1(id);
    getPostById2(generalId);
    console.log({id});
  }, [ comment3 ]);

  //getPostById(id);
  console.log({comment2});
  console.log({postId2});

  return (
    <div className="postid_content">
      <UserInfo comment1={comment1} comment2={comment2} postId2={postId2}  post={post} />
      <PostIdInfo comment1={comment1} comment2={comment2} postId2={postId2} post={post} />
    </div>
  );
};

export default PostId;
