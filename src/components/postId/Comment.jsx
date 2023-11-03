import React, { useState } from "react";//
import "./styles/comment.css";//
import useComment from "../../hooks/useComment";//
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Comment = ({ comments }) => {
  

  const [newComment, setNewComment] = useState("");
  
  const { createComment } = useComment();// para traer el comentario actual que se guardo recientemente en el estado local que se exporto en el otro archivo

 
  const navigate = useNavigate();
 

  const { id } = useParams();

 // console.log({ comment })

  const handleSubmit = (event) => {

    event.preventDefault();
    createComment(newComment, id);
     
    setNewComment("");
    navigate(`/post/${id}`);
  };

//<p className="user" >{comments?.[0].user?.name}: <span>{newComment} </span> </p>


  return (
    <div className="comment-section">
      <h2>Comentarios</h2>


      <form className="comment-form" onSubmit={handleSubmit}>

        <label htmlFor="new-comment">Agregar comentario:</label>

        <textarea
          id="new-comment"
          name="new-comment"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
          required
        />

        <button type="submit">Comentar</button>

      </form>

      

      <ul className="comments-list">

        {comments?.map((comment) => (

          <li key={comment.id}>
            <span className="user">{comment?.user?.name}: </span>
            {comment?.text}          
          </li>         

        ))}
      
     {/* 
      <p>
      <span className="comments-peter">Comentario actual: </span>   {comment}
      </p>  */}

      </ul>

    </div>
  );
};

export default Comment;
