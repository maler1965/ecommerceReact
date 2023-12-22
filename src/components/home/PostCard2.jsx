//import { useNavigate } from "react-router-dom";
import "./styles/postCard.css";
//import moment from "moment";
import { useSelector } from "react-redux";
import UserInfo from "../../components/postId/UserInfo";//
import PostIdInfo from "../../components/postId/PostIdInfo";//

const PostCard2 = () => {
  
  console.log("estoy en inicio de  PostCard2.jsx ")

  const { posts } = useSelector((state) => state);

  //const navigate = useNavigate();
  console.log({posts})

 //<PostIdInfo key={post.id} PostImgs={post.postImgs.postImgUrl} postUser={post.user} />

 console.log("estoy en final de  PostCard2.jsx  ")

  return (
    <div>

      <div className="postid_content">
              {posts?.posts.map((post) => (
              <UserInfo key={post.id} postId={post.id}  postUser={post.user}  />
              
               ))}
      </div>

   

    </div>
  );
};

export default PostCard2;
