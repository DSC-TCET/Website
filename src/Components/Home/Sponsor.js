import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Typography from "@mui/material/Typography";
function Sponsor() {
  return (
    <div style={{ background: "#f7f7f9",paddingBottom:"5vh" }}>
      <Container>
        <Col>
          <h1 style={{ fontSize: "4em" }}>Our Sponsors</h1>
          <Typography variant="h6" style={{ textAlign:"center",color: "#050c13" }}>Thank you our sponsors for their generous support</Typography>
          <br />
          <br />
          <h1 style={{ color: "#55e8dd" }}>Give My Certificate</h1>
          <div style={{textAlign:"center"}}>
            <img
              style={{  width: "15%" }}
              src="https://github.com/DSC-TCET/Assets/blob/main/image/sponsors/GMC%20LogoS.png?raw=true"
            />
            <h2 style={{color:"#161b22"}}>(Our Certificate Partner)</h2>
            <br/>
            
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default Sponsor;
