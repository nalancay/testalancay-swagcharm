import { Container } from "@mui/material";
import { ItemsCart } from "../ItemsCart";
import { OrderSummary } from "../OrderSummary";
import RecommendedProducts from "../RecommendedProducts";
import { RecommmendedProducts } from "./LandingPage.constants";
import { styled } from "@material-ui/core/styles";
import { useProductCart } from "../../hooks/useProductCart";

const ContainerGridStyled = styled(Container)({
  "&.MuiContainer-root": {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "24px",
    gridTemplateRows: "auto",
    gridTemplateAreas: `"ItemsCart ItemsCart ItemsCart OrderSummary"`,

    "@media (max-width: 805px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
      gridTemplateAreas: `"ItemsCart"
      "OrderSummary"
      `,
    },
  },
});

function LandingPage() {
  const { products, removeProduct, editQuantityProduct, totalPrice } =
    useProductCart();
  const numberOfItems = products.length;

  return (
    <>
      <ContainerGridStyled>
        <ItemsCart
          products={products}
          removeProduct={removeProduct}
          editQuantityProduct={editQuantityProduct}
        />
        <OrderSummary numberOfItems={numberOfItems} total={totalPrice} />
      </ContainerGridStyled>
      <RecommendedProducts products={RecommmendedProducts} />
    </>
  );
}

export default LandingPage;
