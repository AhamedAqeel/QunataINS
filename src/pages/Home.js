import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import Hero from "../Componenst/Hero";
import heroimage from "../assest/Homehero.jpg";
import simage1 from "../assest/engineering.jpg";
import simage2 from "../assest/projectmg (2).jpg";
import simage3 from "../assest/manpr.jpg";
import Servicescard from "../Componenst/Servicescard";
import image1 from "../assest/OurExpertiseandspecialists.jpg";

function Home() {
  return (
    <container>
      <Box>
        <Box sx={{ position: "relative" }}>
          <Hero Hero={heroimage} Heading="" Pera="" />
        </Box>
        <Box
          sx={{
            width: "600px",
            height: "400px",
            bgcolor: "rgba(70, 59, 59, 0.5)",
            position: "absolute",
            top: "32%",
            left: "7%",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              color: "#34E129",
              textAlign: "center",
            }}
          >
            <Typography fontSize="28px" fontWeight="bold" mt="50px">
              Your Pathway to Seamless Solutions
            </Typography>
          </Box>
          <Box
            sx={{
              color: "#FFFFFF",
              textAlign: "left",
            }}
          >
            <Typography
              fontSize="20px"
              fontWeight="bold"
              mt="30px"
              ml="15px"
              mr="15px"
            >
              Welcome to Quanta Integration and Solutions, where we, as a
              leading technology company, believe in the profound impact of
              seamless integration to revolutionize complex challenges into
              innovative solutions. Specializing in the logistics industry,
              particularly in fleet-based solutions, we stand as experts at the
              intersection of technology and logistics. Quanta is your ultimate
              destination for cutting-edge solutions that bridge the gap between
              innovation and implementation.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Grid container sx={{ mt: 10 }}>
        <Grid item xs={6}>
          <Box
            sx={{
              textAlign: "center",
              marginTop: 10, // Add margin-top to create a gap
              paddingX: 15,
            }}
          >
            <Typography
              paragraph
              fontSize="28px"
              color="#34E129"
              fontWeight="bold"
            >
              Our Expertise and specialists
            </Typography>
            <Typography
              paragraph
              fontSize="18px"
              textAlign={"left"}
              color={"black"}
            >
              When you choose Quanta for your integration and solution needs,
              you choose a partner committed to your success. With a profound
              understanding of the intricate dynamics within the logistics
              industry, especially in the realm of fleet-based solutions, our
              team brings unparalleled knowledge and experience to the table.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <img
              src={image1} // Replace with your image URL
              alt="phot Alt Text"
              style={{
                alignItems: "right",
                marginTop: 15,
                marginBottom: 15,
                width: "490px", // Set the image width as needed
                height: "350px", // Set the image height as needed
                borderRadius: "20px", // Set the border-radius
              }}
            />
          </Box>
        </Grid>
        <Grid>
          <Box
            sx={{
              bgcolor: "#84A9AC",
              mt: 10,
              border: "2px solid #34E129",
              borderRadius: "10px",
            }}
          >
            <Typography
              paragraph
              fontSize="80px"
              color="black"
              fontWeight="bold"
              textAlign={"center"}
              marginLeft={10}
              marginRight={10}
              marginTop={5}
            >
              We're committed to delivering our best solutions, rooted in trust
            </Typography>
          </Box>
        </Grid>

        <Grid>
          <Servicescard
          photo={simage1}
            direction="row"
            heading="Engineering Services"
            Body="Quanta offers engineering services for fleet management, including installation, automation and industrial efficiency improvements…."
          />
          <Servicescard
          photo={simage2}
            direction="row-reverse"
            heading="Project Management Services"
            Body="Quanta Integration and Solutions may offer a range of project management services, including traditional project management and agile project management … "
          />
          <Servicescard
          photo={simage3}
            direction="row"
            heading="Manpower staffing servicess"
            Body="Quanta Integration and Solutions may offer a range of Manpower Supply Services to meet the staffing needs of their clients. These services can include the provision of both technical and general workers…"
          />
          {/* <Servicescard
            direction="row-reverse"
            heading="Server Management"
            Body="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged."
          /> */}
        </Grid>
      </Grid>
    </container>
  );
}

export default Home;
