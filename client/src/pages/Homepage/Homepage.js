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
                Connections Made Easy
          </Typography>
          <div style={{display: 'flex'}}>
          <Button className="signInButton" component={Link} to="/signin" variant="contained" color="primary" style={{marginLeft: 'auto'}}>SIGN IN</Button>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default Homepage;
