import { Box, Typography } from "@mui/material";
import { styled } from "@material-ui/core/styles";

export const MyFooter = styled(Box)({
  background: "#E6E8E9",
  paddingTop: "80px",
  paddingBottom: "76px",
});

export const TypographySectionStyled = styled(Typography)({
  "&.MuiTypography-root": {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "24px",
    color: "#091625",
    marginLeft: "24px",
    marginBottom: "24px",
  },
});

export const TypographyLinkStyled = styled(Typography)({
  "&.MuiTypography-root": {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "16px",
    color: "#3A4451",
    marginBottom: "16px",
    marginLeft: "24px",
  },
});

export const BoxStyled = styled(Box)({
  "&.MuiBox-root": {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "24px",
    marginBottom: "24px",
    color: "#6B737C",
  },
});

export const PhoneTypographyStyled = styled(Typography)({
  "&.MuiTypography-root": {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "16px",
    color: "#091625",
  },
});
