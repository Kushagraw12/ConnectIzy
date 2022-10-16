import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {

  return (
    <Box
      sx={{
        flexGrow: 1,
        border: "0.5px dashed black",
        maxWidth: "70%",
        margin: "auto",
        padding: "0.5rem",
        maxHeight: "30rem",
        overflow: "auto",
      }}
    >
      <Grid container>
        <Grid item md={12} style={{ margin: "auto" }}>
          <Typography
            sx={{ mt: 4, mb: 2 }}
            variant="h6"
            component="div"
            style={{ textAlign: "center" }}
          >
            Explore your Places to Visit
          </Typography>
          <Demo>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
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
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
