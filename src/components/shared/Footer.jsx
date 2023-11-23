import React from "react";//
import "./styles/footer.css";//


export const Footer = () => {

  //<p className="items-center  font-bold"> <span className=" text-black">CAMBIA</span><span>O</span><span className="text-amber-400">VENDE</span>  </p> 

  return (

    <footer className=" "> {/*  footer */}

      <div className="bg-black p-2">
        <div className=""> {/*  footer__info_page */}
        <p className=" text-blue-900 font-bold">En Cambia o Vende</p>
        <small className="text-white">Trabajamos para mejorar la vida de nuestros usuarios</small>
      </div>
      </div>
      

      <section className="flex justify-between">

     
      <div className="flex-col justify-end p-2">
        <div className=" footer__info_developers " >
           <p>Copyright &copy; 2023 <span className="font-bold text-black">CAMBIA</span><span>O</span><span className=" font-bold text-amber-400">VENDE</span></p>
        
        </div>
      </div>

      <div className="p-2 flex-col justify-end">

        <p>
          Programador: <span className="footer_name">Pedro Cevallos</span> 
        </p>
        
         <p>
          Email: <span className="footer_name">pevallos1965@gmail.com</span> 
        </p>

        <p>
          Ecuador
        </p>

      </div>

       </section>

    </footer>
  );
};
