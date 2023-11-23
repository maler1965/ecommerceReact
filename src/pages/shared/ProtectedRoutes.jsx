import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";//
import { useDispatch } from "react-redux";//
import { getMyPostsThunk } from "../../store/slices/myPosts.slice";//
import { useSelector } from "react-redux";//



const ProtectedRoutes = () => {
  
  console.log(" estoy en ProtectedRoutes, inicio ");

  const { user } = useSelector((state) => state);
  console.log({user});

  const dispatch = useDispatch();
  

  useEffect(() => {
    console.log(" estoy en ProtectedRoutes, useEffect ");

    if (user !== null){
      
      console.log(" Estoy en ProtectedRoutes, if user null")
      //dispatch(getMyPostsThunk());
      
    } else {
      
      console.log(" Estoy en ProtectedRoutes, if user no null")
      dispatch(getMyPostsThunk());
      //setInfo(true)
      //console.log({ info })
    }

  }, []);


  if (localStorage.getItem("token")) {
      console.log(" estoy en ProtectedRoutes, con token ");
       const token = localStorage.getItem("token")
       console.log(" estoy en ProtectedRoutes, con token ", token);
       return <Outlet />;
  } else {
       

       console.log(" estoy en ProtectedRoutes, para login ");
      return <Navigate to="/login" />;
  }




  //return <Outlet />;


};

export default ProtectedRoutes;
