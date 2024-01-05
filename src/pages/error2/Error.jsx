import { useForm } from "react-hook-form";//
import { useDispatch, useSelector } from "react-redux";//
import { loginThunk } from "../../store/slices/user.slice";//
import { useNavigate } from "react-router-dom";//
import Home from "../home/Home";//
import "../home/home.css";//
//import Header from "../../components/shared/Header";//
//import "./login.css"; //

let user = "";
let cancel = null

const Error = () => {

  const navigate = useNavigate();

  console.log("estoy en inicio de  Error.jsx  ")

 
  let errorA = JSON.parse(localStorage.getItem("Error_createComment1_useComment1"))
  console.log({ errorA })

  
  if (errorA) {
    user = errorA 
    localStorage.setItem("Error_createComment1_useComment1", JSON.stringify(cancel));
  }


  //=====
  let errorB = JSON.parse(localStorage.getItem("Error_getComment1_useComment1"))
  console.log({ errorB })

  if (errorB) {
    user = errorB 
    localStorage.setItem("Error_getComment1_useComment1", JSON.stringify(cancel));
  }

  //====

  let errorC = JSON.parse(localStorage.getItem("Error_getAllPostThunk_postsSlice"))
  console.log({ errorC })

  if (errorC) {
    user = errorC 
    localStorage.setItem("Error_getAllPostThunk_postsSlice", JSON.stringify(cancel));
  }

  //====

  let errorD = JSON.parse(localStorage.getItem("Error_createNewPost_usePostCrud"))
  console.log({ errorD })

  if (errorD) {
    user = errorD 
    localStorage.setItem("Error_createNewPost_usePostCrud", JSON.stringify(cancel));
  }

  //====

  let errorE = JSON.parse(localStorage.getItem("Error_deletePostById2One_usePostCrud"))
  console.log({ errorE })

  if (errorE) {
    user = errorE 
    localStorage.setItem("Error_deletePostById2One_usePostCrud", JSON.stringify(cancel));
  }

  //====

  let errorF = JSON.parse(localStorage.getItem("Error_deletePostById2All_usePostCrud"))
  console.log({ errorF })

  if (errorF) {
    user = errorF 
    localStorage.setItem("Error_deletePostById2All_usePostCrud", JSON.stringify(cancel));
  }

  //====

  let errorG = JSON.parse(localStorage.getItem("Error_getPostById_usePostCrud"))
  console.log({ errorG })

  if (errorG) {
    user = errorG 
    localStorage.setItem("Error_getPostById_usePostCrud", JSON.stringify(cancel));
  }

  //====
  
  let errorH = JSON.parse(localStorage.getItem("Error_getPostById2_usePostCrud"))
  console.log({ errorH })

  if (errorH) {
    user = errorH 
    localStorage.setItem("Error_getPostById2_usePostCrud", JSON.stringify(cancel));
  }

  //====

  let errorI = JSON.parse(localStorage.getItem("Error_createComment_useComment"))
  console.log({ errorI })

  if (errorI) {
    user = errorI 
    localStorage.setItem("Error_createComment_useComment", JSON.stringify(cancel));
  }

  //====
  
  let errorJ = JSON.parse(localStorage.getItem("Error_createComment1_useComment"))
  console.log({ errorJ })

  if (errorJ) {
    user = errorJ 
    localStorage.setItem("Error_createComment1_useComment", JSON.stringify(cancel));
  }

  //====

  let errorK = JSON.parse(localStorage.getItem("Error_createComment2_useComment"))
  console.log({ errorK })

  if (errorK) {
    user = errorK 
    localStorage.setItem("Error_createComment2_useComment", JSON.stringify(cancel));
  }

  //====

  let errorL = JSON.parse(localStorage.getItem("Error_getComment1a_useComment"))
  console.log({ errorL })
  
  if (errorL) {
    user = errorL 
    localStorage.setItem("Error_getComment1a_useComment", JSON.stringify(cancel));
  }

  //====

/*
localStorage.setItem("Error_createComment1_useComment1", JSON.stringify(err?.response?.data?.message));
localStorage.setItem("Error_getComment1_useComment1", JSON.stringify(err?.response?.data?.message));

localStorage.setItem("Error_getAllPostThunk_postsSlice", JSON.stringify(err?.response?.data?.message));

localStorage.setItem("Error_createNewPost_usePostCrud", JSON.stringify(err?.response?.data?.message)),
localStorage.setItem("Error_deletePostById2One_usePostCrud", JSON.stringify(err?.response?.data?.message)),
 localStorage.setItem("Error_deletePostById2All_usePostCrud", JSON.stringify(err?.response?.data?.message)),
  localStorage.setItem("Error_getPostById_usePostCrud", JSON.stringify(err?.response?.data?.message)),
  localStorage.setItem("Error_getPostById2_usePostCrud", JSON.stringify(err?.response?.data?.message)),


  localStorage.setItem("Error_createComment_useComment", JSON.stringify(err?.response?.data?.message)),
  localStorage.setItem("Error_createComment1_useComment", JSON.stringify(err?.response?.data?.message)),
  localStorage.setItem("Error_createComment2_useComment", JSON.stringify(err?.response?.data?.message)),
  localStorage.setItem("Error_getComment1a_useComment", JSON.stringify(err?.response?.data?.message)),


*/







  /*

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { handleSubmit, reset, register } = useForm();
  console.log(" estoy dentro de login, inicio ")

  //const { user } = useSelector((state) => state);
  //const errorUser = user.slice(0, 9)
  


  const submit = (data) => {
    console.log(" estoy dentro de login, dentro de boton submit ")
    dispatch(loginThunk(data));

    //console.log({ user })
 

    navigate("/");
    reset({  // anula el formulario, es decir lo oculta de la pantalla y limpia los input
      email: "",
      password: "",
      
    }); 

  };




 <div className="login">
 <div className="bg-black m-2 p-2">
 <Home   />
      <h2 className="text-white">Estamos en pagina de Errores</h2>
    </div>
</div>


  <div className="postid_content">
    <PostId2   />
  </div>
*/

const handleCreatePost = () => {
  navigate("/"); //user = false;
};

console.log({ user })

//pedro      {`${user}`}          !user
 console.log("estoy en final de  Error.jsx  ")




  return (
<div>


{ user === errorC && 

<div > 
 <button className="home__btn2" onClick={handleCreatePost}  > {/* */}
  ErrorC. Da click para reiniciar. 
  </button>
</div>
}

{/*<App />  */}
  <div className="postid_content">
<Home   />
    
  
  </div>


{/*<App />  */}



{/*
  { user === errorB && 

<div > 
 <button className="home__btn2" onClick={handleCreatePost}  >  
  ErrorB. Da click para reiniciar. 
  </button>
</div>
}


    <div className="postid_content">
<Home   />
    
  
  </div>
*/}






</div>
  );
};

export default Error;
