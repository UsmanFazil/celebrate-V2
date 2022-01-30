// Home Page #2 Collections Component

import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { BsArrowUpRightCircle } from 'react-icons/bs';
import minttoken from "../../assets/mint-token.png";
const MintVIP = () => {
  return (
    <section id="mint-vip">
      <div className="container-xl">
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="mint-vip">
              <div className="mv-content">
                <div className="inner">
                  <div>
                    <h4>Mint your Edition #1 VIP NFT</h4>
                    <p>ONE token to provide interoperability throughout the entire metaverse by giving you access to avatars, upgrade Cybiez, Insane metaverse experiences, MetaMerch, massive giveaways, virtual land access, activate discounts, and much more!</p>
                  </div>
                  <div className="bottom">
                    <span>Reserve your free CyberElite now!</span>
                    <Button className="btn-mintvip">
                      Mint VIP
                      <BsArrowUpRightCircle />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="icon">
                <img src={minttoken} height="100%" width="100%" alt="mint token" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default MintVIP;
