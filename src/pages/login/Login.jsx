import { useForm } from "react-hook-form";//
import { useDispatch, useSelector } from "react-redux";//
import { loginThunk } from "./../../store/slices/user.slice";//
import { useNavigate } from "react-router-dom";//
import "./login.css"; //



const Login = () => {

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
  /*  
    if ( errorUser === "incorrect") {
      
    } */

    navigate("/");
    reset({  // anula el formulario, es decir lo oculta de la pantalla y limpia los input
      email: "",
      password: "",
      
    }); 

  };

//pedro

  return (
<section  className="m-4">

    <div className="login">   

      <h1 className="login__title">Para Cambiar o Vender tienes que Entrar</h1>
      <div className="login__form">
        <p>Sino estas registrado como usuario, primero da click en Registro</p>
      </div>
      

      <form className="login__form" onSubmit={handleSubmit(submit)}>

        <div className="login__section">

          <label className="login__label" htmlFor="email">
            Email
          </label>

          <input
            className="login__input"
            {...register("email")}
            type="email"
            id="email"
          />

        </div>


        <div className="login__section">

          <label className="login__label" htmlFor="password">
            Contraseña
          </label>

          <input
            className="login__input"
            {...register("password")}
            type="password"
            id="password"
          />

        </div>

        <button className="login__btn">Listo</button>

      </form>

    </div>
    
    </section>
  );
};

export default Login;
