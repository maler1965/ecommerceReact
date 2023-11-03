import { Link } from "react-router-dom";//
//import "./styles/header.css";//
import Logo from "./../../assets/icon.ico";//
import { useSelector } from "react-redux";//
import { useEffect, useState } from "react";//
import { useNavigate } from "react-router-dom";//


const Header = () => {
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
    window.location.reload();
  }

  const { user } = useSelector((state) => state);
  //const jsonObject = JSON.parse( user);
  console.log({user});

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

    <header className=" flex justify-center items-center text-white  bg-violet-400 h-[60px] ">
      
     <img src={Logo} alt=""  className=" h-[30px] px-4" />    {/*   */}
      
     <p className="items-center text-black font-bold">CAMBIA O VENDE </p> 
      
     
    </header>




 <div className="  bg-black h-[60px] flex justify-between   ">

<nav > {/*className="header__nav "   */}
        
       {/*    <img src={Logo} alt=""  className=" text-[20px]" /> */} {/* navega hacia las rutas que estan en la importacion, arriba */}

        <ul className="flex justify-center"> {/* header__list  */}

          <li className=" text-white font-bold p-2"> {/* header__item  */}
            <Link className="text-white font-bold " to="/">Productos</Link> {/* navega hacia las rutas que estan en el App en Router */}
          </li>

          {user?.id ? (
            <>
            
              <li className=" text-white font-bold"> {/*  header__item */}
                <Link className="text-white font-bold" to="/user/profile/me">Mis Productos</Link> {/* navega hacia las rutas que estan en el App en Router */}
              </li>

              <li className=" text-white font-bold " onClick={handleImageClick}> {/*header__img-content   */}
                <img
                  src={user.profileImgUrl}
                  className="picture "
                  alt="Profile"
                />
                {showMenu && (
                  <div className="menu">
                    <button className=" text-white font-bold" onClick={handleLogout}> {/* logoutButton  */}
                      Salir
                    </button>
                  </div>
                )}
              </li>
            </>
          ) : (
            <>
            

              <li className=" text-white font-bold p-2"> {/* header__item  */}
                <Link className="text-white font-bold" to="/register">Registro</Link> {/* navega hacia las rutas que estan en el App en Router */}
              </li>

              <li className=" text-white font-bold p-2"> {/* header__item  */}
                <Link className="text-white font-bold" to="/login">Entrar</Link> {/* navega hacia las rutas que estan en el App en Router */}
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
