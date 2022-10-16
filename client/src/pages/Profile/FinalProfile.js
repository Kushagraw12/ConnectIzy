import * as React from "react";
// import AppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { QRCodeCanvas } from "qrcode.react";
import ButtonAppBar from "../../components/Navbar";
import axios from "axios";
import { Navigate } from "react-router-dom";
// import SearchBar from "../../components/SearchBar";

const theme = createTheme();

export default function Profile({ fr }) {
  const [user, setUser] = React.useState({});
  const [friends, setFriends] = React.useState(fr ? fr : []);
  const [load, setLoad] = React.useState(false);
  const [events, setEvents] = React.useState([]);
  const [load1, setLoad1] = React.useState(false);

  React.useEffect(() => {
    const creds = localStorage.getItem("uid");
    creds ? (
      axios
        .post("http://localhost:8080/user/getUser", { userID: creds })
        .then((res) => {
          setUser(res.data);
        })
    ) : (
      <Navigate to="/signin" />
    );
    if (!fr) {
      axios
        .post("http://localhost:8080/friend/getAll", { userID: user._id })
        .then((resp) => {
          setFriends(resp.data);
          setLoad(true);
        });
    }
    axios
      .post("http://localhost:8080/event/getAll", { userID: user._id })
      .then((resp) => {
        setEvents(resp.data);
        setLoad1(true);
      });
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ButtonAppBar name={user.firstName} />
      <main>
        {/* Hero unit */}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={3} style={{ padding: "9rem" }}>
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
            <Grid item xs={9} style={{ padding: "5rem" }}>
              <Typography variant="h4" gutterBottom>
                Hey there, scan the QR to add me to your network.
              </Typography>
              <Typography variant="h5" gutterBottom>
                Name: {user.firstName + " " + user.lastName}
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
            {/* <Grid item xs={12}>
              <SearchBar uid={user._id} />
            </Grid> */}
            <Grid item xs={6}>
              <Typography
                variant="h4"
                gutterBottom
                style={{ textAlign: "center" }}
              >
                MY Friends
              </Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {!load ? (
                  <div>Loading...</div>
                ) : (
                  friends.map((friend) => {
                    return (
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar
                            alt={friend.firstName}
                            src="/static/images/avatar/1.jpg"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={friend.firstName + friend.lastName}
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                Comapny: {friend.company}
                              </Typography>
                              <br />
                              Email: {friend.email}
                              <br />
                              Mobile Number: {friend.mobileNum}
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    );
                  })
                )}
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
                {!load1 ? (
                  <div>Loading . . .</div>
                ) : (
                  events.map((ev) => {
                    return (
                      <ListItem alignItems="flex-start">
                        <ListItemText
                          primary={ev}
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              ></Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    );
                  })
                )}
              </List>
            </Grid>
          </Grid>
        </Box>
      </main>
    </ThemeProvider>
  );
}
