import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import "./profile.css";
import Sidebar from "../../components/Sidebar";
// import { FormControl, InputLabel, Input } from "@mui/material";


export default function Profile() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
      </AppBar>
      
      <Sidebar />
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography>
          <section style={{ marginTop: "-100px" }}>
            <div className="form_data">
              <div className="from_heading">
                <h1> Profile </h1>{" "}
              </div>{" "}
              <form>
                <div className="form_input">
                  <label htmlFor="Name"> Name </label>{" "}
                  <input type="name" name="name" id="name" />{" "}
                  <label htmlFor="rollno"> Roll No. </label>{" "}
                  <input type="text" name="rollno" id="rollno" />{" "}
                  <label htmlFor="password"> Password </label>{" "}
                  <div className="two">
                    <input type="password" name="password" id="password" />{" "}
                  </div>{" "}
                </div>{" "}
              </form>{" "}
            </div>{" "}
          </section>{" "}
        </Typography>
      </Box>
    </Box>
  );
}
