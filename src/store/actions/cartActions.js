export const actions = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
};

export function addToCart(product) {
  return {
    type: actions.ADD_TO_CART,
    payload: product,
  };
}

export function removeFromCart(product) {
  return {
    type: actions.REMOVE_FROM_CART,
    payload: product,
  };
}
