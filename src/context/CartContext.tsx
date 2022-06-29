import React, { useState } from "react";

export const CartContext = React.createContext({
  items: [],
  add: (value: any) => value,
});

const CartContextProvider = (props: any) => {
  const [items, setItems] = useState<any>([]);

  const loginHandler = (product: any) => {
    const itemsCopy = [...items];

    const itemIndex = itemsCopy.findIndex(
      (item: any) => item.id === product.id
    );

    if (itemIndex >= 0) {
      itemsCopy.splice(itemIndex, 1);

      setItems([...itemsCopy]);
      return;
    }

    setItems([...items, product]);
  };

  return (
    <CartContext.Provider
      value={{
        items: items,
        add: loginHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
