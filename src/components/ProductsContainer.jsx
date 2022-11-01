import React from "react";

const ProductsContainer = (props) => {
  const products = props.data;

  function getRatingStars(rate, count) {
    rate = Math.round(rate);

    return (
      <div className=" mt-auto mb-0 ">
        <div className="small-ratings mx-auto">
          {[...Array(rate)].map((e, i) => (
            <i className="fa fa-star" key={i} style={{ color: "#fbc634" }}></i>
          ))}
          {[...Array(5 - rate)].map((e, i) => (
            <i className="fa fa-star" key={i}></i>
          ))}

          <span className="ms-2">{count}</span>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="container " style={{ minHeight: "calc(100vh - 55px)" }}>
        <div className="row">
          {products.map((product) => (
            <div
              className="col-10 mx-auto mx-lg-0 col-md-6 col-lg-3 my-2"
              key={product.id}
            >
              <div
                className="card p-2 product-card"
                style={{ height: "346px" }}
              >
                <img
                  className="card-img-top  w-50 mx-auto"
                  src={product.image}
                  alt="Card image"
                />
                <div className="card-body d-flex flex-column text-center">
                  <h5 className="card-title my-auto">{product.title}</h5>
                  {getRatingStars(product.rating.rate, product.rating.count)}
                  {/* <p className="card-text">{product.description}</p> */}
                  <div className="d-flex flex-row mt-3 justify-content-around">
                    <span
                      className=" my-auto"
                      style={{
                        fontSize: "22px",
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                    >
                      {product.price}$
                    </span>
                    <a
                      href="#"
                      className="btn btn-primary    "
                      style={{ borderRadius: "5px" }}
                      onClick={() =>
                        props.setCartProductsNum(props.cartProductsNum + 1)
                      }
                    >
                      <i className="fa-solid fa-plus"></i> Add to card
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsContainer;
