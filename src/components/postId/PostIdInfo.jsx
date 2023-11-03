import { Carrousel } from "./Carrousel";
import Comment from "./Comment";
import "./styles/postidinfo.css";

const PostIdInfo = ({ postId }) => {

  console.log({postId});

  //post.PostImgs?.[0].postImgUrl

  return (
    <section className="postidinfo">
      
      <h2>{postId?.title}</h2>

      <img src={postId?.PostImgs?.[0].postImgUrl} alt="" />

      <Carrousel postImgs={postId?.PostImgs} />

      <p className="postidinfo__content">{postId?.content}</p>

      <Comment comments={postId?.comments} />

    </section>
  );
};

export default PostIdInfo;
