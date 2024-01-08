import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Container,
} from "@mui/material";
import MuiPhone from "../Componenst/navbar/muiphone/MuiPhone";
import countryOptions from "../data.json";

import Hero from "../Componenst/Hero";
import HeroImage from "../assest/Contecthero.jpg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //   const [mobilenumber, setmobilenumber] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+18182925620");

  const onPhoneChanged = (val) => {
    setPhoneNumber(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

  return (
    <Box>
      <Box>
        <Hero
          Hero={HeroImage}
          Heading={
            <spam>
              Contact <span style={{ color: "#34E129" }}>Us</span>
            </spam>
          }
          Pera=""
        />
      </Box>
      <Container>
        <Box sx={{ p: 2, color: "black" }}>
          <Typography variant="h4" align="center" mb={2} fontWeight="bold">
            We’re excited to work together.
          </Typography>
          <Typography variant="h5" align="center" mb={2}>
            need more information or want to get in touch? If you have a project
            you would like to discuss, I’d love to hear form you.
          </Typography>

          <Grid container spacing={1}>
            {/* Add spacing here */}
            <Grid item xs={4}>
              <Box>
              <Box >
              <LocalPhoneIcon />
                </Box>
              <Box
                sx={{
                  width: 300,
                  height: 20,
                  backgroundColor: "#84A9AC",
                  boxShadow: "0 5px 6px 6px rgba(0, 0, 0, 0.1)",
                  p: 15,
                  marginTop: 10, // Add margin-top to create a gap
                  flexDirection: 'column',  // Set flex direction to column
                  alignItems: 'center',     // Center items horizontally
                }}
              >
                
                <Typography >Mobile Number</Typography>
                <Typography textAlign={"left"}>0757540585</Typography>
              </Box>
              
              
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  width: 300,
                  height: 50,
                  backgroundColor: "#84A9AC",
                  boxShadow: "0 5px 6px 6px rgba(0, 0, 0, 0.1)",
                  p: 15,
                  marginTop: 10, // Add margin-top to create a gap
                }}
              >
                <EmailIcon />
                <Typography textAlign={"center"}>Email</Typography>
                <Typography pl={2}> support@quantains.com</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  width: 300,
                  height: 30,
                  backgroundColor: "#84A9AC",
                  boxShadow: "0 5px 6px 6px rgba(0, 0, 0, 0.1)",
                  p: 15,
                  marginTop: 10, // Add margin-top to create a gap
                }}
              >
                <PlaceIcon />
                <Typography>Location</Typography>
                <Typography>100EunosAve7,#01-01,Singapore409572</Typography>
              </Box>
            </Grid>
          </Grid>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    border: "1px solid #ccc",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    marginTop: 5,
                    overflow: "hidden", // Ensure the iframe doesn't overflow the box
                    position: "relative", // Ensure positioning context for absolute positioning
                  }}
                >
                  <iframe
                    title="Googlemap"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8211.265985993958!2d103.89499411394847!3d1.3236338357674278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da181c25214c61%3A0xe217bf05daf1133e!2s100%20Eunos%20Ave%207%2C%20%2301-01%2C%20Singapore%20409572!5e0!3m2!1sen!2slk!4v1695278598512!5m2!1sen!2slk"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{
                      border: "none", // Remove border from the iframe
                      position: "absolute", // Position iframe absolutely within the Box
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  margin="normal"
                  required
                  sx={{ marginTop: 5 }}
                />

                <Box
                  style={{
                    height: "auto",
                    Width: "auto",
                    border: "1px solid #ccc",
                    borderRadius: 5,
                    marginTop: 5,
                  }}
                >
                  <MuiPhone
                    value={phoneNumber}
                    label=""
                    countryOptions={countryOptions}
                    onChange={onPhoneChanged}
                  />
                        
                </Box>
                {/* <TextField
                    fullWidth
                    label="Mobilenumber"
                    value={mobilenumber}
                    onChange={(e) => setmobilenumber(e.target.value)}
                    margin="normal"
                    required
                    type="tel"
                  /> */}
                <TextField
                  fullWidth
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  required
                  type="email"
                />
                <TextField
                  fullWidth
                  label="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  margin="normal"
                  required
                  multiline
                  rows={4}
                />
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    style={{
                      borderRadius: 10,
                      backgroundColor: "#204051",
                      padding: "18px 36px",
                      fontSize: "18px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    variant="contained"
                    type="submit"
                    sx={{ mt: 5 }}
                  >
                    SEND MESSAGE
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Box>
  );
}
