import CartContext from './cart-context';
import { useState } from 'react';



const CartProvider = (props) => {
    const[items,updateItems]=useState([]);



const addItemToCartHandler = (item) => {
    console.log(item)
    const existingItemIndex = items.findIndex((i) => i.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      const existingItem = updatedItems[existingItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: Number(existingItem.quantity) + Number(item.quantity),
      };
      updatedItems[existingItemIndex] = updatedItem;
      updateItems(updatedItems);
    } else {
      updateItems([...items, item]);
    }
  };

  const removeItemFromCartHandler = (id) => {
  console.log(id)
    
    const existingCartItemIndex = items.findIndex((item) => item.id === id);
    if (existingCartItemIndex === -1) {
      return;
    }
    const existingItem = items[existingCartItemIndex];
  console.log(existingItem)
    let updatedItems;
    if (existingItem.quantity === 1) {
      updatedItems = items.filter((item) => item.id !== id);
    } else {
      const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
      updatedItems = [...items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
  
    updateItems(updatedItems);
  };

  const cartContext = {
    items: items,
  
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;