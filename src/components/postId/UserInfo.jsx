import { useState } from "react";
import "./styles/userinfo.css";
import { useNavigate } from "react-router-dom";

const UserInfo = ({ postId }) => {

  const [isFollow, setIsFollow] = useState(false);

  console.log({postId});

  const navigate = useNavigate();

  const handleCardClick = () => {
    setIsFollow(true)
    console.log("Estoy siguiendo")
    //navigate(`/user/${postId.user.id}`);
  };

  return (
    <article className="userinfo__content">

      <header className="userinfo__header">
        <img src={postId?.user?.profileImgUrl} alt="" />
      </header>

      <section className="userinfo__body">

        <h3>

          <p className="userinfo__name" >
            {postId?.user?.name}
          </p>

          <span onClick={handleCardClick}  >{isFollow ? " Soy su Seguidor" : "Seguir" }</span>
          
        </h3>

        {/* TODO: Covertir el nombre en link */}
        <p>{postId?.user?.description}</p>
        <small>22 Jult 2020</small>

      </section>

    </article>
  );
};

export default UserInfo;
