import { Link, Grid, Typography, IconButton } from "@mui/material";
import { TypographySectionStyled, TypographyLinkStyled } from "./Footer.styled";

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"©"}
      {new Date().getFullYear()}
      {" Customer Products. All rights reserved."}
    </Typography>
  );
}

type LinkTypographyProps = {
  titleLink: string;
  key: number;
};

const LinkTypography = ({ titleLink, key }: LinkTypographyProps) => (
  <TypographyLinkStyled key={key} variant="body2">
    <Link color="inherit" href="#" underline="hover">
      {titleLink}
    </Link>
  </TypographyLinkStyled>
);

interface SectionLinksProps {
  sectionName: string;
  nameLinks: ReadonlyArray<string>;
}

export const GridItemSection = ({
  sectionName,
  nameLinks,
}: SectionLinksProps) => (
  <Grid item xs={12} sm={6} md={3} lg={3}>
    <TypographySectionStyled variant="h6">
      {sectionName}
    </TypographySectionStyled>
    {nameLinks.map((titleLink, index) => (
      <LinkTypography key={index} titleLink={titleLink} />
    ))}
  </Grid>
);

type SvgIconComponentProps = {
  children: JSX.Element;
};

export const IconLinkSocial = ({ children }: SvgIconComponentProps) => (
  <Link href="#">
    <IconButton
      sx={{
        width: "32px",
        height: "32px",
        borderRadius: "100%",
        backgroundColor: "#535C67",
        color: "#FFFFFF",
        marginLeft: "8px",
        padding: "8px",
        ":hover": { backgroundColor: "#535C67" },
      }}
    >
      {children}
    </IconButton>
  </Link>
);
