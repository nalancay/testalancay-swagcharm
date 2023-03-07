import * as React from "react";
import { MyFooter, BoxStyled, PhoneTypographyStyled } from "./Footer.styled";
import { Box, Container, Link, Grid, Typography } from "@mui/material";
import { LocalPhone } from "@mui/icons-material/";
import {
  itemsLanguage,
  itemsRegion,
  socialIcons,
  titleLinksOfCompany,
  titleLinksOfHelp,
  titleLinksOfInformation,
} from "./Footer.constants";
import CustomizedSelect from "../shared/CustomizedSelect";
import Copyright, { GridItemSection, IconLinkSocial } from "./Footer.utils";

export default function Footer() {
  return (
    <MyFooter component="footer">
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Box
              component="img"
              alt="logo"
              src={"assets/swagcharm_logo1.svg"}
            />
            <BoxStyled>
              We sell custom products for all your needs. Packs and bulk
              products that you will enjoy.
            </BoxStyled>

            <Box alignItems="center" display="flex">
              <Box>
                <LocalPhone />
              </Box>
              <Box sx={{ marginLeft: "8px" }}>
                <Link
                  href="tel:+1-302-208-7150"
                  underline="hover"
                  color="inherit"
                >
                  <PhoneTypographyStyled>+1-202-555-0129</PhoneTypographyStyled>
                </Link>
              </Box>
            </Box>
            <Box component="p" sx={{ marginTop: "40px" }}>
              {socialIcons.map((childrenSocialIcon, index) => (
                <IconLinkSocial key={index}>
                  {childrenSocialIcon}
                </IconLinkSocial>
              ))}
            </Box>
          </Grid>
          <GridItemSection
            sectionName="Our company"
            nameLinks={titleLinksOfCompany}
          />
          <GridItemSection
            sectionName="How can we help"
            nameLinks={titleLinksOfHelp}
          />
          <GridItemSection
            sectionName="Information"
            nameLinks={titleLinksOfInformation}
          />
        </Grid>
        <Grid
          container
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "112px",
          }}
        >
          <Grid item>
            <Copyright />
          </Grid>
          <Grid item>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box
                sx={{ display: "flex", alignItems: "center", fontSize: "14px" }}
              >
                <Typography variant="body2" color="text.secondary">
                  Region:
                </Typography>
                <CustomizedSelect
                  items={itemsRegion}
                  defaultOption={itemsRegion[0].name}
                />
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", fontSize: "14px" }}
              >
                <Typography variant="body2" color="text.secondary">
                  Language:
                </Typography>
                <CustomizedSelect
                  items={itemsLanguage}
                  defaultOption={itemsLanguage[0].name}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </MyFooter>
  );
}
