import * as React from "react";
import AppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { QRCodeCanvas } from "qrcode.react";
import GetFriend from "./GetFriend";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Profile() {
  const user = useSelector((state) => state.auth.authData);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {user.firstName} {user.lastName}
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} style={{ padding: "9rem" }}>
              <div>
                <QRCodeCanvas
                  id="qrCode"
                  value={user._id}
                  size={200}
                  bgColor={"#ffffff"}
                  level={"H"}
                />
              </div>
            </Grid>
            <Grid item xs={6} style={{ padding: "5rem" }}>
              <Typography variant="h4" gutterBottom>
                Hey there, scan the QR to add me to your network.
              </Typography>
              <Typography variant="h5" gutterBottom>
                Email: {user.email}
              </Typography>
              <Typography variant="h5" gutterBottom>
                Contact: {user.mobileNum}
              </Typography>
              <Typography variant="h5" gutterBottom>
                Currently At: {user.company}
              </Typography>
              <Typography variant="h5" gutterBottom>
                University: {user.univ_attended}
              </Typography>
              <Typography variant="h5" gutterBottom>
                {" "}
                <Link
                  href={user.linkedinProfile}
                  variant="body2"
                  target="_blank"
                >
                  Here's a link to my social
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h4"
                gutterBottom
                style={{ textAlign: "center" }}
              >
                MY CONNECTIONS
              </Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {" "}
                {user.friends.map((friend) => {
                  return (
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/1.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Friend Name"
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Ali Connors
                            </Typography>
                            {
                              " — I'll be in your neighborhood doing errands this…"
                            }
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h4"
                gutterBottom
                style={{ textAlign: "center" }}
              >
                MY EVENTS
              </Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {" "}
                {user.eventsAttended.map((friend) => {
                  return (
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary="Event Name"
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Ali Connors
                            </Typography>
                            {
                              " — I'll be in your neighborhood doing errands this…"
                            }
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
          </Grid>
        </Box>
      </main>
    </ThemeProvider>
  );
}
