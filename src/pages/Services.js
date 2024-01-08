import { Box, Grid, Typography,  } from "@mui/material";
import React from "react";
import Hero from "../Componenst/Hero";
import Heroservices from "../assest/Serviceshero.jpg";
import image from "../assest/abouthero.jpg";
import Servicespage from "../Componenst/servicespage";
import image1 from "../assest/whatwedo.png";
import image2 from "../assest/engineeing.jpg";
import image3 from "../assest/projectmg.jpg";
import image4 from "../assest/manpawer.jpg";

function Services() {
  const handleCardClick = (heading) => {
    // Do something with the heading, e.g., navigate to a new page
    console.log("Clicked on card with heading:", heading);
  };
  return (
    <>
      <Box>
        <Hero
          Hero={Heroservices}
          Heading={
            <spam>
              Servic<span style={{ color: "#34E129" }}>es</span>
            </spam>
          }
          Pera=""
        />
      </Box>

      <Grid
        item
        xs={12}
        sx={{
          mr: 10,
          ml: 10,
          mt: 10,

          display: "flex",
          bgcolor: "#84A9AC",
          justifyContent: "center", // Center horizontally
          borderRadius: "20px", // Set the border-radius
          alignItems: "center", // Center vertically
          
        }}
      >
        <Box>
          <img
            src={image1} // Replace with your image URL
            alt="phot Alt Text"
            style={{
              alignItems: "right",
              marginTop: 65,
              marginBottom: 15,
              width: "500px", // Set the image width as needed
              height: "400px", // Set the image height as needed
              borderRadius: "10px", // Set the border-radius
              marginLeft: "90px",
            }}
          />
        </Box>
        <Box
          sx={{
            textAlign: "center",
            marginTop: 5, // Add margin-top to create a gap
            paddingX: 5,
          }}
        >
          <Typography
            paragraph
            fontSize="28px"
            color="#204051"
            fontWeight="bold"
          >
            What We Do ?
          </Typography>
          <Typography
            paragraph
            fontSize="18px"
            textAlign={"left"}
            color={"black"}
            width="750px"
            marginTop={1}
          >
            Quanta's Services  where innovation and expertise converge to redefine your project landscape. At Quanta, we specialize in a comprehensive range of engineering services. Our skilled team is dedicated to seamlessly planning, executing, and delivering projects with precision and efficiency. Quanta is a leader in offering full-service engineering solutions, with a particular emphasis on fleet management, which includes vehicle tracking, diagnostics, and fuel-efficient upgrades. We understand that effective project management is the backbone of successful ventures. Our experienced team is committed to precisely and efficiently organizing, carrying out, and completing tasks. We assist our clients at every stage, from the first scoping of the project to the definition of goals, schedules, and resource needs. Important components of our services include risk management, budgeting, resource allocation, timetable and schedule adherence, and strict quality assurance. Recognizing the importance of a skilled workforce, Quanta offers manpower supply services. Our committed staff is skilled in material handling, construction, maintenance, equipment operation, and site support, guaranteeing a smooth project flow with effective documentation and reporting.

Explore the possibilities with Quanta as your partner in success. Contact us today to discover how our tailored services can elevate your projects, drive efficiency, and propel your business forward.

          </Typography>
        </Box>
      </Grid>

      <Grid>
        <Servicespage
          direction="row"
          bimg={image2}
          conthead="Engineering services"
          contbody="Quanta excels in providing comprehensive engineering services, focusing on critical aspects such as fleet management, encompassing vehicle tracking, diagnostics, and fuel efficiency enhancements. Our skilled manpower is adept at technical tasks, ranging from cable laying to the installation of surveillance cameras. Additionally, we specialize in managing skilled manpower for technical tasks, configuration of On-Board Cameras (OBCs) for vehicle safety, and the design of electrical circuits for power distribution, control systems, and automation. Catering to infrastructure projects and industrial facilities, our services are indispensable. In the realm of Building Management Systems (BMS), Quanta delivers expertise in access card systems, security biometrics and CCTV installations. 
          These services play a pivotal role in supporting infrastructure projects and industrial facilities, making Quanta an indispensable partner for your Intergration and Solutions
          "
          onClick={handleCardClick}
        />
        <Servicespage
          direction="row-reverse"
          bimg={image3}
          conthead="Project Management Services"
          contbody="Our expert team is dedicated to seamlessly planning, executing, and delivering projects with precision and efficiency. From initial project scoping to defining objectives, timelines, and resource requirements, we guide our clients through every phase. Our services encompass vital aspects such as budgeting, resource allocation, risk management, timeline and schedule adherence, and stringent quality assurance.
          With a keen focus on maintaining clear communication among stakeholders, we ensure that potential issues are identified and resolved promptly, keeping the project on track.
          "
          onClick={handleCardClick}
        />
        <Servicespage
          direction="row"
          bimg={image4}
          conthead="Manpower staffing servicess"
          contbody="Quanta delivers a diverse spectrum of engineering services, encompassing electrical, mechanical, civil, and software engineering. Additionally, we provide skilled technicians and IT professionals to bolster and streamline your IT infrastructure and software development requirements. In the realm of manpower supply, Quanta extends its support by offering skilled labor, general labor, and administrative personnel. Our dedicated workforce is proficient in construction, maintenance, material handling, equipment operation, and site support, ensuring the seamless flow of projects with efficient documentation and reporting."
          onClick={handleCardClick}
        />
        {/* <Servicespage
          direction="row-reverse"
          bimg={image}
          conthead="Server Management"
          contbody="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged."
          onClick={handleCardClick}
        /> */}
      </Grid>
    </>
  );
}

export default Services;
