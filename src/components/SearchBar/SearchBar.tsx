import Box from "@mui/material/Box";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Search, SearchIconWrapper, StyledInputBase } from "./SearchBar.styles";

export default function SearchBar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        width: "70%",
        ml: 6,
      }}
    >
      <Search
        sx={{
          width: { sm: "40%", md: "60%", lg: "70%" },
          display: "flex",
        }}
      >
        <SearchIconWrapper>
          <SearchOutlinedIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search products"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Box>
  );
}
