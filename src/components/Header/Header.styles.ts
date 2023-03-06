import Toolbar from "@mui/material/Toolbar";
import { styled } from "@material-ui/core/styles";

export const StyledBoxLogo = {
  position: "relative",
  width: 172,
  height: 48,
  left: 92,
  top: 20,
};

export const Toolbar1Styled = styled(Toolbar)({
  "&.MuiToolbar-root": {
    background: "#091625",
    borderBottom: 1,
    height: "88px",
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 800px)": {
      paddingTop: "20px",
      height: "120px",
      alignItems: "flex-start",
    },
  },
});

export const StyledToolbar2 = {
  overflowX: "auto",
  height: "64px",
  background: "#E6E8E9",
};

export const StyledLink = {
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 15,
  lineHeight: "16px",
  color: "#535C67",
  padding: 3,
  textDecoration: "none",
  flexShrink: 0,
  whiteSpace: "nowrap",
};
