import React from "react";

import Product from "../../components/layouts/Product";
import Products from "../../components/layouts/Products";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { ProductType } from "../../interfaces/ProductType";

const Cart = () => {
  const { isAuth } = React.useContext(AuthContext);
  const { items, add } = React.useContext(CartContext);

  const handleToggleCart = (item: any) => {
    add(item);
  };

  return (
    <div className="cart">
      <h1>Cart</h1>
      <Products>
        {items.map((item: ProductType["item"], idx: ProductType["key"]) => (
          <Product
            key={idx}
            isAuth={isAuth}
            title={item.title}
            image={item.image}
            description={item.description}
            inCart={items.findIndex((c: any) => c.id === item.id) >= 0}
            toggleCart={() => handleToggleCart(item)}
          />
        ))}
      </Products>
    </div>
  );
};

export default Cart;
