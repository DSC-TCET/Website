import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import brandlogo from "../Images/gdsclogo.png";

function Header() {
  const [showNavRight, setShowNavRight] = useState(false);
  return (
    <MDBNavbar
      
      style={{
        fontFamily: "Open Sans, sans-serif",
        paddingTop: "3vh",
        paddingBottom: "3vh",
      }}
      expand="lg"
      light
      bgColor="light"
    >
      <MDBContainer fluid>
        <MDBNavbarBrand
          style={{ paddingLeft: "5vw", fontSize: "2em" }}
          href="/"
        >
          <img src={brandlogo} height="50" alt="gdsctcet" loading="lazy" />
          GDSC TCET
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarRightAlignExample"
          aria-controls="navbarRightAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav
            style={{
              fontFamily: "Open Sans, sans-serif",
              paddingRight: "5vw",
              fontSize: "1.5em",
            }}
            right
            fullWidth={false}
            className="mb-2 mb-lg-0"
          >
            <MDBNavbarItem>
              <MDBNavbarLink to="/" href="/">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/events">Events</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="team">Team</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;
