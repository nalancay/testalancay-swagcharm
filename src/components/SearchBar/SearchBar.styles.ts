import { InputBase, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: "white",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    "&::placeholder": {
      opacity: 1,
      color: "black",
    },
  },
}));

export const BoxContainerStyled = styled(Box)({
  "&.MuiBox-root": {
    display: "flex",
    justifyContent: "flex-start",
    width: "70%",
    marginLeft: 68,
    "@media (max-width: 800px)": {
      marginLeft: "10px",
      justifyContent: "center",
      width: "90%",
      position: "absolute",
      top: "76px",
    },
  },
});
