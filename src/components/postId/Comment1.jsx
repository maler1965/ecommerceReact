import React, { useState } from "react";//
import "./styles/comment.css";//
import useComment1 from "../../hooks/useComment1";//
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Comment1 = ({ comments1, comments2, user, post }) => {
  
  console.log("estoy en inicio de  Comment1.jsx ")

  const [newComment1, setNewComment1] = useState("");
  
  const { createComment1 } = useComment1();// para traer el comentario actual que se guardo recientemente en el estado local que se exporto en el otro archivo

 
  const navigate = useNavigate();
 

  //const { id } = useParams();//  ????

  console.log({ comments1 }) //
  console.log({ newComment1 })


  let length1 = comments1?.length

  let commentPost = []

  for ( let i = 0; i < length1 ; i++) {
  
  if (comments1?.[i]?.postId  === post?.id ) { 
    commentPost.push(comments1 ?.[i]) 
  }  

   }


  console.log({ user }) //
  console.log({ post })


  const handleSubmit = (event) => {

    event.preventDefault();

    console.log( "Estoy dentro de handleSubmit en comment1.jsx" )
    console.log( "newComment1", newComment1 )
    const textId1 = { textId1: newComment1, postId: post?.id }
    console.log( "textId1", textId1 )
    createComment1(textId1, user?.id);
     
    setNewComment1("");
    //navigate(`/post/${id}`);
  };

//<p className="user" >{comments?.[0].user?.name}: <span>{newComment} </span> </p>

console.log("estoy en final de  Comment1.jsx ")

  return (
    
    <div className="comment-section">

     {/* <h2>Cambiar</h2> */}


      <form className="comment-form" onSubmit={handleSubmit}>

        <label className="pb-2" htmlFor="new-comment">Enviale un mensaje al vendedor para que lleguen a un acuerdo:</label>

        <textarea
          id="new-comment"
          name="new-comment"
          value={newComment1}
          onChange={(event) => setNewComment1(event.target.value)}
          required
        />

        <button type="submit">Enviar</button>

      </form>

     

      <ul className="comments-list">

        {commentPost?.map((comment) => (

          <li key={comment?.id}>
            <span className="user">{comment?.name}: </span>
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

export default Comment1;
