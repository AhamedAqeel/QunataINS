import React from "react";
import { Box, Typography } from "@mui/material";

const solutioncon = (props) => {
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
          src={props.cimg}
          alt="phot Alt Text"
          style={{
            alignItems: "right",
            marginBottom: 15,
            width: "1400px", // Set the image width as needed
            height: "700px", // Set the image height as needed
            borderRadius: "10px", // Set the border-radius
            marginLeft: "35px",
          }}
        />
      </Box>

      <Box
        sx={{
          width: "750px",
          height: "550px",
          position: "absolute",
          top: "20px",
          left: isRowReverse ? "50%" : "46%",
          bgcolor: "#FFFFFF",
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
            marginLeft={15}
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
            width="auto"
            marginTop={1}
            marginLeft={5}
            marginRight={5}
          >
            {props.contbody}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default solutioncon;
