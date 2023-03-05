import { Box, Typography } from "@mui/material";
import { styled } from "@material-ui/core/styles";

export const TypographyStyled = styled(Typography)({
  "&.MuiTypography-root": {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "16px",
    marginBottom: "16px",
    color: "#000000",
  },
});

export const BoxGridStyled = styled(Box)({
  "&.MuiBox-root": {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(24%, 336px))",
    gridGap: "24px",

    "@media (max-width: 805px)": {
      gridTemplateColumns: "repeat(auto-fit, minmax(24%, 336px))",
      justifyContent: "center",
    },
  },
});
