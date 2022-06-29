import React from "react";
import { ProductsType } from "../../../interfaces/ProductsType";
import "./Products.css";

const Products: React.FC<ProductsType> = ({ children }): JSX.Element => {
  return <div className="row mt-4">{children}</div>;
};

export default Products;
