import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";//
import { useDispatch } from "react-redux";//
import { getMyPostsThunk } from "../../store/slices/myPosts.slice";//

const ProtectedRoutes = () => {
  
  console.log(" estoy en ProtectedRoutes, inicio ");

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(" estoy en ProtectedRoutes, useEffect ");
    dispatch(getMyPostsThunk());
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
