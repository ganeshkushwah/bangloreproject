import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectColor, addToCart } from "../Actiondetail/Actions";
import vest from "../../Assets/Images/image1.png";
import "../../Scss/styling/seedetal.css"; 
import { Link } from "react-router-dom";


const SeeDetail = () => {
  const dispatch = useDispatch();
  const selectedColor = useSelector((state) => state.selectedColor);

  const colorOptions = ["black", "red", "grey"];

  const handleAddToCart = () => {
    dispatch(addToCart("Sleeveless Shirt", selectedColor, 1));
   
  };

  return (
    <div className="productdetail-main">
      <div className="productdetail-left">
        <div className="productdetail-img">
          <img src={vest} alt="Vest" />
        </div>
        <div className="productdetail-data">
          <div className="productdetail-heading">
            <h6>Description</h6>
          </div>
          <div className="productdetail-description">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not only five centuries
            </p>
          </div>
          <div className="productdetail-features">
            <ul>
              <li>100% pure cotton</li>
              <li>Made In Peru</li>
              <li>Breathable Pima cotton pique</li>
              <li>Rib knit crewneck</li>
              <li>Embroidered Bunny logo at chest</li>
              <li>Knit stripes at cuffs</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="productdetail-right">
        <h5>Sleeveless Shirt</h5>
        <p>
          $8.00 <span className="price-color"> $6.00 </span>
        </p>
        <div className="productdetail-color">
          <h6>Color</h6>
        </div>
        <div className="color-circles">
          {colorOptions.map((color) => (
            <div
              key={color}
              className="color-circle"
              style={{
                backgroundColor: color,
                border: color === selectedColor ? "2px solid #000" : "none"
              }}
              onClick={() => dispatch(selectColor(color))}

              ></div>
          ))}
        </div>
        <div className="productdetail-size">
          <h6>Size</h6>
          <button className="size-button">S</button>
          <button className="size-button">M</button>
          <button className="size-button">L</button>
          <button className="size-button">XL</button>
        </div>
        <div className="productdetail-quantity">
          <h6>Quantity</h6>
          <button className="quantity-button">- 1 +</button>
        </div>
        <div className="productdetail-button">
        <Link to={"/shoppingcart"} ><button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button></Link>
          <button className="favorite-button">♡ Favourite</button>
        </div>
      </div>
    </div>
  );
};

export default SeeDetail;
