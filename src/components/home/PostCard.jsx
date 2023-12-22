import { useNavigate } from "react-router-dom";
import "./styles/postCard.css";
import moment from "moment";
import { useSelector } from "react-redux";//
import UserInfo from "../../components/postId/UserInfo";//
import PostIdInfo from "../../components/postId/PostIdInfo";//
import { useState } from "react";//
import usePostCrud from "../../hooks/usePostCrud";//



const PostCard = ({ post }) => {
  
console.log("estoy en inicio de  PostCard.jsx  ")


  //const [info, setInfo] = useState(true);


  //localStorage.setItem("postProduct", JSON.stringify(post)); // se lo guarda como json para ser recogido como json y convertido a javascript

  const { user } = useSelector((state) => state);
  console.log({user});


  /*
  let user1 = user

  if (!user?.id) {
    user1 = JSON.parse(localStorage.getItem("user"));//se lo convierte de json 
    console.log({user1});
  }

    user = user1
    */

  const { postId2, getPostById2 } = usePostCrud(); // el postId2 seria de los productos generales es decir de los de todos los vendedores o los selectos
  localStorage.setItem("postId2", JSON.stringify(postId2)); // se lo guarda como json

  const navigate = useNavigate();
  //console.log(post)

  let userNowId = user?.id
  let productId = post?.id
  let userProductId = post?.user?.id
  //let userCommentId = 
  
  console.log({userNowId}) // id del visitante
  console.log(productId) //id del producto al que se hizo click
  console.log(userProductId) // id del dueno del producto
    //id del usuario que hizo el comentario, anteriormente era el usuario visitante

  
  const handleCardClick = () => {

    if (!userNowId ){
      
      console.log(" Estoy en, if user null")
      navigate(`/user2/${productId}`);  // este id es el general, del producto al que se hizo click
      
    } else {
      localStorage.setItem("postProduct", JSON.stringify(post)); // se lo guarda como json
      console.log(" Estoy en, if user no null")
      getPostById2(`${productId}`);
      navigate(`/post/${userNowId}`); //este id es el del visitante

      

      //setInfo(true)
      //console.log({ info })
    }

    
  };

  
console.log({ post})
//const usermi = post.user
//console.log({ usermi})

console.log("estoy en final de  PostCard.jsx  ")

  return (
    <main className="truncate p-2 w-[300px] h-[500px]">
      
    <article onClick={handleCardClick} className="post"> {/*este onclick cubre toda la tarjeta de datos de cada recuadro del Home */}

      <header className="post__header">
        <img
          className="post__image"
          src={post?.PostImgs[0]?.postImgUrl}
          alt=""
        />
      </header>

      <section className="p-2"> {/* post__body  */}
        <h3 className="post__title">{post.title}</h3>


      <div className="bg-violet-300 p-2 rounded-md w-[270px] h-[120px] "> {/* post__content  */}
          <p className="whitespace-normal word-break-break-all  " >{post?.content?.slice(0, 200)} ...</p>
      </div>
       
      </section>


{/* ============================================== */}

      <section className="post__footer">

        <p className="post__date">
            {moment(post.updatedAt).format("MM-DD-YYYY")} --{" "}
            {moment(post.updatedAt).startOf("hour").fromNow()}
        </p>


{/*
        <header className="post__avatar">
          <img
            className="post__avatar-img"
            src={post.user.profileImgUrl}
            alt=""
          />
        </header>

        <article className="post__footer-info">
          <h4 className="post__nameUser">{post.user.name}</h4>

          <p> {post.user.description}</p>
 
          <p className="post__date">
            {moment(post.updatedAt).format("MM-DD-YYYY")} --{" "}
            {moment(post.updatedAt).startOf("hour").fromNow()}
          </p>


        </article>
*/}

{/* 
        <div className="post__outstanding">
          {post?.outstanding ? (
            <i className="bx bxs-bookmark-star"></i>
          ) : (
            <i className="bx bx-bookmark"></i>
          )}
        </div>
*/}

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
