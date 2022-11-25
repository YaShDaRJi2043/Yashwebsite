import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ListItem } from "@mui/material";

const Header = () => {
  const [state, setState] = React.useState({
    left: false,
  });
  library.add(faBars);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <NavLink to="/" className="sidebar">
            Home
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/about" className="sidebar">
            About
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/project" className="sidebar">
            Project
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/contact" className="sidebar">
            Contact
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/login" className="sidebar">
            Login
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/register" className="sidebar">
            Register
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Navbar bg="light" style={{ boxShadow: "0px 0px 15px -7px #000" }}>
        <Container fluid>
          <div className="slider">
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <FontAwesomeIcon
                  icon="fa-solid fa-bars"
                  onClick={toggleDrawer(anchor, true)}
                  className="menu"
                />
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
          <NavLink to="/" className="right_nav">
            <h1>YASH</h1>
          </NavLink>
          <Nav className="left_nav">
            <NavLink to="/" className="mouseover">
              Home
            </NavLink>
            <NavLink to="/about" className="mouseover">
              About
            </NavLink>
            <NavLink to="/project" className="mouseover">
              Projects
            </NavLink>
            <NavLink to="/contact" className="mouseover">
              Contact
            </NavLink>
            <NavLink to="/login" className="mouseover">
              Login
            </NavLink>
            <NavLink to="/register" className="mouseover">
              Register
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
