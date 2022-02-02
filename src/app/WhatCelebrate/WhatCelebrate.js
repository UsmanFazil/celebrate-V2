import React from "react";
import { Row, Col, Container } from "reactstrap";
import Footer from "../../components/Common/Footer";
import MenuBar from "../../components/Common/MenuBar";
import { Link } from "react-router-dom";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import line from "../../assets/line.png";
import scbg from "../../assets/scbg.png";
import cbg from "../../assets/cbg.png";
import logo from "../../assets/logo.png";
const WhatCelebrate = () => {
  const CatList = [
    {
      id: '0',
      img: icon1,
      title: '- Yield',
      desc1: 'Every CyberElite yields 15',
      desc2: 'tokens everyday for their hard work in creating the metaverse.',
      celebratelink: '$CELEBRATE',
    },
    {
      id: '1',
      img: icon2,
      title: '- Customize',
      desc1: 'Use',
      desc2: 'to add a custom name or backstory to the blockchain for your CyberElite.',
      celebratelink: '$CELEBRATE',
    },
    {
      id: '2',
      img: icon1,
      title: '- Upgrade',
      desc1: 'Hold ONE VIP token and burn',
      desc2: 'to upgrade your CyberElite to earn more and do more.',
      celebratelink: '$CELEBRATE',
    },
    {
      id: '3',
      img: icon2,
      title: '- Vote',
      desc2: 'is also a Governance token to our community DAO',
      celebratelink: '$CELEBRATE',
    },
    {
      id: '4',
      img: icon2,
      title: '- Shop',
      desc2: 'will be used throughout our entire marketplace to shop metamerch',
      celebratelink: '$CELEBRATE',
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
                <h1>What is <span>$CELEBRATE</span></h1>
              </div>
              <div className="desc">
                <h4>TOKENOMICS TO FUEL THE PARTY</h4>
                <p><Link to="/what-is-celebrate">$CELEBRATE</Link> will be used throughout our entire CelebrateNFT ecosystem and as we expand into the metaverse more utility will be added. The CyberElites are on a mission to create the future of celebration in the metaverse and <Link to="/what-is-celebrate">$CELEBRATE</Link> allows us to fuel our ecosystem the best way, on the blockchain. </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={9} md={8} sm={12} xs={12}>
              <div className="cat-list">
                {CatList.map(item =>
                  <div className="item">
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
                <div className="smart-contract">
                  <img src={icon1} height="100%" width="100%" alt="icon" className="m-icon" />
                  <img src={scbg} height="100%" width="100%" alt="bg" className="bg" />
                  <div className="inner">
                    <p>Smart Contract</p>
                    <span>Coming soon</span>
                  </div>
                </div>
                <div className="cb-intro">
                  <img src={cbg} height="100%" width="100%" alt="bg" className="bg" />
                  <div className="inner">
                    <p><Link to="/what-is-celebrate">$CELEBRATE</Link> is the utility token that fuels the CelebrateNFT ecosystem. It is NOT an investment and has NO economic value.</p>
                    <p>Each CyberElite is able to claim 15 <Link to="/what-is-celebrate">$CELEBRATE</Link> tokens per day for a period of ten years. CyberElites will produce total of 18,248,175 <Link to="/what-is-celebrate">$CELEBRATE</Link> tokens per year, over a period of ten years.</p>
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
                  <h1>Marketplace</h1>
                </div>
                <h4>[Coming soon]</h4>
                <p>Our CyberElites strive to provide a platform to buy, sell, trade digital assets that provide the ultimate experience in the metaverse. </p>
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
