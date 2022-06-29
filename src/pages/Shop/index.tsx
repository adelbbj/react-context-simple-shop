import React from "react";
import { useQuery } from "react-query";

import Product from "../../components/layouts/Product";
import Products from "../../components/layouts/Products";
import { request } from "../../utils/request";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { ProductType } from "../../interfaces/ProductType";
import Loading from "../../components/Loading";

const Shop = () => {
  const { isAuth } = React.useContext(AuthContext);
  const { add, items } = React.useContext(CartContext);

  const { isLoading, isError, error, data }: any = useQuery("repoData", () =>
    request.get("https://store.darkube.app/products").then((res) => res.data)
  );

  const handleToggleCart = (item: ProductType["item"]) => {
    add(item);
  };

  return (
    <div className="products">
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <Products>
          {data.map((item: ProductType["item"], idx: ProductType["key"]) => (
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
      )}
    </div>
  );
};

export default Shop;
