import React, { useState } from "react";
import TextField from "@mui/material/TextField";
// import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import Profile from "../pages/Profile/FinalProfile.js";
import Button from "@mui/material/Button";

function SearchBar(uid) {
  const [txt, setTxt] = useState("");
  const [val, setVal] = React.useState("");

  const handleSubmit = () => {
    if (txt === "") {
      alert("Please Enter something in the search box!");
    } else if (val === "") {
      alert("Please select a criteria to search by!");
    } else {
      if (val === 60) {
        // search by name
        axios
          .post("http://localhost:8080/search/find_by_name", { name: txt })
          .then((res) => {
            <Profile fr={res} />;
          });
      }
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setVal(event.target.value);
  };

  const handleChange2 = (e: SelectChangeEvent) => {
    setTxt(e.target.value);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={8} sm={6} style={{ paddingLeft: "2rem" }}>
          <TextField
            autoComplete="given-name"
            name={txt}
            required
            fullWidth
            id={txt}
            label="Type here to search among your friends!"
            onChange={handleChange2}
          />
        </Grid>
        <Grid item xs={4} sm={6}>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={val}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Search By</em>
            </MenuItem>
            <MenuItem value={60}>Name</MenuItem>
            <MenuItem value={20}>Date</MenuItem>
            <MenuItem value={30}>Mobile Number</MenuItem>
            <MenuItem value={40}>Email Id</MenuItem>
            <MenuItem value={50}>Company</MenuItem>
          </Select>
        </Grid>
        <Button color="inherit" onClick={handleSubmit}>
          Search
        </Button>
      </Grid>
    </div>
  );
}
export default SearchBar;
