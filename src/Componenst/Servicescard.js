import React from "react";
import { Box, Typography } from "@mui/material";
// import image1 from "../assest/Engineering Services.jpg";
import { useNavigate } from "react-router-dom";

function Servicescard(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    // Use history.push to navigate to another page

    // navigate(`/service/${props.conthead.toLowerCase().replace(/\s+/g, "-")}`);
    // props.onClick(props.heading);
    // console.log(`Clicked on card with heading: ${props.heading}`);
    if (props.conthead) {
      navigate(`/service/${props.conthead.toLowerCase().replace(/\s+/g, "-")}`);
      console.log(`Clicked on card with heading: ${props.heading}`);
    }
  };
  return (
    <Box
      sx={{
        mr: 25,
        ml: 25,
        mt: 10,
        border: "2px solid black",
        display: "flex",
        p: 1,

        justifyContent: "center", // Center horizontally
        borderRadius: "20px", // Set the border-radius
        alignItems: "center", // Center vertically
        flexDirection: `${props.direction}`,
      }}
    >
      <Box sx={{ padding: 3 }}>
        
        <img
          src={props.photo} //  image URL
          alt="phot Alt Text"
          style={{
            alignItems: "right",

            width: "400px", // Set the image width as needed
            height: "350px", // Set the image height as needed
            borderRadius: "50%", // Set the border-radius
          }}
        />
      </Box>

      <Box
        sx={{
          textAlign: "center",
          padding: 5,
        }}
      >
        <Typography
          paragraph
          fontSize="28px"
          color="#34E129"
          fontWeight="bold"
          sx={{
            border: "2px solid #34E129", // Set the border size and color
            borderRadius: "10px", // Set the border radius
            display: "inline-block", // To contain the border within the text
            width: "400px",
            height: "50px",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          {props.heading}
        </Typography>
        <Typography
          paragraph
          fontSize="18px"
          textAlign={"left"}
          color={"black"}
          width="500px"
          marginTop={1}
        >
          {props.Body}
        </Typography>
      </Box>
    </Box>
  );
}

export default Servicescard;
