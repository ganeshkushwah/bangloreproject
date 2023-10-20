import React from 'react';
import "../../Scss/styling/shoping.css";

import StarImage from "../../Assets/Images/Star.png";
import HomeHeadingImage from "../../Assets/Images/homeHeading.png";
import TshirtImage1 from "../../Assets/Images/image1.png";
import TshirtImage2 from "../../Assets/Images/image2.jpeg";
import TshirtImage3 from "../../Assets/Images/image3.jpeg";
import TshirtImage4 from "../../Assets/Images/image4.jpeg";
import TshirtImage5 from "../../Assets/Images/image5.jpeg";
import TshirtImage6 from "../../Assets/Images/image6.jpeg";
import TshirtImage7 from "../../Assets/Images/image7.jpeg";

import { Link } from "react-router-dom";

const Shoping = () => {
  return (
    <>
      <div className="bg-img-section">
        <div className="img-star">
          <img src={StarImage} alt="" />
        </div>
        <div className="img-text">
          <img src={HomeHeadingImage} alt="" />
        </div>
      </div>
      <div>
        <p className="p-home">
          Home/<span>Sale</span>
        </p>
      </div>
      <div className="product-list">
        <div className="right-list">
          <div className="card">
            <div className="card-item">
              <p>Category</p>
              <i className="fa-solid fa-angle-down" style={{ color: "#000000" }}></i>
            </div>
            <div className="card-item-2">
              <p>Women</p>
              <i className="fa-solid fa-angle-down" style={{ color: "#000000" }}></i>
            </div>
            <div className="card-check">
              <input type="checkbox" checked /> <label htmlFor="Shirts">Shirts</label><br></br>
              <input type="checkbox" /> <label htmlFor="Dress">Dresses</label><br></br>
              <input type="checkbox" /> <label htmlFor="Shirts">Shorts</label><br></br>
              <input type="checkbox" /> <label htmlFor="Shirts">Skirts</label><br></br>
              <input type="checkbox" /> <label htmlFor="Shirts">Sports Clothing</label><br></br>
            </div>
            <div className="card-item-3">
              <p>Men</p>
              <i className="fa-solid fa-angle-right" style={{ color: "#000000" }}></i>
            </div>
          </div>
        </div>
        <div className="left-list">
          <p>Showing 9 results from a total of 18 for "shirt" on Sale</p>
          <div className="apply-filter">
            <p>Apply Filter: </p>
            <button>Woman <span>X</span></button>
            <button>Tops <span>X</span></button>
          </div>
          <div className="product-list-main">
            <div className="product-card">
              <img src={TshirtImage1} alt="T-Shirt 1" />
              <div className="product-card-content">
                <h3>V-Neck Sleeveless</h3>
                <p>$5.66 <span>$8.00</span></p>
                <div className="buttons">
                  <button>S</button>
                  <button>M</button>
                  <button>L</button>
                  <button>XL</button>
                </div>
                <div className="main-btn">
                  <button><Link to="/seedetail">Add to Cart</Link></button>
                  <button><i className="fa-regular fa-heart" style={{ color: "#ffffff" }}></i></button>
                </div>
              </div>
            </div>
            {/* Repeat this structure for each product */}
            <div className="product-card">
              <img src={TshirtImage2} alt="T-Shirt 2" />
              <div className="product-card-content">
                <h3>V-Neck Sleeveless</h3>
                <p>$5.66 <span>$8.00</span></p>
                <div className="buttons">
                  <button>S</button>
                  <button>M</button>
                  <button>L</button>
                  <button>XL</button>
                </div>
                <div className="main-btn">
                  <button><Link to="/seedetail">Add to Cart</Link></button>
                  <button><i className="fa-regular fa-heart" style={{ color: "#ffffff" }}></i></button>
                </div>
              </div>
            </div>
            {/* Repeat this structure for each product */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shoping;
