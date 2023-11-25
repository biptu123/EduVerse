import React from 'react'
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Sidebar from "../../components/Sidebar";


const Dashboard = () => {
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
                <h1> Dashboard </h1>
              </div>

            </div>
          </section>
        </Typography>
      </Box>
    </Box>
  )
}

export default Dashboard
