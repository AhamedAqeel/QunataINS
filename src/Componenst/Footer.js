import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Logo from "../assest/Logo1.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ bgcolor: "#3B6978", color: "#000000", p: 15, mt: 10 }}
    >
      <Grid item xs={2}>
        <Box>
          <img src={Logo} alt="" style={{ maxWidth: "70%" }} />
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box>
          <Typography variant="h5" paragraph fontSize="18px">
            Quanta Integration and Solutions is your trusted partner for
            cutting-edge engineering solutions. With a relentless commitment to
            quality and innovation, we deliver excellence in system integration,
            project management, and technical manpower services. At Quanta, we
            bridge the gap between innovation and implementation, providing
            end-to-end solutions tailored to your needs. Explore our services,
            browse our portfolio, and get in touch to discover how we can
            empower your success.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "20pt",
            "& a": {
              textDecoration: "none", // Remove underline for all anchor tags inside this Box
              color: "inherit", // Optionally inherit the text color from the parent
              marginY: "100px", // Add vertical margin (spacing) to anchor tags
            },
          }}
        >
          <Box>
            <a href="/">
              <p>Home</p>
            </a>
            <a href="/Services">
              <p>Services</p>
            </a>
            <a href="/solution">
              <p>Solution</p>
            </a>
            <a href="/Aboutus">
              <p>About US</p>
            </a>
            <a href="/ContactUs">
              <p>Contact US</p>
            </a>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box>
          <Box>
            <Typography>Contect US</Typography>
          </Box>
          <Box sx={{ display: "flex", mt: 2 }}>
            <LocalPhoneIcon />
            <Typography pl={2}> +65 88934188</Typography>
          </Box>
          <Box sx={{ display: "flex", mt: 2 }}>
            <EmailIcon />
            <Typography pl={2}> support@quantains.com</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ borderBottom: "2px solid #86EE60" }}></Box>
      </Grid>
      <Grid item xs={6}>
        <Box pl={10}>
          <LinkedInIcon />
          <FacebookIcon />
          <InstagramIcon />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box textAlign="right" pr={10}>
          <h5>Copyright 2023 tecsa.All Rights Reserved by ABCDEF</h5>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
