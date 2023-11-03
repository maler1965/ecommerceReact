import { useForm } from "react-hook-form";//
import "./register.css";//
import { useDispatch } from "react-redux";//
import { registerThunk } from "./../../store/slices/user.slice";
import { useState } from "react";//
import { useNavigate } from "react-router";//

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();
  const [file, setFile] = useState([]); //se crea este estado para enviar las imagenes, no se usa el useForm porque no sabemos como envia las imagenes pues el backend no lo entiende, solo entiende el formato formData

  const submit = (data) => {
    //no podemos hacer un consolo.log(formData) para ver los datos porque la informacion viene encapsulada
    const formData = new FormData();  // FormData ya viene con react, no necesita importarlo. es el formato para enviar imagenes
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("profileImgUrl", file[0]);
    // formData.append("profileImgUrl", data.profileImgUrl);
    formData.append("description", data.description);
    reset({
      name: "",
      email: "",
      password: "",
      profileImgUrl: "",
      description: "",
    });
    dispatch(registerThunk(formData));
    navigate("/");
  };

  return (
    <div className="register">

      <h1 className="register__title">Crear nuevo usuario</h1>

      <form className="register__form" onSubmit={handleSubmit(submit)}>

        <div className="register__section">
          <label className="register__label" htmlFor="name">
            Nombre
          </label>
          <input
            className="register__input"
            {...register("name")}
            type="text"
            id="name"
          />
        </div>

        <div className="register__section">
          <label className="register__label" htmlFor="email">
            Email
          </label>
          <input
            className="register__input"
            {...register("email")}
            type="email"
            id="email"
          />
        </div>

        <div className="register__section">
          <label className="register__label" htmlFor="password">
            Contraseña
          </label>
          <input
            className="register__input"
            {...register("password")}
            type="password"
            id="password"
          />
        </div>

        <div className="register__section">
          <label className="register__label" htmlFor="description">
            Descripcion
          </label>
          <input
            className="register__input"
            {...register("description")}
            type="text"
            id="description"
          />
        </div>

        <div className="register__section">
          <label for="archivo" className="register__label" htmlFor="imgProfile">
            Foto de Perfil
          </label>
          <input
            required
            type="file"
            id="file"
            name="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files)}
          />
        </div>

        <button className="register__btn">Guardar</button>

      </form>

    </div>
  );
};

export default Register;
