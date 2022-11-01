import React from 'react'

const Slider = () => {
  return (
    <div
    id="carouselExampleControls"
    className="carousel slide my-1 w-75 mx-auto align-self-stretch"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner ">
      <div className=" carousel-item active">
        <img
          src="https://cdn.thewirecutter.com/wp-content/uploads/2020/04/laptops-lowres-2x1-.jpg?auto=webp&quality=75&crop=2:1&width=1024"
          className="d-block  w-100"
          alt="..."
        />
      </div>
      <div className=" carousel-item">
        <img
          src="https://jlhnews.com/wp-content/uploads/2022/05/Best-budget-laptops-in-2022.jpg"
          className="d-block w-100"
          alt="..."
        />
      </div>
      <div className=" carousel-item">
        <img
          src="https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India.jpg"
          className="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>  )
}

export default Slider