import { initialProductsCart, ProductsCartType } from "./constants";

export const initialState = {
  products: initialProductsCart,
};

export enum Types {
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  EDIT_QUANTITY_PRODUCT = "EDIT_QUANTITY_PRODUCT",
}

interface TypesActions {
  type: Types;
  payload: { id: number; newQuantity?: number };
}

interface ProductsState {
  products: ProductsCartType;
}

export const productsReducer = (state: ProductsState, action: TypesActions) => {
  const { type, payload } = action;
  switch (type) {
    case Types.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload.id),
      };
    case Types.EDIT_QUANTITY_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === payload.id) {
            product.quantity = payload?.newQuantity || product.quantity;
          }
          return product;
        }),
      };
    default:
      return state;
  }
};
