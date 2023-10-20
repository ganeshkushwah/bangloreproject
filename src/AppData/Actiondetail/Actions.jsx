
export const SELECT_COLOR = 'SELECT_COLOR';
export const ADD_TO_CART = 'ADD_TO_CART';

export const selectColor = (color) => {
  console.log(color)
  return {
    type: SELECT_COLOR,
    payload: color,
  };
};

export const addToCart = (productName, color, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      productName,
      color,
      quantity,
    },
  };
};
