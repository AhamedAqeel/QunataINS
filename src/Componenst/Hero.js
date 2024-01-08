import React from "react";
import { Box, Typography } from "@mui/material";

const Hero = (props) => {
  const { imageProps } = props;

  const containerStyle = {
    position: "relative",
    color: "#ffffff", // Set text color to white (or your desired color)
    textAlign: "center",
  };
  const overlayStyle = {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(46, 110, 101, 0.5)", // Green color with opacity

    zIndex: 0, // Behind the text
  };

  const textContainerStyle = {
    position: "absolute",
    top: "50%", // Vertically center the text container
    left: "20%", // Horizontally center the text container
    transform: "translate(-50%, -50%)", // Center both horizontally and vertically
    zIndex: 1, // Ensure text is on top of the image
  };

  return (
    <Box sx={containerStyle}>
      <Box>
        <img
          src={props.Hero}
          style={{
            width: "100%",
            height: "40rem",
            objectFit: "cover", // Ensure the image covers the entire container
          }}
          alt="Hero"
          {...imageProps}
        />
        <div style={overlayStyle}></div>
      </Box>
      <Box sx={textContainerStyle}>
        <Typography
          variant="h2"
          component="div"
          sx={{ fontSize: "96px", fontWeight: "bold" }}
        >
          {props.Heading}
        </Typography>
        <Typography variant="h5" paragraph>
          {props.Pera}
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
