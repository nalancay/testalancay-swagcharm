import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import { Person2Outlined, ShoppingBagOutlined } from "@mui/icons-material";
import {
  StyledBoxLogo,
  StyledLink,
  StyledToolbar2,
  Toolbar1Styled,
} from "./Header.styles";
import SearchBar from "../SearchBar";

export interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
}

export default function Header(props: HeaderProps) {
  const { sections } = props;
  return (
    <React.Fragment>
      <Toolbar1Styled>
        <Box
          component="img"
          sx={{ StyledBoxLogo }}
          alt="logo"
          src={"assets/swagcharm_logo.svg"}
        />
        <SearchBar />
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              color="inherit"
              aria-label="menu"
              startIcon={
                <Person2Outlined
                  style={{ color: "#ffff", transform: "scale(1.5)" }}
                />
              }
              sx={{
                textTransform: "none",
                whiteSpace: "nowrap",
                color: "#ffff",
              }}
            >
              Sign in
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              color="inherit"
              aria-label="menu"
              startIcon={
                <ShoppingBagOutlined
                  style={{ color: "#ffff", transform: "scale(1.5)" }}
                />
              }
              sx={{
                textTransform: "none",
                whiteSpace: "nowrap",
                color: "#ffff",
              }}
            >
              Cart
            </Button>
          </Box>
        </Box>
      </Toolbar1Styled>
      <Toolbar component="nav" variant="dense" sx={StyledToolbar2}>
        {sections.map((section) => (
          <Link
            underline="hover"
            key={section.title}
            variant="body2"
            href={`#${section.url}`}
            sx={StyledLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
