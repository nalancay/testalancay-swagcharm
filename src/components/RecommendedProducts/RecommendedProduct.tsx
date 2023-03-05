import React from "react";
import { Box, Typography } from "@mui/material";
import { TypographyStyled } from "./RecommendedProducts.styles";

type RecommendedProduct = {
  product: { title: string; priceRange: string; minimum: number };
};
export const RecommendedProduct = ({ product }: RecommendedProduct) => {
  const { title, priceRange, minimum } = product;
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "secondary.main",
          aspectRatio: "1/1",
          mb: 1,
        }}
      ></Box>
      <TypographyStyled sx={{ fontSize: "16px" }}>{title}</TypographyStyled>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          noWrap
          sx={{
            width: "30%",
            display: "flex",
            justifyContent: "start",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          {priceRange}
        </Typography>
        <Typography
          sx={{
            width: "70%",
            display: "flex",
            justifyContent: "center",
            color: "secondary.light",
          }}
        >
          Minimum: {minimum}
        </Typography>
      </Box>
    </Box>
  );
};
