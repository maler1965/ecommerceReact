import React, { useState } from "react";//
import "./styles/comment.css";//
import useComment2 from "../../hooks/useComment2";//
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Comment2 = ({ comments2 }) => {
  

  const [newComment2, setNewComment2] = useState("");
  
  const { createComment2 } = useComment2();// para traer el comentario actual que se guardo recientemente en el estado local que se exporto en el otro archivo

 
  const navigate = useNavigate();
 

  const { id } = useParams();

  console.log({ comments2 }) //
  console.log({ newComment2 })



  const handleSubmit = (event) => {

    event.preventDefault();
    createComment2(newComment2, id);
     
    setNewComment2("");
    
    console.log({ newComment2 })
   // navigate(`/post/${id}`);
  };

//<p className="user" >{comments?.[0].user?.name}: <span>{newComment} </span> </p>


  return (
    
    <div className="comment-section2">

    {/* <h2>Comprar</h2> */} 

{/* */}
      <form className="comment-form" onSubmit={handleSubmit}>

        <label className="pb-2"  htmlFor="new-comment">Enviale un mensaje al vendedor para que lleguen a un acuerdo:</label>

        <textarea
          id="new-comment"
          name="new-comment"
          value={newComment2}
          onChange={(event) => setNewComment2(event.target.value)}
          required
        />

        <button type="submit">Enviar</button>

      </form>

       {/*

      <ul className="comments-list">

        {comments2?.map((comment2) => (

          <li key={comment2.id}>
            <span className="user">{comment2.text}: </span>
            {comment2?.text}          
          </li>         

        ))}
      
     
      <p>
      <span className="comments-peter">Comentario actual: </span>   {comment}
      </p> 

      </ul> */}

    </div>
    
  );
};

export default Comment2;
