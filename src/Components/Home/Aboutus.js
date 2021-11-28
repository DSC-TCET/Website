import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import hero from "../Images/hero.jpeg";

function Aboutus() {
  return (
    <div>
      <Container >
        <Row style={{marginTop:"3vh",paddingBottom:"15vh"}}>
          <Col md={12} sm={12} lg={6} style={{ marginTop: "5vw" }}>
            <h1 id="aboutustitle">Hello Techies!</h1>

            <br />
            <p id="aboutustext">
              We Google Developer Student Clubs (GDSC) TCET, are community
              groups for college and university students interested in Google
              developer technologies. Students from all undergraduate or
              graduate programs with an interest in growing as a developer are
              welcome. By joining a GDSC, students grow their knowledge in a
              peer-to-peer learning environment and build solutions for local
              businesses and their community.
            </p>
            <div id="aboutusbutton">
              <Button
                target="_blank"
                rel="noreferrer"
                size="lg"
                href="https://gdsc.community.dev/thakur-college-of-engineering-and-technology-mumbai/"
                variant="danger"
              >
                Become a Member
              </Button>
            </div>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <div style={{textAlign:"center"}}>
            <img
              src={hero}
              alt="hero"
              style={{ width: "90%" }}
            />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutus;
