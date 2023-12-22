import React, { useState } from "react";//
import "./styles/formPost.css";//
import { useForm } from "react-hook-form";//
import usePostCrud from "../../hooks/usePostCrud";//

const FormPost = ({ isCloseForm, setIsCloseForm, socket }) => {

  console.log(" estoy en FormPost.jsx inicio ")
  
  const { handleSubmit, reset, register } = useForm();
  const [file, setFile] = useState([]);

  const handleClick = (e) => {
    setIsCloseForm(true);
  };
  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  const { createNewPost } = usePostCrud();//del archivo  usePostCrud.js que tiene a la funcion usePostCrud() se saca una funcion que tiene internamente llamada createNewPost() para poder llenarla con los datos que requiere de parametros y poder enviarla llena para que haga su funcion


  const submit = (data) => {

    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("content", data.description);

    for (let i = 0; i < file.length; i++) {
      formData.append("postImgs", file[i]);
    }

    createNewPost(formData, socket);  //aqui recien usa la funcion  que obtuvo antes para ponerle los datos y hacer la peticion http
    reset();

  };


  console.log(" estoy en FormPost.jsx final ")

  return (
    <div
      onClick={handleClick}
      className={`formpost ${isCloseForm && "exit-formpost"}`}
    >
      <form
        onClick={handleFormClick}
        className="formpost__form"
        onSubmit={handleSubmit(submit)}
      >
        <h2 className="font-bold text-center">CREAR UN NUEVO PRODUCTO</h2>  {/*formpost__title */}
        <div className="formpost__section">
          <label className="formpost__label" htmlFor="post-title">
            Titulo del Producto
          </label>
          <input
            className="formpost__input"
            type="text"
            id="post-title"
            {...register("title")}
          />
        </div>
        <div className="formpost__section">
          <label className="formpost__label" htmlFor="post-description">
            Descripcion, y explica si cambias, vendes o las dos cosas.
          </label>
          <input
            className="formpost__input"
            type="text"
            id="post-description"
            {...register("description")}
          />
        </div>
        <div className="formpost__section">
          <input
            required
            type="file"
            id="file"
            name="file"
            accept="image/*"
            multiple
            onChange={(e) => setFile(e.target.files)}
          />
        </div>
        <button className="formpost__btn">Crear anuncio</button>
      </form>
    </div>
  );
};

export default FormPost;
