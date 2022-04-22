import { actions } from "../actions/cartActions";
import { cartItems } from "../initialState/cartItems";

const initialState = {
  cartItems: cartItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.ADD_TO_CART:
      let product = state.cartItems.find((c) => c.product.id === payload.id);
      if (product) {
        product.quantity++;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { quantity: 1, product: payload }],
        };
      }

    case actions.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.product.id !== payload.id),
      };

    default:
      return state;
  }
}
