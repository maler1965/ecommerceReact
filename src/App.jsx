//import "./App.css";
import { Footer } from "./components/shared/Footer";//
import { getAllPostThunk } from "./store/slices/posts.slice";//
//import { getMyPostsThunk } from "./store/slices/myPosts.slice";//
import { Profile } from "./pages/profile/Profile";//
//import { renewThunk } from "./store/slices/user.slice";//
import { Route, Routes } from "react-router-dom";//
import { useDispatch } from "react-redux";//
import { useEffect } from "react";//
import { UserId } from "./pages/userId/UserId";//
import Header from "./components/shared/Header";//
import Home from "./pages/home/Home"; //
import Login from "./pages/login/Login";//
import PostId from "./pages/postId/PostId";//
import ProtectedRoutes from "./pages/shared/ProtectedRoutes";//
import Register from "./pages/register/Register";//
import PostCard2 from "./components/home/PostCard2";
//import PostId2 from "./pages/postId/PostId2";//

function App() {
  const dispatch = useDispatch();

/*
  useEffect(() => {
    dispatch(renewThunk()); //es para renovar el token
  }, []);
  */

  useEffect(() => {  // En el renderizado, este hook se lo deja para hacerlo al final 
    dispatch(getAllPostThunk());
    // dispatch(getMyPostsThunk())
  }, []);

  //<Route path="/post" element={<PostId2 />} />
  //className="app"

  return (
    <div className='bg-white min-h-screen '>

      <div className=' h-[160px]'>
        <Header /> {/* del header pasa solo al home inicialmente, no entra al ProtectedRoutes, ni cuando se da clic en Entrar, login */}

      </div>
      
      <Routes>

        <Route element={<ProtectedRoutes />}> {/*solo se entra aqui cuando se ha hecho una llamada a unas de las path que estan dentro de este route */}
          <Route path="/post/:id" element={<PostId />} />
          <Route path="/user/:id" element={<UserId />} />
          <Route path="/user/profile/me" element={<Profile />} />
        </Route>

        <Route path="/" element={<Home />} /> {/*estas rutas no estan protejidas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<PostCard2 />} />
        <Route path="*" element={<h1>Esta ruta no existe</h1>} />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
