// Home Page #2 Collections Component

import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import ecosystem from "../../assets/ecosystem.png";
import ecosystemmob from "../../assets/ecosystemmob.png";
import ecosystemres from "../../assets/ecosystemres.png";
const Ecosystem = () => {
  return (
    <section id="ecosystem">
      <div className="container-xl">
        <div className="title-left">
          <h2>Ecosystem</h2>
          <p>Our CyberElite minions always strive for utility</p>
        </div>
        <Row>
          <Col lg={12} md={12} sm={12}>
          <img src={ecosystemres} height="100%" width="100%" alt="ecosystem" className="cardbg mobile" />
            <div className="eco-cycle  desktop">
              <img src={ecosystem} height="100%" width="100%" alt="ecosystem" className="cardbg" />
              <p className="item-one">
                Stake your Cybiez
              </p>
              <p className="item-two">
                Yield Daily &nbsp;
                <Link to="/what-is-celebrate">$Celebrate</Link>
              </p>
              <p className="item-three">
                Hold ONE VIP token & burn <Link to="/what-is-celebrate">$Celebrate</Link> to upgrade your Cybiez identity to earn more and do more!
              </p>
              <p className="item-four">
                Shop for Metamerch, events, and much more in our marketplace using <Link to="/what-is-celebrate">$Celebrate</Link>
              </p>
              <p className="item-five">
                Set up your own shop by using our platform to create and sell your own custom Metamerch.
              </p>
              <p className="item-six">
              Mint one VIP Token to get a FREE Cybiez airdrop & get exclusive access to the metaverse
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Ecosystem;
