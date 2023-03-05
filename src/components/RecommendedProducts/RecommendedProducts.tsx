import { Box } from "@mui/material";
import { RecommendedProduct } from "./RecommendedProduct";
import { BoxGridStyled, TypographyStyled } from "./RecommendedProducts.styles";

interface RecommendedProductsProps {
  products: ReadonlyArray<{
    title: string;
    priceRange: string;
    minimum: number;
  }>;
}

function RecommendedProducts({ products }: RecommendedProductsProps) {
  return (
    <Box sx={{ padding: "45px" }}>
      <TypographyStyled sx={{ fontSize: "24px" }}>
        You might also like
      </TypographyStyled>
      <BoxGridStyled>
        {products.map((product, index: number) => (
          <RecommendedProduct key={`product-${index}`} product={product} />
        ))}
      </BoxGridStyled>
    </Box>
  );
}

export default RecommendedProducts;
