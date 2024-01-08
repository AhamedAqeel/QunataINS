import React from "react";
import { Box, Typography } from "@mui/material";

const servicespage = (props) => {
  const isRowReverse = props.direction === "row";
  return (
    <Box
      sx={{
        mt: 10,
        padding: 2,
        position: "relative",
        display: "flex",
        flexDirection: `${props.direction}`,
        alignItems: "center",
      }}
    >
      <Box>
        <img
          src={props.bimg}
          alt="phot Alt Text"
          style={{
            alignItems: "right",
            marginBottom: 15,
            width: "850px", // Set the image width as needed
            height: "500px", // Set the image height as needed
            borderRadius: "10px", // Set the border-radius
            marginLeft: "30px",
          }}
        />
      </Box>

      <Box
        sx={{
          width: "650px",
          height: "500px",
          position: "absolute",
          top: "8%",
          left: isRowReverse ? "50%" : "15%",
          bgcolor: "#84A9AC",
          borderRadius: "10px",
        }}
      >
        <Box>
          <Typography
            fontSize="28px"
            textAlign={"center"}
            color={"black"}
            width="500px"
            marginTop={5}
            fontWeight="bold"
          >
            {props.conthead}
          </Typography>
        </Box>
        <Box>
          <Typography
            fontSize="18px"
            textAlign={"left"}
            color={"black"}
            width="600px"
            marginTop={1}
            marginLeft={5}
          >
            {props.contbody}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default servicespage;
