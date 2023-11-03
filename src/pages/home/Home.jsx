import PostCard from "../../components/home/PostCard";//
//import "./home.css";//
import { useDispatch, useSelector } from "react-redux";//
import FormPost from "../../components/home/FormPost";//
import { useState, useEffect } from "react";//
import { useSocket } from "../../hooks/useSocket";
//import PostCard2 from "../../components/home/PostCard2";
//import { addPost } from "./../../store/slices/posts.slice";//
/* ----  */

const Home = () => {
  console.log(" estoy dentro de Home, inicio ")

  const { posts } = useSelector((state) => state);
  console.log({ posts })

  const { user } = useSelector((state) => state);

  const dispatch = useDispatch();

  const [isCloseForm, setIsCloseForm] = useState(true);

  const { socket, online } = useSocket("http://localhost:3000"); //cuando se pase a produccion hay que poner el dominio de la pagina como http://cambiaovende.com  no es necesario ponerle el puerto
  
/*
  useEffect(() => {
    //console.log({posts});
    socket.on("render-new-post", (data) => {  //esta escuchando al servidor por medio de websocket
      dispatch(addPost(data));
     // console.log("Se ha creado un post", data);
    });
  }, [socket]);
  */

  const handleCreatePost = () => {
    setIsCloseForm(false);
  };

  
  console.log({user});

  /*
  <h1 className="home__title">CAMBIA O VENDE</h1>
  
  */

  return (

    

    <div >  {/*className="home" */}
{/* */}

      <h1 className="font-bold p-8">CAMBIA O VENDE en TU PROVINCIA, en TU CIUDAD</h1>   {/* */}

      <p className="p-4" > {/*className="home__description " */}
        En esta pagina podras cambiar o vender eso que ya no utilizas en tu casa, o si tienes un negocio puedes exponer tus productos aqui y mejorar tus ventas. 
      </p>

      <div className="flex flex-wrap justify-center gap-4" > {/*className="home__post-container" */}
              {posts?.posts.map((post) => (
              <PostCard key={post.id} post={post} />
               ))}
      </div>

      
{/*
      {user?.id ? (
            <>
            <h2>Hola Pedro</h2>
            
            <div className="home__post-container">
              {posts?.posts.map((post) => (
              <PostCard2 key={post.id} post={post} />
               ))}
            </div>

             </>)
            
          : 
          (
            <>
            
            <h2>Hola Cevallos</h2>
            <div className="home__post-container">
              {posts?.posts.map((post) => (
              <PostCard key={post.id} post={post} />
               ))}
            </div>
              
            </>
          )
          
          }

      

        */}






      <div > 
       <button onClick={handleCreatePost}  > {/* className="home__btn2"*/}
          Nuevo Producto
        </button>
      </div>

      {/*
      <button onClick={handleCreatePost} className="home__btn">
        +
      </button> 



      */}

      <FormPost
        isCloseForm={isCloseForm}
        setIsCloseForm={setIsCloseForm}
        socket={socket}
      />
    </div>
  );
};

export default Home;
