import { useEffect } from "react";

export const Carrousel = ({ PostImgs }) => {
  console.log("estoy en inicio de  Carrousel.jsx ")
  
  useEffect(() => {
    console.log({PostImgs});
  }, []);

  console.log("estoy en final de  Carrousel.jsx ")

  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">

        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>

      </div>
      {postImgs?.length > 0 && (

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src={PostImgs[0]?.postImgUrl}
              className="d-block w-100 he-50"
              alt="Falta la 1..."
            />
          </div>

          <div className="carousel-item">
            <img
              src={PostImgs[1]?.postImgUrl}
              className="d-block w-100 he-50"
              alt="Falta la 2..."
            />
          </div>

          <div className="carousel-item">
            <img
              src={PostImgs[2]?.postImgUrl}
              className="d-block w-100 he-50"
              alt="Falta la 3..."
            />
          </div>

        </div>

      )}
      

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

    </div>
  );
};
