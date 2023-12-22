import { Link } from "react-router-dom";//
//import "./styles/header.css";//
import Logo from "./../../assets/icon.ico";//
import { useSelector } from "react-redux";//
import { useEffect, useState } from "react";//
import { useNavigate } from "react-router-dom";//



const Header = () => {

  console.log("estoy en inicio de  Header.jsx  ")
 

  const [showMenu, setShowMenu] = useState(false);
  //const [admin, setAdmin] = useState(false);
  
  const navigate = useNavigate();

  function handleImageClick() {
    setShowMenu(!showMenu);
  }

/*
  if(admin !== true) {
    setAdmin(!admin);
  } */
  

  function handleLogout() {
    localStorage.clear();
    navigate("/");
    window.location.reload();  //para reiniciar la pagina
  }



 //let { user } = useSelector((state) => state);
  //  console.log({user});

  let user1 = ""

 // let user = ""
  
/**/

   let { user } = useSelector((state) => state);
    //let user = user;
    
      if (!user?.id) {

         user1 = JSON.parse(localStorage.getItem("user"));//se lo convierte de json 
         console.log({user1});

         user = user1;

        }



  //  user = user1
    

/*
  useEffect(() => {

    }, [ user]); */

  //const jsonObject = JSON.parse( user);
  console.log({user});


 console.log("estoy en final de  Header.jsx  ")

  return (  
    
    <div>

{/*   
            <div className='   hidden md:block'>
                <section className='flex justify-between bg-[#d4d3d3] rounded-md p-4'>
                    <h1 className='font-bold text-[36px]  border border-[#b8b5b5] p-2 rounded-sm '>Usuarios</h1>
                    <button onClick={handleClickShowModal} className='bg-primary hover:bg-[#D85D5D] rounded-md text-white p-2 '> <i className='bx bx-plus'></i> Crear nuevo usuario</button>
                </section>
            </div>


            <div className='block md:hidden'>
                <section className=' bg-[#d4d3d3] flex-col items-center text-center m-2 rounded-md p-4'>
                    <h1 className='font-bold text-[36px]  border border-[#b8b5b5] p-2 rounded-sm '>Usuarios</h1>
                    <button onClick={handleClickShowModal} className='bg-primary hover:bg-[#D85D5D] m-2 rounded-md text-white p-2 '> <i className='bx bx-plus'></i> Crear nuevo usuario</button>
                </section>
            </div>
*/}






      {/*  =================================== */}

    <header className="flex text-white items-center  bg-violet-400 h-[60px] ">
      
      <div className=" flex justify-start items-center ">

      <div  >
         <img src={Logo} alt=""  className=" h-[30px] px-4" />    {/*flex justify-between    */}  
      </div>

        
      <div>
        <p className="items-center  font-bold"> <span className=" text-black">CAMBIA</span><span>O</span><span className="text-amber-400">VENDE</span>  </p> 
  
      </div>
    
      </div>
     

     


      <div className="flex-grow"  >
      <p className="text-center  text-white "> Saca esas cosas que no usas y <span className="font-bold "> CAMBIALAS o VENDELAS</span>  aqui</p>
    </div>

    
    
     
    </header>




 <div className="  bg-black h-[60px] flex justify-end  items-center ">

<nav > {/*className="header__nav "   */}
        
       {/*    <img src={Logo} alt=""  className=" text-[20px]" /> */} {/* navega hacia las rutas que estan en la importacion, arriba */}

        <ul className="flex justify-center"> {/* header__list  */}

          <li className=" text-white flex items-center font-bold mx-4 p-2"> {/* header__item  */}
            <Link className="text-white font-bold " to="/">Productos</Link> {/* navega hacia las rutas que estan en el App en Router */}
          </li>

          {user?.id ? (
            <>
            
              <li className="flex items-center "> {/*header__item      text-white font-bold        */}
              <div className="  ">
                 <Link className="text-white flex-col items-center mx-4 font-bold" to="/user/profile/me">Mis Productos</Link> {/* navega hacia las rutas que estan en el App en Router */}
          
              </div>
              </li>

              <li  className=" relative p-2 " onClick={handleImageClick}> {/* className="header__img-content  " text-white font-bold   */}
                {/*picture   */}
                <img
                  src={user.profileImgUrl}
                className=" w-[40px] h-[40px] m-2 rounded-[50%] "
                  alt="Profile"
                />

                {showMenu && (
                  <div className=" bg-blue-300 text-center m-2 rounded-[50%] "> {/* menu  */}
                    <button className="text-black font-bold " onClick={handleLogout}> {/* logoutButton  */}
                      Salir
                    </button>
                  </div>
                )}
              </li>
            </>
          ) : (
            <>
            

              <li className=" text-white font-bold p-2"> {/* header__item  */}
                <Link className="text-white mx-4 font-bold" to="/register">Registro</Link> {/* navega hacia las rutas que estan en el App en Router */}
              </li>

              <li className=" text-white font-bold p-2"> {/* header__item  */}
                <Link className="text-white mx-4 font-bold" to="/login">Entrar</Link> {/* navega hacia las rutas que estan en el App en Router */}
              </li>

{/* 
             <li>
             {admin && (
                  <div className="menu">
                    <button className="logoutButton" onClick={handleAdmin}>
                      Administrador
                    </button>
                  </div>
                )}
             </li>*/}
              
            </>
          )
          
          }

        </ul>

      </nav>

      </div>

</div>

  );
};

export default Header;
