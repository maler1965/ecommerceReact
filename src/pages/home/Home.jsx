import PostCard from "../../components/home/PostCard";//
import "./home.css";//
import { useDispatch, useSelector } from "react-redux";//
import FormPost from "../../components/home/FormPost";//
import { useState, useEffect } from "react";//
import { useSocket } from "../../hooks/useSocket";
import Zamora from "./../../assets/zam2.png";//
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

  //pedro

  return (

    

    <div  >  {/*className="home" */}
{/* */}

   <section className="flex ">

     <div>
      <p className="p-4 bg-violet-300  justify-center rounded-md mt-2  w-[220px] h-[400px]" > {/*className="home__description " */}
        En esta pagina podras <span className=" text-blue-900 font-bold"> CAMBIAR O VENDER</span>  eso que ya no utilizas en tu casa, o si tienes un negocio puedes exponer tus productos aqui y mejorar tus ventas. 
      </p>
    </div>

    <div className="relative  flex justify-center object-cover p-2">

       <div className="   text-center rounded-md overflow-hidden     w-[820px] h-[400px] ">
        <img className="overflow-hidden rounded-md " src={Zamora}  alt="" />
      </div>

       <div  className=" absolute ">
          <h1 className="font-bold bg-white/70 rounded-md mt-4  p-4">CAMBIA O VENDE en TU PROVINCIA, en TU CIUDAD</h1>  
      </div>

    </div>

      {/* */}

      <div>
      <p className="p-4 bg-violet-300  justify-center rounded-md mt-2  w-[220px] h-[400px]" > {/*className="home__description " */}
        <span className=" text-blue-900 font-bold">NO TENDRAS QUE INTRODUCIR NINGUN DATO CONFIDENCIAL </span> que ponga en peligro tu dinero, solamente te pone en contacto con personas que se interesen en tu producto y puedan hacer sus propios arreglos. 
      </p>
    </div>
      

    </section>



      <div className="home__post-container" > {/* className="flex flex-wrap justify-center gap-4"         */}
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




      {!user && 

      <div > 
       <button className="home__btn2" onClick={handleCreatePost}  > {/* */}
          Nuevo Producto
        </button>
      </div>
      }


      <FormPost
        isCloseForm={isCloseForm}
        setIsCloseForm={setIsCloseForm}
        socket={socket}
      />
 

    </div>


  );
};

export default Home;
