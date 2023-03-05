import { useMemo, useReducer } from "react";
import { getTotalPriceProducts } from "./constants";
import { initialState, Types, productsReducer } from "./useProductCart.utils";

export const useProductCart = () => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const removeProduct = (id: number) =>
    dispatch({ type: Types.REMOVE_PRODUCT, payload: { id } });

  const totalPrice = useMemo(
    () => getTotalPriceProducts(state.products),
    [state.products]
  );

  const editQuantityProduct = (id: number, newQuantity: number) =>
    dispatch({
      type: Types.EDIT_QUANTITY_PRODUCT,
      payload: { id, newQuantity },
    });

  return {
    products: state.products,
    removeProduct,
    totalPrice,
    editQuantityProduct,
  };
};
