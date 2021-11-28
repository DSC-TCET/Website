import React from "react";
import hitansh from "../Images/hitansh.jpg"
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LanguageIcon from '@mui/icons-material/Language';
import AndroidIcon from '@mui/icons-material/Android';
import CloudIcon from '@mui/icons-material/Cloud';


import "./team.css"



function Team() {
    const [value, setValue] = React.useState(0);
  return (
    <div style={{background:"#fafafa"}}>
        <Container style={{ height: "95vh",paddingTop:"3vh" }}>
        <Row>
            <h1 id="teamtitle">Meet the Team</h1>
            <br/>
            
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Lead" icon={<i class="fas fa-user-alt"></i>} />
        <BottomNavigationAction label="Web" icon={<LanguageIcon/>} />
        <BottomNavigationAction label="Cloud" icon={<CloudIcon />} />
        <BottomNavigationAction label="AI/ML" icon={<i class="fas fa-robot"></i>} />
        <BottomNavigationAction label="Android" icon={<AndroidIcon />} />
        <BottomNavigationAction label="Graphics" icon={<i class="fas fa-palette"></i>} />
        <BottomNavigationAction label="Marketing" icon={<i class="fas fa-bezier-curve"></i>} />
        <BottomNavigationAction label="Management" icon={<i class="fas fa-tasks"></i>} />
        <BottomNavigationAction label="OutReach" icon={<i class="fas fa-users-cog"></i>} />
        <BottomNavigationAction label="Advisory" icon={<i class="fas fa-glasses"></i>} />
      </BottomNavigation>
      </Row>
      <br/>

      <div class="d-flex justify-content-center">
      <MDBCard background='light' alignment="center" style={{ maxWidth: "17rem" ,boxShadow: "3px 3px 20px rgb(0 0 0 / 0.5)"}}>
        <MDBCardHeader><MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage style={{borderRadius:"50%"}}src={hitansh} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple></MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Hitansh Doshi</MDBCardTitle>
          <MDBCardText>
            GDSC TCET Lead
          </MDBCardText>
          
        </MDBCardBody>
        <MDBCardFooter className="text-muted"><i className="fab fa-github fa-2x"></i>&nbsp;&nbsp;&nbsp;<i className="fab fa-linkedin fa-2x"></i></MDBCardFooter>
      </MDBCard>
    </div>
    <br/>
      
      
      
      </Container>
    </div>

  );
}

export default Team;
