import React, { createContext, useReducer, useEffect, useContext } from 'react';

 
const initialState = {
  items: [],
  total: 0,
};

 
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...state.items];
        const existingItem = updatedItems[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[existingItemIndex] = updatedItem;
        return {
          ...state,
          items: updatedItems,
          total: state.total + action.payload.price,
        };
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        return {
          ...state,
          items: [...state.items, newItem],
          total: state.total + newItem.price,
        };
      }
    }
    case 'REMOVE_ITEM': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex === -1) {
        return state;
      }

      const existingItem = state.items[existingItemIndex];
      const updatedTotal = state.total - existingItem.price;

      if (existingItem.quantity === 1) {
        const updatedItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          items: updatedItems,
          total: updatedTotal,
        };
      } else {
        const updatedItems = [...state.items];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedItems[existingItemIndex] = updatedItem;
        return {
          ...state,
          items: updatedItems,
          total: updatedTotal,
        };
      }
    }
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
};

 
export const CartContext = createContext(initialState);

 
export const CartProvider = ({ children }) => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || initialState;
  const [cartState, dispatch] = useReducer(cartReducer, storedCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartState));
  }, [cartState]);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

 
export const useCart = () => {
  return useContext(CartContext);
};
