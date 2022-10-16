import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogOut } from "../redux/ActionCreators/Auth";

export default function ButtonAppBar({ name }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(LogOut(navigate));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {name}
          </Typography>
          <Button style={{ marginRight: "40%" }} color="inherit" href="/scanqr">
            Scan a QR Code
          </Button>
          <Button color="inherit" onClick={handleLogOut}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
