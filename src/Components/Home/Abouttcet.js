import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import tcet from "../Images/tcet.jpg";
function Abouttcet() {
  return (
    <div style={{backgroundColor:"#fafafa"}}>
      <Container style={{ height: "95vh" }}>
        <Row>
          <Col>
            <img
              src={tcet}
              alt="tcet"
              style={{ width: "100%", paddingTop: "5vw", paddingRight: "5vw" }}
            />
          </Col>
          <Col style={{ marginTop: "5vw" }}>
            <h1 id="aboutustitle">About TCET</h1>
            <br />
            <p id="aboutustext">
              Thakur College of Engineering and Technology (TCET) is situated in
              Kandivali, Mumbai. An autonomous institute established in 2001.
              The institute trains students in engineering and technology at
              certificate, diploma, degree, post-graduate and doctoral levels.
            </p>
            <div id="aboutusbutton">
              <Button
                target="_blank"
                rel="noreferrer"
                href="https://tcetmumbai.in/"
                size="lg"
                variant="info"
              >
                More Info
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Abouttcet;
