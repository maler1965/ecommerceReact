import { useState } from "react";//
import "./styles/userinfo.css";//
import { useNavigate } from "react-router-dom";//

const UserInfo = ({  postId2 }) => { //postId,

  console.log("estoy en inicio de  UserInfo.jsx ")

  const [isFollow, setIsFollow] = useState(false);

 // console.log({postId});
  console.log({postId2});
  //console.log({postUser});

  const navigate = useNavigate();

  const handleCardClick = () => {
    setIsFollow(true)
    console.log("Estoy siguiendo")
    //navigate(`/user/${postId.user.id}`);
  };

  console.log("estoy en final de  UserInfo.jsx ")

  //

  return (
    <article className="userinfo__content">

      

      <section className="userinfo__body">

<div className="text-2xl">
   

          <p className="userinfo__name" >
            {postId2?.post?.user?.name}
          </p>
</div>

<h3>
   <span onClick={handleCardClick}  >{isFollow ? " Soy su Seguidor" : "Seguir" }</span>
</h3>
         
          
        

       

        {/* */}

        <p>{postId2?.post?.user?.description}</p>

        <small>22 Jul 2023</small>  

      </section>



      <header className="userinfo__header">
        <img src={postId2?.post?.user?.profileImgUrl} alt="" />
      </header>
      
     

    </article>
  );
};

export default UserInfo;
