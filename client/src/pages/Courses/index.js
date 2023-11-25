import React, { useState } from 'react'
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CourseList from "../../components/CourseList";
import Sidebar from "../../components/Sidebar";
import ClassList from '../../components/ClassList';


const Courses = () => {
  const [showClasses, setShowClasses] = useState(false);

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
                <h1> Courses </h1>
              </div>
            </div>
            {showClasses==false ? <CourseList setShowClasses={ setShowClasses } /> : <ClassList />}
                      
        </section>
                  

        </Typography>
      </Box>
    </Box>
  )
}

export default Courses
