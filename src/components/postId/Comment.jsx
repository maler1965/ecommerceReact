import React, { useState } from "react";//
import "./styles/comment.css";//
import useComment from "../../hooks/useComment";//
import { useParams } from "react-router-dom";
//import usePostCrud from "../../hooks/usePostCrud";//
import { useNavigate } from "react-router-dom";//


const Comment = ({ comment1bc, comments, comment4, post, user }) => {
  
  console.log("estoy en inicio de  Comment.jsx ")

  const [newComment, setNewComment] = useState("");
  
  const {  createComment, comment1a } = useComment();// para traer el comentario actual que se guardo recientemente en el estado local que se exporto en el otro archivo

  //const { comment1a } = useComment(); //no se puede desestructurar comment1a porque no es una funcion, es un estado local


  //console.log({ comment1a })  comment1a,
  //const {postId2, deletePostById2} = usePostCrud();
 
  const navigate = useNavigate();
 

  //const { id } = useParams();

  console.log({ comments })
  console.log({ comment4 })

  //const   comment1a  = useComment(); 
  //const {  createComment } = useComment();
 console.log({ comment1a })

  let comments5 = []
  //const comments4 = [ ]
if (comment1a) {
  comments5 = comments?.push(comment1a);
  console.log({ comments5 })
}
  
console.log({comment1bc })

let count = 0;

if (!comment1bc){
  comment1bc = [{id:1, name: "CambiaOvende", text: "No hay comentarios", }]
  //let text = [1, 2, 3, 4, 5]
  //comment1bc = [1, 2, 3, 4, 5]
 // count = comment1bc?.push(text);  "No hay comentarios"
}






console.log({ count })

console.log({ comments5 })

//let commentReverse = comments?.reverse()
//lconsole.log({comment1bc })et commentReverse = comment1bc.reverse()

//console.log({commentReverse })

//commentReverse = []
//comments =  []
 console.log({ comments })
 console.log({comment1bc })

  const handleSubmit = (event) => {

    event.preventDefault();

    console.log( "Estoy dentro de handleSubmit en comment.jsx" )
    console.log( "newComment", newComment )
    const textId = { textId: newComment, postId: post?.id }
    console.log( "textId", textId )
    createComment(textId, user?.id);
     
    setNewComment("");
    navigate(`/post/${user?.id}`);
    //window.location.reload();
    
  };

//<p className="user" >{comments?.[0].user?.name}: <span>{newComment} </span> </p>

/*
const handleDeleteClick = () => {

  deletePostById2(user?.id);
  navigate(`/post/${user?.id}`);
 }
*/


console.log("estoy en final de  Comment.jsx ")

  return (
    
    <div className="comment-section">

      <h2 className="font-bold"> COMENTARIOS PÚBLICOS</h2>


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

        {comment1bc?.post?.commens.map((comment) => (

          <li key={comment?.id}>
            <span className="user">{comment?.name}: </span>
            {comment?.text}          
          </li>         

        ))}


      
     {/* 
commentReverse
comment1bc
comment1b
post.commens

      <p>
      <span className="comments-peter">Comentario actual: </span>   {comment}
      </p>  */}

      </ul>

 {/*
      <ul className="comments-list">

        { comments4?.map((comment4) => (

         <li key={comment4?.id}>
         <span className="user">{comment4?.name}: </span>
        {comment4?.text}          
       </li>         

        ))}

      </ul>

       
        */}


    </div>
  );





};

export default Comment;
