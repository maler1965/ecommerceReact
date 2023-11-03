import { useNavigate } from "react-router-dom";
//import "./styles/postCard.css";
import moment from "moment";
import { useSelector } from "react-redux";//
import UserInfo from "../../components/postId/UserInfo";//
import PostIdInfo from "../../components/postId/PostIdInfo";//
import { useState } from "react";

const PostCard = ({ post }) => {
  
  //const [info, setInfo] = useState(true);

  const { user } = useSelector((state) => state);
  console.log({user});

  const navigate = useNavigate();
  //console.log(post)



  
  const handleCardClick = () => {

    if (user?.name === null ){
      
      console.log(" Estoy en, if user null")
      navigate(`/user`);
      
    } else {
      
      console.log(" Estoy en, if user no null")
      navigate(`/post/${post.id}`);
      //setInfo(true)
      //console.log({ info })
    }

    
  };

  return (
    <main>
    <article onClick={handleCardClick} className="post"> {/*este onclick cubre toda la tarjeta de datos de cada recuadro del Home */}

      <header className="post__header">
        <img
          className="post__image"
          src={post?.PostImgs[0]?.postImgUrl}
          alt=""
        />
      </header>

      <section className="post__body">
        <h3 className="post__title">{post.title}</h3>
        <p className="post__content">{post?.content?.slice(0, 200)} ...</p>
      </section>

      <section className="post__footer">

        <header className="post__avatar">
          <img
            className="post__avatar-img"
            src={post.user.profileImgUrl}
            alt=""
          />
        </header>

        <article className="post__footer-info">
          <h4 className="post__nameUser">{post.user.name}</h4>
          <p className="post__date">
            {moment(post.updatedAt).format("MM-DD-YYYY")} --{" "}
            {moment(post.updatedAt).startOf("hour").fromNow()}
          </p>
        </article>

        <div className="post__outstanding">
          {post?.outstanding ? (
            <i className="bx bxs-bookmark-star"></i>
          ) : (
            <i className="bx bx-bookmark"></i>
          )}
        </div>

      </section>

{/* 
    {info && (
    <div className="postid_content">
      <UserInfo postId={post.id} />
      <PostIdInfo postId={post.id} />
    </div>)
    }
*/}

    </article>
    
   
    
    </main>
  );
};

export default PostCard;
