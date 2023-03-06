import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  BoxContainerStyled,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./SearchBar.styles";

export default function SearchBar() {
  return (
    <BoxContainerStyled>
      <Search
        sx={{
          width: { sm: "90%", md: "90%", lg: "70%" },
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
    </BoxContainerStyled>
  );
}
