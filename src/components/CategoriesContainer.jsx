import React from "react";
import { Link } from "react-router-dom";

const CategoriesContainer = () => {
  return (
    <>
      <div className="row mt-2 w-100  g-4 mb-5 mx-auto">
        <div className="col-md-3">
          <Link
            to="/categories/electronics"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <div className="card p-1">
              <div className="d-flex justify-content-between align-items-center p-2">
                <div className="flex-column lh-1 imagename">
                  <span>Electronics</span>
                </div>
                <div>
                  <img
                    src="https://www.shubhamworld.com/images/computer.png"
                    height="100"
                    width="100"
                  />{" "}
                </div>
              </div>
            </div>{" "}
          </Link>
        </div>
        <div className="col-md-3">
          <Link
            to="/categories/jewelery"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <div className="card p-2">
              <div className="d-flex justify-content-between align-items-center p-2">
                <div className="flex-column lh-1 imagename">
                  <span>Jewelery</span>
                </div>
                <div>
                  {" "}
                  <img
                    src="https://www.picng.com/upload/ring/png_ring_83180.png"
                    height="100"
                    width="100"
                  />{" "}
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link
            to="/categories/men's%20clothing"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <div className="card p-2">
              <div className="d-flex justify-content-between align-items-center p-2">
                <div className="flex-column lh-1 imagename">
                  <span>Men's clothing</span>{" "}
                </div>
                <div>
                  {" "}
                  <img
                    src="https://www.picng.com/upload/dress_shirt/png_dress_shirt_26375.png"
                    height="100"
                    width="100"
                  />{" "}
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link
            to="/categories/women's%20clothing"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <div className="card p-2">
              <div className="d-flex justify-content-between align-items-center p-2">
                <div className="flex-column lh-1 imagename">
                  <span>Women's clothing</span>
                </div>
                <div>
                  {" "}
                  <img
                    src="https://pngimages.in/uploads/png-thumb/artists_model_PNG__lifestyle_PNG__beauty_PNG__girl_PNG.png"
                    height="100"
                    width="100"
                  />{" "}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CategoriesContainer;
