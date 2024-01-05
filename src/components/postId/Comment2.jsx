import React, { useState } from "react";//
import "./styles/comment.css";//
import useComment2 from "../../hooks/useComment2";//
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Comment2 = ({ comments2, user, post }) => {
  
  console.log("estoy en inicio de  Comment2.jsx ")

  const [newComment2, setNewComment2] = useState("");
  
  const { createComment2 } = useComment2();// para traer el comentario actual que se guardo recientemente en el estado local que se exporto en el otro archivo

 
  const navigate = useNavigate();
 

  //const { id } = useParams();

  console.log({ comments2 }) //
  console.log({ newComment2 })

  



  let length1 = comments2?.length

  let commentPost = []

  for ( let i = 0; i < length1 ; i++) {
  
  if (comments2?.[i]?.postId  === post?.id ) { 
    commentPost.push(comments2?.[i]) 
  }  

   }

   const reverCommentPost = commentPost.reverse()




  const handleSubmit = (event) => {

    event.preventDefault();

    console.log( "Estoy dentro de handleSubmit en comment2.jsx" )
    console.log( "newComment2", newComment2 )
    const textId2 = { textId2: newComment2, postId: post?.id }
    console.log( "textId2", textId2 )
    createComment2(textId2, user?.id);

    const pru = user?.id
     console.log({ textId2 })
     console.log({ pru })

    setNewComment2("");
    
    //
   // navigate(`/post/${id}`);
  };

//<p className="user" >{comments?.[0].user?.name}: <span>{newComment} </span> </p>

console.log("estoy en final de  Comment2.jsx ")

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

      

      <ul className="comments-list">

        {reverCommentPost?.map((comment2) => (

          <li key={comment2?.id}>
            <span className="user">{comment2?.name}: </span>
            {comment2?.text}          
          </li>         

        ))}
      


      {/*

      commentPost

      <p>
      <span className="comments-peter">Comentario actual: </span>   {comment}
      </p> */}

      </ul> 

    </div>
    
  );
};

export default Comment2;
