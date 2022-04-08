import React from "react";
import { Navbar, Container } from "react-bootstrap";
import LiveTvIcon from "@mui/icons-material/LiveTv";
const MainNavigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <div className="logoContainer">
              <LiveTvIcon />
              <span>Anime Hub</span>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavigation;
