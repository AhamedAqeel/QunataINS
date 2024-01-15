import { Typography, Grid, Box } from "@mui/material";
import React from "react";
import Hero from "../Componenst/Hero";
import aboutHero from "../assest/abouthero.jpg";
import AboutusWhoWeare from "../assest/aboutuswhoweare.jpg";
import mission from "../assest/mission.png";
import vision from "../assest/vision.png";

function Aboutus() {
  return (
    <>
      <Box sx={{ width: "100%", height: "30%" }}>
        <Hero
          Hero={aboutHero}
          Heading={
            <spam>
              About <span style={{ color: "#34E129" }}>Us</span>
            </spam>
          }
        />

        <Grid container sx={{ mt: 3 }}>
          <Grid item xs={12} sx={{ p: 5, pr: 10, pl: 10 }}>
            <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
              <Box
                sx={{
                  width: "60%",
                  height: "30rem",
                  borderRadius: "20px",
                }}
              >
                <img
                  src={AboutusWhoWeare}
                  style={{
                    ml: "50px",
                    width: "95%",
                    height: "120%",
                    objectFit: "cover", // Ensure the image covers the entire container
                  }}
                  alt="Hero"
                />
              </Box>
              <Box sx={{ width: "40%", height: "30rem", marginTop: "40px", }}>
                <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold", color: "Green" }}>
                  "Welcome to Quanta, where our story is one rooted in passion, expertise, and a collective vision for engineering excellence. Founded by a group of seasoned engineers with a combined industry experience of over 10 years, Quanta is driven by the belief that innovation and precision can transform challenges into opportunities. Drawing on years of hands-on experience, our team brings a wealth of knowledge to every project, ensuring that we not only meet but exceed the expectations of our clients.
                  We know the complex dynamics of the industry because our company was formed by engineers, for engineers. Whether it is software, mechanical, electrical, or civil engineering, this profound understanding serves as the cornerstone of our dedication to offering the best engineering services possible.
                  Join us on this journey as we continue to evolve, innovate, and shape the future of the industry. Welcome to Quanta – where experience meets enthusiasm, and every project is an opportunity to create something extraordinary."
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                mt: 20,
              }}
            >
              <Box
                sx={{
                  bgcolor: "red",
                  width: "60%",
                  height: "30rem",
                  borderRadius: "20px",
                }}
              >
                <img
                  src={vision}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  alt="Hero"
                />
              </Box>
              <Box sx={{ p: 2, pt: 15, width: "40%", height: "30rem" }}>
                <Typography
                  ml={"20px"}
                  sx={{ fontSize: "1.5rem", fontStyle: "bold", color: "#333" }}
                >
                  " To become the most innovative and customer centric fleet
                  solution provider to build a sustainable future. So every
                  business can focus and accelerate on what they are best at"
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                mt: 2,
              }}
            >
              <Box sx={{ p: 2, pt: 12, width: "45%", height: "30rem" }}>
                <Typography
                  mr={"10px"}
                  ml={"20px"}
                  sx={{ fontSize: "1.5rem", fontStyle: "bold", color: "#333" }}
                >
                  Our Mission is to accelerate our customer base to 6 major
                  customers to serve a fleet upto 6000 units in Maintenance,
                  Project services and IT and Software support. While
                  integrating solutions, implementing innovative ideas and being
                  customer centric. Because every business is able to contribute
                  towards the sustainability of our next
                </Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: "red",
                  width: "55%",
                  height: "30rem",
                  borderRadius: "20px",
                  // alignItems: "Right",
                }}
              >
                <img
                  src={mission}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  alt="Hero"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Aboutus;
