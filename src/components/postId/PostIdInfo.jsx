import { useState, useEffect  } from "react";
//import { Carrousel } from "./Carrousel";
import Comment from "./Comment";
import Comment2 from "./Comment2";
import Comment1 from "./Comment1";
import "./styles/postidinfo.css";
import { useNavigate } from "react-router-dom";//
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";//
import useComment from "../../hooks/useComment";//
import usePostCrud from "../../hooks/usePostCrud";//



const PostIdInfo = ({  comment1bc, comment2, comment1, comment4, postId2a, post, comment3 }) => { //

  console.log("estoy en inicio de  PostIdInfo.jsx ")// postId2a

  const [newComment2, setNewComment2] = useState("");
  const [newComment3, setNewComment3] = useState("");
  const { createComment1 } = useComment();// para traer el comentario actual
  const { createComment2 } = useComment();// para traer el comentario actual

  const [sameUser, setSameUser] = useState(false);

  const [sale, setSale] = useState(false);
  const [sale2, setSale2] = useState(false);

  const [cambiarActivo, setCambiarActivo] = useState(false);
  const [comprarActivo, setComprarActivo] = useState(false);

  const {postId2, deletePostById2One, deletePostById2All} = usePostCrud();

  let { user } = useSelector((state) => state);
  //const moreUser = user.user.id
  console.log({user});
 // console.log({moreUser});

 /*
 let user1 = user

 if (!comment1bc) {
 comment1bc = postId2a 
 }
*/
   //user = user1


/*
  const { posts } = useSelector((state) => state);
  console.log({ posts })



  if (!user){

    if(posts){

    }

  }

  */

  console.log({ post })

  //let pedro = []
const productId = post?.id

  console.log({comment2});
  console.log({comment1});
  console.log({postId2});
  console.log({productId}); //console.log({postUser});

  const ped = postId2?.post?.commens
  console.log({ped })

  console.log({newComment2 })

  const userPostId2 = postId2?.post.id
  console.log({userPostId2 })
  const userPostId3 = postId2?.post.user.id
  console.log({userPostId3 })



  useEffect(() => {
  if (user?.id !== post?.user.id){
    setSameUser(true)
    console.log("dentro de no igual usuario")
  }
  }, [ user ]);


// primer filtro



  const comment1a = []
  const comment2a = []
  let length1 = comment1?.length
  let length2 = comment2?.length


  for ( let pe = 0; pe < length1 ; pe++) {

  if (comment1[pe]?.userId !== post?.user.id){   //los comentarios que son del mismo usuario no pasa, pues saldria repetido, ya salen arriba de estos comentarios
    comment1a.push(comment1[pe])
    console.log("dentro de igual usuario comment1[pe]")
      }

  }

  for ( let pi = 0; pi < length2 ; pi++) {

    if (comment2[pi]?.userId !== post?.user.id){   
     comment2a.push(comment2[pi])
      console.log("dentro de igual usuario comment2[pi]")
        }
  
    }


// segundo filtro

  const answer1 = []
  const answer2 = []
  let length1a = comment1a?.length   // comment1a
  let length2a = comment2a?.length  //comment2a

  console.log({length1a});
  console.log({length2a});

  const postMy = post?.id 
  console.log({postMy});



  for ( let px = 0; px < length1a ; px++) {

   if (comment1a[px]?.postId === post?.id ) {  //solo se guardan los comentarios que no son iguales
    answer1.push(comment1a[px])
   }  

  }


  for ( let py = 0; py < length2a ; py++) {

    if (comment2a[py]?.postId === post?.id ) {
     answer2.push(comment2a[py])
    }  
 
   }


   console.log({answer1 })
   console.log({answer2 })

//=============================================




/*


 

const testId = user?.id

let commentTotal3 = [ ]
let commentTotal = [];

let count = 0
let index1 = comment1?.length - 1 //son los ultimos mensajes de cambio, solo el indice
let index2 = comment2?.length - 1 //son los ultimos mensajes de compra, solo el indice

let e = 0
let d = 0



for ( let i = 0; i < 10 ; i++) {


const date1 = comment1?.[index1 - e]?.createdAt; //son los ultimos, la fecha total
const date2 = comment2?.[index2 - d]?.createdAt; //son los ultimos, la fecha total

//-----

 const year1 = date1?.slice(0, 4);//ano


 const month1 = date1?.slice(5, 7);//mes
 

 const day1 = date1?.slice(8, 10);//dia
 

 const hour1 = date1?.slice(11, 13);//hora
 

 const minute1 = date1?.slice(14, 16);//minuto


 const second1 = date1?.slice(17, 19);//seg


//------------
const year2 = date2?.slice(0, 4); //ano


const month2 = date2?.slice(5, 7);//mes
 

 const day2 = date2?.slice(8, 10);//dia
 

 const hour2 = date2?.slice(11, 13);//hora
 

 const minute2 = date2?.slice(14, 16);//minuto
 

 const second2 = date2?.slice(17, 19);//seg
 

//---------






if (year1 > year2) {
commentTotal.push(comment1?.[index1 - e])
 count = 1
} else {

  if (year1 < year2) {
     commentTotal3.push(comment2?.[index2 - d])
     count = 2
    } else {

if (month1 > month2) {
 commentTotal.push(comment1?.[index1 - e])
   count = 1
  } else {
  
    if (month1 < month2) {
       commentTotal3.push(comment2?.[index2 - d])
       count = 2
      } else {

if (day1 > day2) {
    commentTotal.push(comment1?.[index1 - e])
    count = 1
    } else {
    
      if (day1 < day2) {
       commentTotal3.push(comment2?.[index2 - d])
         count = 2
        } else {

if (hour1 > hour2) {
      commentTotal3.push(comment1?.[index1 - e])
       count = 1
      } else {
      
        if (hour1 < hour2) {
          commentTotal.push(comment2?.[index2 - d])
          count = 2
          } else {

if (minute1 > minute2) {
        commentTotal.push(comment1?.[index1 - e])
        count = 1
        } else {
        
          if (minute1 < minute2) {
            commentTotal3.push(comment2?.[index2 - d])
             count = 2
            } else {

 if (second1 > second2) {
          commentTotal.push(comment1?.[index1 - e])
           count = 1
          } else {
          
            if (second1 < second2) {
              commentTotal3.push(comment2?.[index1 - d])
              count = 2
              }
          
          }



            }
        
        }


       



          }
      
      }

      





        }
    
    }
 
    


        
      }

       

  
  }

 



    }






}



          //--------
         

          if (count === 1 ) {
              e = e + 1 // para bajar el indice
          } else {
              d = d + 1  // para bajar el indice

          }

}



*/


let length1b = comment1?.length


let commentTotal1 = []

  for ( let f = 0; f < length1b ; f++) {
  
  if (comment1?.[f]?.userId === user?.id ) { //commentTotal
    commentTotal1.push(comment1?.[f])  //commentTotal
  }  

   }

   console.log({commentTotal1 })

   let commentTotal1a = []

   for ( let fi = 0; fi < length1b ; fi++) {
  
    if (commentTotal1?.[fi]?.postId === post?.id) { //commentTotal
      commentTotal1a.push(commentTotal1?.[fi])  //commentTotal
    }  
  
     }

     console.log({commentTotal1a })
  const reverse1 = commentTotal1a.reverse()

//=============
let length2b = comment2?.length

   let commentTotal2 = []

  for ( let f2 = 0; f2 < length2b ; f2++) {
  
  if (comment2?.[f2]?.userId === user?.id ) {  //commentTotal3
    commentTotal2.push(comment2?.[f2]) //commentTotal
  }  

   }


   let commentTotal2a = []

  for ( let fe = 0; fe < length2b; fe++) {
  
  if (commentTotal2?.[fe]?.postId === post?.id ) {  //commentTotal3
    commentTotal2a.push(commentTotal2?.[fe]) //commentTotal
  }  

   }


   console.log({commentTotal2a })
   const reverse2 = commentTotal2a.reverse()
          
//==========================================================

  //post.PostImgs?.[0].postImgUrl
  //========

  const navigate = useNavigate();

  // <h2>{postUser?.name}</h2>
  //  <img src={postUser?.profileImgUrl} alt="" />

  // <hr />

 let pedro = user?.id
    console.log({pedro})



  const handleCardClick = () => {

    setCambiarActivo(true);
    setComprarActivo(false);
    
    if (!pedro ){
      
      console.log({user});
      console.log(" Estoy en PostIdInfo, if user null")
      //dispatch(getMyPostsThunk());
     // return <Navigate to="/login" />;
      navigate(`/login`);
    } 

    setSale(true)
    console.log("Estoy cambiando")
    setSale2(false)   
  };




  const handleCardClick2 = () => {
   // navigate(`/user/${postId2.user.id}`);
   setComprarActivo(true);
   setCambiarActivo(false);

   if (!pedro){
    console.log({user});
    console.log(" Estoy en PostIdInfo, if user null")
    //dispatch(getMyPostsThunk());
    //return <Navigate to="/login" />;
    navigate(`/login`);
    
  } 

    setSale2(true)
    console.log("Estoy comprando")
    setSale(false)

  };


  //commentTotal?.slice(0).reverse().map((commentTotal)

  
const check2 = user?.id
 console.log({ check2})
 console.log({ sameUser})



 const handleSubmit = (event) => {

  event.preventDefault();

  const textId1 = { textId1: newComment2, postId: post?.id }
  console.log( "textId1", textId1 )
  createComment1(textId1, user?.id);

  //createComment1(newComment2, check2);
   
  setNewComment2("");
  navigate(`/post/${check2}`);
};

const handleSubmit2 = (event) => {

  event.preventDefault();

  const textId2 = { textId2: newComment3, postId: post?.id }
  console.log( "textId2", textId2 )
  createComment2(textId2, user?.id);

  //createComment2(newComment3, check2);
   
  setNewComment3("");
  navigate(`/post/${check2}`);z
};

const handleDeleteClick = () => {

  deletePostById2One(user?.id);
  console.log("userId", user?.id )
  //navigate(`/user2/${productId}`);
  navigate(`/post/${user?.id}`);
  //postId2a = []
 }

 const handleDeleteClickAll = () => {

  deletePostById2All(user?.id);
  console.log("userId", user?.id )
 // navigate(`/user2/${productId}`);
  navigate(`/post/${user?.id}`);
 // postId2a = []
 }

 //deletePostById2All

 console.log("estoy en final de  PostIdInfo.jsx ")

 console.log({ comment1})
 console.log({comment1bc })

//

  return (
    <div>
    <section className="postidinfo">
      <hr />
     
        <div className="grid-col-[repeat(auto-fill,_300px)] mx-auto max-w-[1024px] p-4">

         <div>

          <div  className="text-center p-2 m-4 text-2xl">
            <h2>{postId2a?.post?.title}</h2>
          </div>
           
          <div className=" flex justify-center text-center text-2xl">
            <img src={postId2a?.post?.PostImgs?.[0].postImgUrl} alt="" /> 
          </div>
              

               {/* <Carrousel postImgs={PostImgs} />

              <p className="postidinfo__content">{postUser?.description}</p>*/} 
          </div>


        
          <div className="m-4 m-8 px-4">
            {/*  <h2>hola</h2>*/}
             
              <p> {postId2a?.post?.content}</p>

              <h2>Precio:</h2>

              {/*
              <div className="flex">
                <button onClick={handleCardClick} className="p-2 m-2 bg-black/20">Cambiar</button>
                <button onClick={handleCardClick2} className="p-2 m-2 bg-black/20">Comprar</button>
              </div>
              */} 

              




             




              {check2? 
              
              
              <div className="bg-black/90 m-2 p-2 rounded-md">








              <span  >{ sameUser?  
                 
                 





              <div className=" bg-white mx-4 mb-2 text-center  p-2 rounded-md">
             
                <p className="font-bold"> COMENTARIOS PRIVADOS </p>

                <p> con el vendedor</p>

                <div className="flex justify-center  ">
                <button onClick={handleCardClick} className={`p-2 m-2 rounded-md ${cambiarActivo ? 'bg-blue-500 text-white' : 'bg-black/20'}`}>Cambiar</button>
                <button onClick={handleCardClick2} className={`p-2 m-2 rounded-md ${comprarActivo ? 'bg-violet-500 text-white' : 'bg-black/20'}`}>Comprar</button>
                </div>


             
             <span  >{ sale?  
             
             <div className="mb-2">
              <Comment1 comments1={comment1} user={user} post={post} /> 
             </div>
    
             : " " }</span> 
       


            <span  >{ sale2?  
             
             <div className="mb-2">
              <Comment2 comments2={comment2} user={user} post={post}/> 
             </div>
    
             : " " }</span> 



            </div>
          





          :   








          <div>

            <h1 className="text-white text-center">Contesta a tus posibles clientes</h1>

           <div className="bg-green-300  m-2 p-2 rounded-md">

           

          <h2 className="font-bold text-center">QUIEREN CAMBIAR</h2>


          <form className="comment-form" onSubmit={handleSubmit}>

            <label htmlFor="new-comment">Respuesta:</label>

            <textarea
              id="new-comment"
               name="new-comment"
               value={newComment2}
                onChange={(event) => setNewComment2(event.target.value)}
              required
            />

            <button type="submit">Contestar</button>

          </form>

             

          <ul className="comments-list">
             

             {reverse1?.map((reverse1) => (    
                        
             <li className="bg-white text-black m-2 p-2 rounded-md" key={reverse1?.createdAt}>
               <span className="user">{user?.name}: </span>
              {reverse1?.text}          
             </li>         

             ))}

           </ul>

             
              <br />
              <hr />
              <br />
             

              {/* */}
              
              {answer1?.slice(0).reverse().map((answer1) => (    
                   
                   <li className="bg-white text-black m-2 p-2 rounded-md" key={answer1?.id}>
                     <span className="user font-bold">{answer1?.name}: </span>
                    {answer1?.text}          
                   </li>         
   
               ))}

          </div>


         <div className="bg-blue-500  m-2 p-2 rounded-md">

                <h2 className="font-bold text-center ">QUIEREN COMPRAR</h2>


                <form className="comment-form" onSubmit={handleSubmit2}>

                    <label htmlFor="new-comment2">Respuesta:</label>

                  <textarea
                     id="new-comment2"
                    name="new-comment2"
                   value={newComment3}
                   onChange={(event) => setNewComment3(event.target.value)}
                   required
                    />

                <button type="submit">Contestar</button>

                </form>

 

              <ul className="comments-list">
 

              {reverse2?.map((reverse2) => (    
            
                <li className="bg-white text-black m-2 p-2 rounded-md" key={reverse2?.createdAt}>
                <span className="user">{user?.name}: </span>
                 {reverse2?.text}          
                </li>         

                ))}

              </ul>

 
                 <br />
                  <hr />
                 <br />
 





              {answer2?.slice(0).reverse().map((answer2) => (    
                   
                   <li className="bg-white text-black m-2 p-2 rounded-md" key={answer2?.id}>
                     <span className="user font-bold">{answer2?.name}: </span>
                    {answer2?.text}          
                   </li>         
   
               ))}

      </div>

      </div>

      }</span>   { /* con sameUser */ }

              


{ /* <ul className="comments-list">
             

                {commentTotal1?.map((commentTotal1) => (    
                           
                <li className="bg-violet-500 text-white m-2 p-2 rounded-md" key={commentTotal1?.createdAt}>
                  <span className="user">{user?.name}: </span>
                 {commentTotal1?.text}          
                </li>         

                ))}

              </ul>
 */ }
              






            </div> : 
            
            


            
            <div className=" bg-blue-200  mx-4 mb-2 text-center  p-2 rounded-md">
             
             <p className="font-bold"> COMENTARIOS PRIVADOS </p>

             <p> con el vendedor</p>

             <div className="flex justify-center  ">
             <button onClick={handleCardClick} className={`p-2 m-2 rounded-md ${cambiarActivo ? 'bg-blue-500 text-white' : 'bg-black/20'}`}>Cambiar</button>
             <button onClick={handleCardClick2} className={`p-2 m-2 rounded-md ${comprarActivo ? 'bg-violet-500 text-white' : 'bg-black/20'}`}>Comprar</button>
             </div>


          
          <span  >{ sale?  
          
          <div className="mb-2">
           <Comment1 comments1={comment1} user={user} post={post}/> 
          </div>
 
          : " " }</span> 
    


         <span  >{ sale2?  
          
          <div className="mb-2">
           <Comment2 comments2={comment2} user={user} post={post}/> 
          </div>
 
          : " " }</span> 







         </div> }        { /* con check2 */ }



 {/* 
 <h1 className="text-white">hola mundo</h1> 
 <h1 className="text-black">hola mundo</h1>
 */}











            </div>

       </div>
     

    {/**/}  
    <hr />
    <br />
    <br />
    <br />
<div className="text-center font-bold">
  <h2>  DESCRIPCION DEL PRODUCTO</h2>
</div>
   

       <div className="bg-black/30 p-2 m-4 rounded-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores recusandae ea obcaecati eius, magnam in rerum laudantium nobis perferendis illum! Dolore vero cum numquam molestias quisquam dolores laboriosam, molestiae fugit?
   
        </div>

       
                

    <div className="mb-8">
      <Comment  comment1bc={comment1bc} comments={postId2a?.post?.commens} comment4={comment4} user={user} post={post} /> 
    </div>
     
     <div className="bg-black p-2 m-4 ">
      <button className="text-white" onClick={handleDeleteClick} >Borrar el ultimo</button>
     </div>
    
     <div className="bg-black p-2 m-4 ">
      <button className="text-white" onClick={handleDeleteClickAll} >Borrar todo</button>
     </div>

     
    </section>
    
    </div>
  );
};






                  {/* 
postId2a?.post


 <p className="font-bold"> COMENTARIOS PÚBLICOS </p>


              <ul className="comments-list">

                {comment1?.slice(0).reverse().map((comment1) => (
  
                <li className="bg-violet-500 text-white m-2 p-2 rounded-md" key={comment1.id}>
                  <span className="user">{user?.name}: </span>
                  {comment1?.text}          
                </li>         

                  ))}

              </ul>

                  */}



{/*
              { sale2?
              <ul className="comments-list">

                {comment2?.map((comment2) => (
                  
                <li className="bg-violet-500 text-white m-2 p-2 rounded-md" key={comment2.id}>
                  <span className="user">{user?.name}: </span>
                 {comment2?.text}          
                </li>         

                ))}

              </ul>
               : 
               <ul className="comments-list">

                {comment2?.map((comment2) => (
                  
                <li className="bg-violet-500 text-white m-2 p-2 rounded-md" key={comment2.id}>
                  <span className="user">{user?.name}: </span>
                 {comment2?.text}          
                </li>         

                ))}

              </ul>
               }


              { sale?
              <ul className="comments-list">

                {comment1?.map((comment1) => (
                  
                <li className="bg-violet-500 text-white m-2 p-2 rounded-md" key={comment1.id}>
                  <span className="user">{user?.name}: </span>
                 {comment1?.text}          
                </li>         

                ))}

              </ul>
               : 
               "..."
               }

                 */}



export default PostIdInfo;
