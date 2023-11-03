import { useParams } from "react-router-dom";
import usePostCrud from "../../hooks/usePostCrud";//
import { useEffect } from "react";//
import UserInfo from "../../components/postId/UserInfo";//
import PostIdInfo from "../../components/postId/PostIdInfo";//
import "./postId.css"; //
//import PostId from "./pages/postId/PostId";//
import PostId from "./PostId";
/* ----------- */



const PostId2 = () => {
  
/*
  const { postId, getPostById } = usePostCrud();

  const { id } = useParams();
  console.log({id});

  useEffect(() => {
    getPostById(id);
    console.log({postId});
  }, []);

  console.log({postId});

  */

  return (
    <div >
      <PostId  />
    </div>
  );
};

export default PostId2;
