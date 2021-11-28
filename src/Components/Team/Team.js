import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  Lead,
  marketing,
  ai_ml,
  graphics,
  android,
  cloud,
  outreach,
  management,
} from "./data";
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

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LanguageIcon from "@mui/icons-material/Language";
import AndroidIcon from "@mui/icons-material/Android";
import CloudIcon from "@mui/icons-material/Cloud";
import PersonIcon from "@mui/icons-material/Person";
import PaletteIcon from "@mui/icons-material/Palette";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CodeIcon from "@mui/icons-material/Code";
import { makeStyles } from "@material-ui/core/styles";
import "./team.css";

const useTabStyles = makeStyles({
  root: {
    justifyContent: "center",
  },
  scroller: {
    flexGrow: "0",
  },
});

const TabsContainer = () => {
  const classes = useTabStyles();
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Team() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ background: "#fafafa" }}>
      <Container style={{ paddingTop: "3vh" }}>
        <Row style={{ paddingBottom: "5vh" }}>
          <h1 id="teamtitle">Meet the Team</h1>
          <br />
          <Box sx={{ width: "100%" }}>
            <Box
              style={{ textAlign: "center" }}
              sx={{ borderBottom: 1, borderColor: "divider" }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
              >
                <Tab icon={<PersonIcon />} label="Lead" {...a11yProps(0)} />
                <Tab icon={<AndroidIcon />} label="Android" {...a11yProps(1)} />
                <Tab icon={<CloudIcon />} label="Cloud" {...a11yProps(2)} />
                <Tab
                  icon={<PaletteIcon />}
                  label="Graphics"
                  {...a11yProps(3)}
                />
                <Tab icon={<CodeIcon />} label="AI/ML" {...a11yProps(4)} />
                <Tab
                  icon={<AssignmentIcon />}
                  label="Marketing"
                  {...a11yProps(5)}
                />
                <Tab
                  icon={<ManageAccountsIcon />}
                  label="Management"
                  {...a11yProps(6)}
                />
                <Tab
                  icon={<LanguageIcon />}
                  label="Outreach"
                  {...a11yProps(7)}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {Lead.map((item, index) => {
                return (
                  <Col style={{ paddingBottom: "3vh" }} md={12} sm={12} lg={12}>
                    <div class="d-flex justify-content-center">
                      <MDBCard
                        key={index}
                        background="light"
                        alignment="center"
                        style={{
                          maxWidth: "17rem",
                          boxShadow: "3px 3px 20px rgb(0 0 0 / 0.5)",
                        }}
                      >
                        <MDBCardHeader>
                          <MDBRipple
                            rippleColor="light"
                            rippleTag="div"
                            className="bg-image hover-overlay"
                          >
                            <MDBCardImage
                              style={{ borderRadius: "50%" }}
                              src={item.imageurl}
                              fluid
                              alt="..."
                            />
                            <a>
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.15)",
                                }}
                              ></div>
                            </a>
                          </MDBRipple>
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardTitle>{item.name}</MDBCardTitle>
                          <MDBCardText>{item.post}</MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-muted">
                          <a
                            rel="noreferrer"
                            href={item.githuburl}
                            target="_blank"
                            className="fab fa-github fa-2x"
                          >
                            <i></i>
                          </a>
                          &nbsp;&nbsp;&nbsp;
                          <a
                            rel="noreferrer"
                            href={item.linkedinurl}
                            target="_blank"
                          >
                            <i className="fab fa-linkedin fa-2x"></i>
                          </a>
                        </MDBCardFooter>
                      </MDBCard>
                    </div>
                  </Col>
                );
              })}
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Row>
                {android.map((item, index) => {
                  return (
                    <Col style={{ paddingBottom: "3vh" }} md={4} sm={12} lg={4}>
                      <div class="d-flex justify-content-center">
                        <MDBCard
                          key={index}
                          background="light"
                          alignment="center"
                          style={{
                            maxWidth: "17rem",
                            boxShadow: "3px 3px 20px rgb(0 0 0 / 0.5)",
                          }}
                        >
                          <MDBCardHeader>
                            <MDBRipple
                              rippleColor="light"
                              rippleTag="div"
                              className="bg-image hover-overlay"
                            >
                              <MDBCardImage
                                style={{ borderRadius: "50%" }}
                                src={item.imageurl}
                                fluid
                                alt="..."
                              />
                              <a>
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor:
                                      "rgba(251, 251, 251, 0.15)",
                                  }}
                                ></div>
                              </a>
                            </MDBRipple>
                          </MDBCardHeader>
                          <MDBCardBody>
                            <MDBCardTitle>{item.name}</MDBCardTitle>
                            <MDBCardText>{item.post}</MDBCardText>
                          </MDBCardBody>
                          <MDBCardFooter className="text-muted">
                            <a
                              rel="noreferrer"
                              href={item.githuburl}
                              target="_blank"
                              className="fab fa-github fa-2x"
                            >
                              <i></i>
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a
                              rel="noreferrer"
                              href={item.linkedinurl}
                              target="_blank"
                            >
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </MDBCardFooter>
                        </MDBCard>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Row>
                {cloud.map((item, index) => {
                  return (
                    <Col style={{ paddingBottom: "3vh" }}  md={12} sm={12} lg={12}>
                      <div class="d-flex justify-content-center">
                        <MDBCard
                          key={index}
                          background="light"
                          alignment="center"
                          style={{
                            maxWidth: "17rem",
                            boxShadow: "3px 3px 20px rgb(0 0 0 / 0.5)",
                          }}
                        >
                          <MDBCardHeader>
                            <MDBRipple
                              rippleColor="light"
                              rippleTag="div"
                              className="bg-image hover-overlay"
                            >
                              <MDBCardImage
                                style={{ borderRadius: "50%" }}
                                src={item.imageurl}
                                fluid
                                alt="..."
                              />
                              <a>
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor:
                                      "rgba(251, 251, 251, 0.15)",
                                  }}
                                ></div>
                              </a>
                            </MDBRipple>
                          </MDBCardHeader>
                          <MDBCardBody>
                            <MDBCardTitle>{item.name}</MDBCardTitle>
                            <MDBCardText>{item.post}</MDBCardText>
                          </MDBCardBody>
                          <MDBCardFooter className="text-muted">
                            <a
                              rel="noreferrer"
                              href={item.githuburl}
                              target="_blank"
                              className="fab fa-github fa-2x"
                            >
                              <i></i>
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a
                              rel="noreferrer"
                              href={item.linkedinurl}
                              target="_blank"
                            >
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </MDBCardFooter>
                        </MDBCard>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Row>
                {graphics.map((item, index) => {
                  return (
                    <Col style={{ paddingBottom: "3vh" }}  md={6} sm={12} lg={3}>
                      <div class="d-flex justify-content-center">
                        <MDBCard
                          key={index}
                          background="light"
                          alignment="center"
                          style={{
                            maxWidth: "17rem",
                            boxShadow: "3px 3px 20px rgb(0 0 0 / 0.5)",
                          }}
                        >
                          <MDBCardHeader>
                            <MDBRipple
                              rippleColor="light"
                              rippleTag="div"
                              className="bg-image hover-overlay"
                            >
                              <MDBCardImage
                                style={{ borderRadius: "50%" }}
                                src={item.imageurl}
                                fluid
                                alt="..."
                              />
                              <a>
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor:
                                      "rgba(251, 251, 251, 0.15)",
                                  }}
                                ></div>
                              </a>
                            </MDBRipple>
                          </MDBCardHeader>
                          <MDBCardBody>
                            <MDBCardTitle>{item.name}</MDBCardTitle>
                            <MDBCardText>{item.post}</MDBCardText>
                          </MDBCardBody>
                          <MDBCardFooter className="text-muted">
                            <a
                              rel="noreferrer"
                              href={item.githuburl}
                              target="_blank"
                              className="fab fa-github fa-2x"
                            >
                              <i></i>
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a
                              rel="noreferrer"
                              href={item.linkedinurl}
                              target="_blank"
                            >
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </MDBCardFooter>
                        </MDBCard>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Row>
                {ai_ml.map((item, index) => {
                  return (
                    <Col style={{ paddingBottom: "3vh" }}  md={12} sm={12} lg={12}>
                      <div class="d-flex justify-content-center">
                        <MDBCard
                          key={index}
                          background="light"
                          alignment="center"
                          style={{
                            maxWidth: "17rem",
                            boxShadow: "3px 3px 20px rgb(0 0 0 / 0.5)",
                          }}
                        >
                          <MDBCardHeader>
                            <MDBRipple
                              rippleColor="light"
                              rippleTag="div"
                              className="bg-image hover-overlay"
                            >
                              <MDBCardImage
                                style={{ borderRadius: "50%" }}
                                src={item.imageurl}
                                fluid
                                alt="..."
                              />
                              <a>
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor:
                                      "rgba(251, 251, 251, 0.15)",
                                  }}
                                ></div>
                              </a>
                            </MDBRipple>
                          </MDBCardHeader>
                          <MDBCardBody>
                            <MDBCardTitle>{item.name}</MDBCardTitle>
                            <MDBCardText>{item.post}</MDBCardText>
                          </MDBCardBody>
                          <MDBCardFooter className="text-muted">
                            <a
                              rel="noreferrer"
                              href={item.githuburl}
                              target="_blank"
                              className="fab fa-github fa-2x"
                            >
                              <i></i>
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a
                              rel="noreferrer"
                              href={item.linkedinurl}
                              target="_blank"
                            >
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </MDBCardFooter>
                        </MDBCard>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Row>
                {marketing.map((item, index) => {
                  return (
                    <Col style={{ paddingBottom: "3vh" }}  md={6} sm={12} lg={3}>
                      <div class="d-flex justify-content-center">
                        <MDBCard
                          key={index}
                          background="light"
                          alignment="center"
                          style={{
                            maxWidth: "17rem",
                            boxShadow: "3px 3px 20px rgb(0 0 0 / 0.5)",
                          }}
                        >
                          <MDBCardHeader>
                            <MDBRipple
                              rippleColor="light"
                              rippleTag="div"
                              className="bg-image hover-overlay"
                            >
                              <MDBCardImage
                                style={{ borderRadius: "50%" }}
                                src={item.imageurl}
                                fluid
                                alt="..."
                              />
                              <a>
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor:
                                      "rgba(251, 251, 251, 0.15)",
                                  }}
                                ></div>
                              </a>
                            </MDBRipple>
                          </MDBCardHeader>
                          <MDBCardBody>
                            <MDBCardTitle>{item.name}</MDBCardTitle>
                            <MDBCardText>{item.post}</MDBCardText>
                          </MDBCardBody>
                          <MDBCardFooter className="text-muted">
                            <a
                              rel="noreferrer"
                              href={item.githuburl}
                              target="_blank"
                              className="fab fa-github fa-2x"
                            >
                              <i></i>
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a
                              rel="noreferrer"
                              href={item.linkedinurl}
                              target="_blank"
                            >
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </MDBCardFooter>
                        </MDBCard>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </TabPanel>
            <TabPanel value={value} index={6}>
              <Row>
                {management.map((item, index) => {
                  return (
                    <Col style={{ paddingBottom: "3vh" }}  md={12} sm={12} lg={12}>
                      <div class="d-flex justify-content-center">
                        <MDBCard
                          key={index}
                          background="light"
                          alignment="center"
                          style={{
                            maxWidth: "17rem",
                            boxShadow: "3px 3px 20px rgb(0 0 0 / 0.5)",
                          }}
                        >
                          <MDBCardHeader>
                            <MDBRipple
                              rippleColor="light"
                              rippleTag="div"
                              className="bg-image hover-overlay"
                            >
                              <MDBCardImage
                                style={{ borderRadius: "50%" }}
                                src={item.imageurl}
                                fluid
                                alt="..."
                              />
                              <a>
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor:
                                      "rgba(251, 251, 251, 0.15)",
                                  }}
                                ></div>
                              </a>
                            </MDBRipple>
                          </MDBCardHeader>
                          <MDBCardBody>
                            <MDBCardTitle>{item.name}</MDBCardTitle>
                            <MDBCardText>{item.post}</MDBCardText>
                          </MDBCardBody>
                          <MDBCardFooter className="text-muted">
                            <a
                              rel="noreferrer"
                              href={item.githuburl}
                              target="_blank"
                              className="fab fa-github fa-2x"
                            >
                              <i></i>
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a
                              rel="noreferrer"
                              href={item.linkedinurl}
                              target="_blank"
                            >
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </MDBCardFooter>
                        </MDBCard>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </TabPanel>
            <TabPanel value={value} index={7}>
              <Row>
                {outreach.map((item, index) => {
                  return (
                    <Col style={{ paddingBottom: "3vh" }}  md={12} sm={12} lg={12}>
                      <div class="d-flex justify-content-center">
                        <MDBCard
                          key={index}
                          background="light"
                          alignment="center"
                          style={{
                            maxWidth: "17rem",
                            boxShadow: "3px 3px 20px rgb(0 0 0 / 0.5)",
                          }}
                        >
                          <MDBCardHeader>
                            <MDBRipple
                              rippleColor="light"
                              rippleTag="div"
                              className="bg-image hover-overlay"
                            >
                              <MDBCardImage
                                style={{ borderRadius: "50%" }}
                                src={item.imageurl}
                                fluid
                                alt="..."
                              />
                              <a>
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor:
                                      "rgba(251, 251, 251, 0.15)",
                                  }}
                                ></div>
                              </a>
                            </MDBRipple>
                          </MDBCardHeader>
                          <MDBCardBody>
                            <MDBCardTitle>{item.name}</MDBCardTitle>
                            <MDBCardText>{item.post}</MDBCardText>
                          </MDBCardBody>
                          <MDBCardFooter className="text-muted">
                            <a
                              rel="noreferrer"
                              href={item.githuburl}
                              target="_blank"
                              className="fab fa-github fa-2x"
                            >
                              <i></i>
                            </a>
                            &nbsp;&nbsp;&nbsp;
                            <a
                              rel="noreferrer"
                              href={item.linkedinurl}
                              target="_blank"
                            >
                              <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                          </MDBCardFooter>
                        </MDBCard>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </TabPanel>
          </Box>
        </Row>
        <br />

        <br />
      </Container>
    </div>
  );
}

export default Team;
