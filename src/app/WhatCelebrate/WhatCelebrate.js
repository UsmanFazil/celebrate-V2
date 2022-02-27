import React from "react";
import { Row, Col, Container } from "reactstrap";
import Footer from "../../components/Common/Footer";
import MenuBar from "../../components/Common/MenuBar";
import { Link } from "react-router-dom";
import item1 from "../../assets/item1.png";
import item2 from "../../assets/item2.png";
import item3 from "../../assets/item3.png";
import item4 from "../../assets/item4.png";
import item5 from "../../assets/item5.png";
import fandomparty from "../../assets/fandom-party.png";
import line from "../../assets/line.png";
import scbg from "../../assets/scbg.png";
import cbg from "../../assets/cbg.png";
import logo from "../../assets/logo.png";
const WhatCelebrate = () => {
  const CatList = [
    {
      id: '0',
      img: item1,
      title: '- Yield',
      desc1: 'Every Cybie yields',
      desc2: ' tokens everyday for putting their unique talents to work',
      celebratelink: '$Fandom',
    },
    {
      id: '1',
      img: item2,
      title: '- Customize',
      desc1: 'Use',
      desc2: 'to add a custom name or backstory to the blockchain for your Cybiez.',
      celebratelink: '$Fandom',
    },
    {
      id: '2',
      img: item3,
      title: '- Upgrade',
      desc1: 'Hold ONE VIP token and burn',
      desc2: 'to upgrade your Cybiez to earn more and do more.',
      celebratelink: '$Fandom',
    },
    {
      id: '3',
      img: item4,
      title: '- Vote',
      desc2: 'is also a Governance token to our community DAO',
      celebratelink: '$Fandom',
    },
    {
      id: '4',
      img: item5,
      title: '- Shop',
      desc2: 'will be used throughout our entire marketplace to shop metamerch',
      celebratelink: '$Fandom',
    },
  ]
  return (
    <React.Fragment>
      <MenuBar />
      <section id="what-celebrate">
        <Container fluid="xl">
          <Row>
            <Col lg={12}>
              <div className="heading">
                <h1>What is <span>$Fandom</span></h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={9} md={8} sm={12} xs={12}>
              <div className="desc">
                <h4>TOKENOMICS TO FUEL THE PARTY</h4>
                <p><Link to="/">$Fandom</Link> will be used throughout our entire CelebrateNFT ecosystem and as we expand into the metaverse more utility will be added. The Cybiez are on a mission to create the future of celebration in the metaverse and <Link to="/">$Fandom</Link> allows us to fuel our ecosystem the best way, on the blockchain. </p>
              </div>
              <div className="cat-list">
                {CatList.map(item =>
                  <div className="item" key={item.id}>
                    <div className="icon">
                      <img src={item.img} height="100%" width="100" alt={item.title} className="dn-res" />
                      <img src={line} height="100%" width="5" alt="line" className="vl" />
                    </div>
                    <div className="detail">
                      <h4>{item.title}</h4>
                      <p>{item.desc1} <Link to="#">{item.celebratelink}</Link> {item.desc2}</p>
                    </div>
                  </div>
                )}
              </div>
            </Col>
            <Col lg={3} md={4} sm={12} xs={12}>
              <div className="sidebar">
                <img src={fandomparty} height="100%" width="100%" alt="fandom party" className="m-icon" />
                <div className="smart-contract">
                  <img src={scbg} height="100%" width="100%" alt="bg" className="bg" />
                  <div className="inner">
                    <p>Smart Contract</p>
                    <span>Coming soon</span>
                  </div>
                </div>
                <div className="cb-intro">
                  <img src={cbg} height="100%" width="100%" alt="bg" className="bg" />
                  <div className="inner">
                    <p><Link to="/">$Fandom</Link> is the utility token that fuels the CelebrateNFT ecosystem. It is NOT an investment and has NO economic value.</p>
                    <p>Each Cybie is able to Yield <Link to="/">$Fandom</Link> tokens /24 hrs for a period of ten years.</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="marketplace">
                <div className="cft-market">
                  <img src={logo} height="100%" width="100%" alt="celebrate" />
                  <h1>MetaMerch Shops</h1>
                </div>
                <h4>[Coming soon]</h4>
                <p>Our Cybiez strive to provide a platform to buy, sell, trade digital assets that provide the ultimate experience in the metaverse. </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default WhatCelebrate;
