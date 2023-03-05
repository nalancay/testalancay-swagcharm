import React from "react";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MyButton } from "./CustomizeMenus.styled";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
  },
}));

interface CustomizedMenusProps {
  items: ReadonlyArray<{
    name?: string;
    src?: string;
    optionValue?: number;
  }>;
  defaultOption: string;
  setSelectOptionQuantity?: (option: number) => void;
  stylesCustom?: { borderBottom: string; backgroundColor: string };
}

export default function CustomizedMenus(props: CustomizedMenusProps) {
  const { items, defaultOption, setSelectOptionQuantity } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  //const stylesMain = props?.stylesCustom ? props.stylesCustom : {};

  const handleClose = (event: any) => {
    if (setSelectOptionQuantity) {
      setSelectOptionQuantity(event.target.innerText);
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <MyButton
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          backgroundColor: props?.stylesCustom?.backgroundColor || "#E6E8E9",
          ":hover": {
            backgroundColor: props?.stylesCustom?.backgroundColor || "#E5E8E8",
          },
        }}
      >
        {items[0]?.src && (
          <Box
            component="img"
            alt="logo"
            src={items[0]?.src}
            sx={{ width: "16px", height: "16", margin: "4px" }}
          />
        )}
        <Box
          component="span"
          sx={{ borderBottom: props?.stylesCustom?.borderBottom }}
        >
          {defaultOption}
        </Box>
      </MyButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {items.map((item, index) => (
          <MenuItem key={index} onClick={handleClose} disableRipple>
            {items[0]?.src && (
              <Box
                component="img"
                alt=""
                src={items[0]?.src}
                sx={{ width: "16px", height: "16", margin: "4px" }}
              />
            )}
            {item?.name || item?.optionValue}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
