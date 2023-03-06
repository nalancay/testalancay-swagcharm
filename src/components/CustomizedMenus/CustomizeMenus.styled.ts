import Button from "@mui/material/Button";
import { styled } from "@material-ui/core/styles";

export const MyButton = styled(Button)({
  "&.MuiButtonBase-root": {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "16px",
    textAlign: "right",
    color: "#091625",
    textTransform: "capitalize",
    paddingLeft: "8px",
  },
});
