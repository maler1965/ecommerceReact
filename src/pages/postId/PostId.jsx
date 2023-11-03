import { useParams } from "react-router-dom";
import usePostCrud from "../../hooks/usePostCrud";//
import { useEffect } from "react";//
import UserInfo from "../../components/postId/UserInfo";//
import PostIdInfo from "../../components/postId/PostIdInfo";//
import "./postId.css"; //
//import useComment from "../../hooks/useComment";//
/* ----------- */



const PostId = () => {
  
  const { postId, getPostById } = usePostCrud();

  const comment =  localStorage.getItem("comment")
  //const { comment } = useComment();

  const { id } = useParams();
  console.log({id});

 console.log({comment});

/**/
  useEffect(() => {
    getPostById(id);
    console.log({postId});
  }, [ comment ]);
  

  //getPostById(id);
  console.log({postId});

  return (
    <div className="postid_content">
      <UserInfo postId={postId} />
      <PostIdInfo postId={postId} />
    </div>
  );
};

export default PostId;
