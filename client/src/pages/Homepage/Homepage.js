import React from "react";
import "./homepage.css";
import { Box, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom';


function Homepage() {
  return (
    <>
      <Box className="homepageBanner">
        {/* <Box sx={{
                    float:'right',
                    padding:'0.7em'
                }}>
                    <Button variant='contained'>Sign In</Button>
                </Box> */}
        <Box className="bannerText">
          <Typography className="bannerHeading">
                Connections Made Easy!
          </Typography>
          
          <Button className="signInButton" component={Link} to="/signin" variant="contained" color="primary">SIGN IN</Button>
        </Box>
      </Box>
      <Box
        sx={{
          p: 2,
        }}
      >
        <Typography variant="h3">Explore</Typography>
      </Box>
    </>
  );
}

export default Homepage;
