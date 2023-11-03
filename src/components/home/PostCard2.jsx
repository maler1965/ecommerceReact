//import { useNavigate } from "react-router-dom";
import "./styles/postCard.css";
//import moment from "moment";
import { useSelector } from "react-redux";

const PostCard2 = () => {
  
  const { posts } = useSelector((state) => state);

  //const navigate = useNavigate();
  //console.log(post)

 

  return (
    <div>

      <div className="postid_content">
              {posts?.posts.map((post) => (
              <UserInfo key={post.id} postId={post.id} />,
              <PostIdInfo key={post.id} postId={post.id} />
               ))}
      </div>

   

    </div>
  );
};

export default PostCard2;
