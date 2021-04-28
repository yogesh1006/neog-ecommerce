export function reducerFunction(state, action) {
    console.log(action.payload);
  switch (action.type) {
    case "SET_PRODUCTLIST":
      return {
        products: action.payload,
        cart: state.cart,
      };
    default:
      return { state };
  }
}
