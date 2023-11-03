import "./../postId/styles/userinfo.css";//
import { useNavigate } from "react-router-dom";//

const ProfileInfo = ({ user }) => {

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/user/${user.id}`);
  };

  return (
    <article className="userinfo__content">

      <header className="userinfo__header">
        <img src={user.profileImgUrl} alt="" />
      </header>

      <section className="userinfo__body">

        <h3>
          <p className="userinfo__name" >
            {user.name}
          </p>
          <span onClick={handleCardClick} >{user?.isFollow ? "Dejar de Seguir" :"Seguir" }</span>
        </h3>
        
        {/* TODO: Covertir el nombre en link */}
        <p>{user.description}</p>
        <small>22 oct 2023</small>
      </section>
    </article>
  );
};

export default ProfileInfo;
