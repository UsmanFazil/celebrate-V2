import React from "react";
// import Slider from "react-slick";
import { Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";
// import { Link, animateScroll as scroll,} from 'react-scroll'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from "react-accessible-accordion";

import frontend from "../../assets/postionicons/frontend.png";
// import AcademyFooter from "../Common/AcademyFooter";
import AcademyNavbar from "../Common/AcademyNavbar";
import { FormattedMessage } from "react-intl";

class CourseDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseDetail: [
        {
          module: "Module 1",
          moduleDesc: [
            {
              list: "Exponential professional growth"
            },

            {
              list: "Exponential professional growth"
            },

            {
              list: "Exponential professional growth"
            },

            {
              list: "Exponential professional growth"
            }
          ]
        },
        {
          module: "Module 1",
          moduleDesc: [
            {
              list: "Exponential professional growth"
            },

            {
              list: "Exponential professional growth"
            },

            {
              list: "Exponential professional growth"
            },

            {
              list: "Exponential professional growth"
            }
          ]
        },
        {
          module: "Module 1",
          moduleDesc: [
            {
              list: "Exponential professional growth"
            },

            {
              list: "Exponential professional growth"
            },

            {
              list: "Exponential professional growth"
            },

            {
              list: "Exponential professional growth"
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <div>
         <AcademyNavbar />
        {/* Career Heading Top Section */}
        <section>
          <div className="coursedetailtop"></div>
          {/* Careers section */}
          <div id="coursedetail">
            <div className="container">
              <Row>
                <Col lg={1}></Col>
                <Col lg={10}>
                  <div className="course-content">
                    <Row>
                      <Col lg={12}>
                        <h2>Blockchain Course Outline</h2>
                      </Col>
                    </Row>
                    <Row>
                      {this.state.courseDetail.map((items, index) => (
                        <Col lg={12} key={index}>
                          <div className="course-modules">
                            <h4>{items.module}</h4>
                            <ul>
                              {items.moduleDesc.map((desc, index) => (
                                <li key={index}>{desc.list}</li>
                              ))}
                            </ul>
                          </div>
                        </Col>
                      ))}
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <div className="course-outcomesbg detail">
                          <h4>Course Outcomes</h4>
                          <ul>
                              <li>Exponential professional growth </li>
                              <li>Exponential professional growth </li>
                              <li>Exponential professional growth </li>
                              <li>Exponential professional growth </li>
                              <li>Exponential professional growth </li>
                              <li>Exponential professional growth </li>
                          </ul>
                     
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="course-feesbg detail">
                          <h4>Fee Structure for the course</h4>
                          <ul>
                              <li>Exponential professional growth </li>
                              <li>Exponential professional growth </li>
                              <li>Exponential professional growth </li>
                              <li>Exponential professional growth </li>
                              <li>Exponential professional growth </li>
                              <li>Exponential professional growth </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                    {/* <Accordion>
                    {this.state.positionsdetails.map((items, index) => (
                      <AccordionItem key={index}>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <div className="posticon">
                              <img src={items.posticon} alt="Position Icon" />
                            </div>
                            <div>
                              <h4>{items.title}</h4>
                              <p>{items.shortintro}</p>
                            </div>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel >
                          <div className="postdesc">
                            <h4>Job Description</h4>
                            <p>{items.role}</p>
                            <h4>Qualifications &amp; Requirements</h4>
                            <ul>
                              {items.requirements.map((req, index) => (
                                <li key={index}>{req.description}</li>
                              ))}
                            </ul>
                    
                            <h4>Benefits</h4>
                            <ul className="benefits">
                              {items.benefits.map((ben, index) => (
                                <li key={index}>{ben.list}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="applynow">
           
                            <a href="/applicationform">Apply Now</a>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                    ))}
                  </Accordion> */}
                  </div>
                </Col>
                <Col lg={1}></Col>
              </Row>
            </div>
          </div>
        </section>
        {/* <AcademyFooter /> */}
      </div>
    );
  }
}

export default CourseDetails;
