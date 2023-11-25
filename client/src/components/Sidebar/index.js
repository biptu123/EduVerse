import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar,ListItemText, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import InboxIcon from "@mui/icons-material/MoveToInbox";


const Sidebar = () => {
    const drawerWidth = 240;

  return (
     <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                <Link to={'/dashboard'}><ListItemText primary={'Dashboard'} /></Link>
                </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <Link to={'/profile'}><ListItemText primary={'Profile'} /></Link>
                </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <Link to={'/courses'}><ListItemText primary={'Courses'} /></Link>
                </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Logout'} />
                </ListItemButton>
              </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
  )
}

export default Sidebar
