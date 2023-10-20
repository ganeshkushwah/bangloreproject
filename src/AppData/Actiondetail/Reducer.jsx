

import { SELECT_COLOR, ADD_TO_CART } from '../../AppData/Actiondetail/Actions';



const initialState = {
  selectedColor: '',
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_COLOR:
      return {
        ...state,
        selectedColor: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            productName: action.payload.productName,
            color: action.payload.color,
            quantity: action.payload.quantity,
          },
        ],
      };
    default:
      return state;
  }
};

// Assuming you have a Redux store set up and reducers defined

// Your reducer for managing cart items
const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    // Handle actions to add or update cart items
    // ...

    default:
      return state;
  }
};




export default rootReducer;


