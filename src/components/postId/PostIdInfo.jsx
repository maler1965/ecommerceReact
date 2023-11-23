import { useState, useEffect  } from "react";
//import { Carrousel } from "./Carrousel";
import Comment from "./Comment";
import Comment2 from "./Comment2";
import Comment1 from "./Comment1";
import "./styles/postidinfo.css";
import { useNavigate } from "react-router-dom";//
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";//




const PostIdInfo = ({ comment2, comment1, postId2, post }) => {

  const [sameUser, setSameUser] = useState(false);

  const [sale, setSale] = useState(false);
  const [sale2, setSale2] = useState(false);

  const [cambiarActivo, setCambiarActivo] = useState(false);
  const [comprarActivo, setComprarActivo] = useState(false);

  const { user } = useSelector((state) => state);
  console.log({user});

  const { posts } = useSelector((state) => state);
  console.log({ posts })

  //let pedro = []
const productId = post?.id

  console.log({comment2});
  console.log({comment1});
  console.log({postId2});
  console.log({productId}); //console.log({postUser});

  

  useEffect(() => {
  if (user?.id !== post?.user.id){
    setSameUser(true)
    console.log("dentro de no igual usuario")
  }
  }, [ user ]);


  const answer1 = []
  const answer2 = []
  let length1 = comment1?.length
  let length2 = comment2?.length

  console.log({length1});
  console.log({length2});
  const postMy = post?.id 
  console.log({postMy});


  for ( let p = 0; p < length1 ; p++) {

   if (comment1[p]?.postId !== post?.id ) {
    answer1.push(comment1[p])
   }  

  }


  for ( let p = 0; p < length2 ; p++) {

    if (comment2[p]?.postId !== post?.id ) {
     answer2.push(comment2[p])
    }  
 
   }


   console.log({answer1 })
   console.log({answer2 })

//=============================================
 //console.log(comment1?.[0].createdAt);
 //console.log(comment2?.[0].createdAt)



/*
 const date1 = comment1?.[0].createdAt
 const date2 = comment2?.[0].createdAt
*/
 

const testId = user?.id

let commentTotal = [];
//let commentTotal1 = [];
let count = 0
let index1 = comment1?.length - 1 //son los ultimos mensajes de cambio, solo el indice
let index2 = comment2?.length - 1 //son los ultimos mensajes de compra, solo el indice

let e = 0
let d = 0

 //commentTotal.push(comment1?.[index1 - e])
//ped2 = ped.push(comment1?.[index1 - e].createdAt)
//console.log({commentTotal})

for ( let i = 0; i < 10 ; i++) {


const date1 = comment1?.[index1 - e]?.createdAt; //son los ultimos, la fecha total
const date2 = comment2?.[index2 - d]?.createdAt; //son los ultimos, la fecha total

//-----

 const year1 = date1?.slice(0, 4);//ano
 //console.log(year1);

 const month1 = date1?.slice(5, 7);//mes
 //console.log(month1);

 const day1 = date1?.slice(8, 10);//dia
 //console.log(day1);

 const hour1 = date1?.slice(11, 13);//hora
 //console.log(hour1);

 const minute1 = date1?.slice(14, 16);//minuto
 //console.log(minute1);

 const second1 = date1?.slice(17, 19);//seg
 //console.log(second1);

//------------
const year2 = date2?.slice(0, 4); //ano
//console.log(year2);

const month2 = date2?.slice(5, 7);//mes
 //console.log(month2);

 const day2 = date2?.slice(8, 10);//dia
 //console.log(day2);

 const hour2 = date2?.slice(11, 13);//hora
 //console.log(hour2);

 const minute2 = date2?.slice(14, 16);//minuto
 //console.log(minute2);

 const second2 = date2?.slice(17, 19);//seg
 //console.log(second2);

//---------
/*
console.log(comment1?.length - 1);
console.log(comment2?.length - 1)

console.log(comment1?.[index1].createdAt); //son los ultimos
console.log(comment2?.[index2].createdAt) //son los ultimos
*/





if (year1 > year2) {
commentTotal.push(comment1?.[index1 - e])
 count = 1
} else {

  if (year1 < year2) {
     commentTotal.push(comment2?.[index2 - d])
     count = 2
    } else {

if (month1 > month2) {
 commentTotal.push(comment1?.[index1 - e])
   count = 1
  } else {
  
    if (month1 < month2) {
       commentTotal.push(comment2?.[index2 - d])
       count = 2
      } else {

if (day1 > day2) {
    commentTotal.push(comment1?.[index1 - e])
    count = 1
    } else {
    
      if (day1 < day2) {
       commentTotal.push(comment2?.[index2 - d])
         count = 2
        } else {

if (hour1 > hour2) {
      commentTotal.push(comment1?.[index1 - e])
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
            commentTotal.push(comment2?.[index2 - d])
             count = 2
            } else {

 if (second1 > second2) {
          commentTotal.push(comment1?.[index1 - e])
           count = 1
          } else {
          
            if (second1 < second2) {
              commentTotal.push(comment2?.[index1 - d])
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
         // console.log({ commentTotal });
         // console.log({ count });

          if (count === 1 ) {
              e = e + 1 // para bajar el indice
          } else {
              d = d + 1  // para bajar el indice

          }

}

let commentTotal1 = []

  for ( let f = 0; f < 10 ; f++) {
  
  if (commentTotal?.[f]?.userId === user?.id ) {
    commentTotal1.push(commentTotal?.[f])
  }  


   }

   console.log({commentTotal1 })
          
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


  return (
    <div>
    <section className="postidinfo">
      <hr />
     
        <div className="grid-col-[repeat(auto-fill,_300px)] mx-auto max-w-[1024px] p-4">

         <div>

          <div  className="text-center p-2 m-4 text-2xl">
            <h2>{postId2?.title}</h2>
          </div>
           
          <div className=" flex justify-center text-center text-2xl">
            <img src={postId2?.PostImgs?.[0].postImgUrl} alt="" /> 
          </div>
              

               {/* <Carrousel postImgs={PostImgs} />

              <p className="postidinfo__content">{postUser?.description}</p>*/} 
          </div>


        
          <div className="m-4 m-8 px-4">
            {/*  <h2>hola</h2>*/}
             
              <p> {postId2?.content}</p>

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
              <Comment1 comments1={comment1} /> 
             </div>
    
             : " " }</span> 
       


            <span  >{ sale2?  
             
             <div className="mb-2">
              <Comment2 comments2={comment2} /> 
             </div>
    
             : " " }</span> 



            </div>
          
          :

          <div>

            <h1 className="text-white text-center">Contesta a tus posibles clientes</h1>

           <div className="bg-green-300  m-2 p-2 rounded-md">

           

          <h2 className="font-bold text-center">QUIEREN CAMBIAR</h2>
              {answer1?.slice(0).reverse().map((answer1) => (    
                   
                   <li className="bg-white text-black m-2 p-2 rounded-md" key={answer1?.id}>
                     <span className="user font-bold">{answer1?.name}: </span>
                    {answer1?.text}          
                   </li>         
   
               ))}

          </div>


         <div className="bg-blue-500  m-2 p-2 rounded-md">

                <h2 className="font-bold text-center ">QUIEREN COMPRAR</h2>
              {answer2?.slice(0).reverse().map((answer2) => (    
                   
                   <li className="bg-white text-black m-2 p-2 rounded-md" key={answer2?.id}>
                     <span className="user font-bold">{answer2?.name}: </span>
                    {answer2?.text}          
                   </li>         
   
               ))}

      </div>

      </div>

      }</span>   { /* con sameUser */ }

              



              <ul className="comments-list">
             

                {commentTotal1?.map((commentTotal1) => (    
                           
                <li className="bg-violet-500 text-white m-2 p-2 rounded-md" key={commentTotal1?.createdAt}>
                  <span className="user">{user?.name}: </span>
                 {commentTotal1?.text}          
                </li>         

                ))}

              </ul>







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
           <Comment1 comments1={comment1} /> 
          </div>
 
          : " " }</span> 
    


         <span  >{ sale2?  
          
          <div className="mb-2">
           <Comment2 comments2={comment2} /> 
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
      <Comment comments={postId2?.comments} /> 
    </div>
     

    </section>
    
    </div>
  );
};






                  {/* 

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
