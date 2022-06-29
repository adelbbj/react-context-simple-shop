import React from "react";
import { Link } from "react-router-dom";

import { ProductType } from "../../../interfaces/ProductType";

import "./product.css";

const Product: React.FC<ProductType["item"]> = ({
  title,
  image,
  description,
  toggleCart,
  inCart,
  isAuth,
}): JSX.Element => {
  return (
    <div className="col-md-4">
      <div className="product">
        <div className="image">
          <img src={image} alt={title} loading="lazy" />
        </div>
        <h6>{title}</h6>
        <p>{description}</p>

        <div className="toolbar">
          {isAuth ? (
            <span onClick={toggleCart} className="add-to-cart">
              {inCart ? "Remove From Cart" : "Add To cart"}
            </span>
          ) : (
            <Link to="login">
              <span className="login-to-buy">Login To Buy</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
