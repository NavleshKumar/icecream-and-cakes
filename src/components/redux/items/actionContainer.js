import { ADD_CAKE, ADD_ICE_CREAM, CAKE_QUANTITY, ICE_CREAM_QUANTITY } from "./actionTypes";

export const addcake = (cakes) => {
  return {
    type: ADD_CAKE,
    payload: cakes
  };
};

export const addicecream = (icecreams) => {
  return {
    type: ADD_ICE_CREAM,
    payload: icecreams
  };
};
export const cakeQuantity = (id) => {
  return {
    type: CAKE_QUANTITY,
    payload: id
  };
};
export const icecreamQuantity = (id) => {
    return {
      type: ICE_CREAM_QUANTITY,
      payload: id
    };
  };
