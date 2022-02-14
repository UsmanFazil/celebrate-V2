// Home Page #2 FeaturedIn Component

import React from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
// import { Link } from "react-router-dom";
import featurecard from "../../assets/feature-card.png";
const FeaturedIn = () => {
  const FeaturesList = [
    {
      id: '0',
      date: 'November 11, 2021',
      source: '- New York Wire',
      by: 'Jenny Davidson',
      desc: 'CelebrateNFT Gives Holders a lot of Reasons to Celebrate Through Its VIP Program and Abundant Rewards',
    },
    {
      id: '1',
      date: 'November 11, 2021',
      source: '- Ceoweekly',
      by: 'Shaun Evans',
      desc: 'CelebrateNFT Fostering a Community of Rewards and Gratification with Investors',
    },
    {
      id: '2',
      date: 'November 11, 2021',
      source: '- Market Daily',
      by: ' James Blunt',
      desc: 'CelebrateNFT Bridges the Gap Between the Metaverse and Our World With Real-World Rewards',
    },
    {
      id: '3',
      date: 'November 11, 2021',
      source: '- New York Weekly',
      by: 'Ryann Pierre',
      desc: 'CelebrateNFT: Virtual Ivestements With Real World Benefits',
    },
    {
      id: '4',
      date: 'November 11, 2021',
      source: '- Los Angeles Wire',
      by: 'Johnny Bigg',
      desc: 'CelebrateNFT on Bringing People Together and Building a Community of Enthusiasts',
    },
    {
      id: '5',
      date: 'November 11, 2021',
      source: '- Medium',
      by: 'Nicole Guerrero',
      desc: 'NFT Exclusive Marketplace, CelebrateNFT Anounces Launch Date',
    },
    {
      id: '6',
      date: 'November 11, 2021',
      source: '- US Reporter',
      by: 'Brittany Meyers',
      desc: 'Introducing CelebrateNFT as the Metaverse Expands',
    },
    {
      id: '7',
      date: 'November 11, 2021',
      source: '- The Chicago Journal',
      by: 'Daniel Ruiz',
      desc: 'CelebrateNFT Drives Inclusivity Despite the Expanding Metaverse',
    },
    {
      id: '8',
      date: 'November 11, 2021',
      source: '- US Insider',
      by: 'Zachary Latham',
      desc: 'CelebrateNFT: A Commerical NFT Hub Where the Universe and Metaverse Collude',
    },
  ]
  const LTRsettings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 5000,
    autoplaySpeed: 5000,
    // cssEase: "linear",
    ltr: true,
  };
  return (
    <section id="featuredin">
      <Container fluid="xl">
        <div className="title-left">
          <h2>Featured in</h2>
        </div>
        <div className="desktop">
          <Row>
            {FeaturesList.map(item =>
              <Col xl={4} lg={4} md={6} sm={6} xs={12} key={item.id} className="mb-4">
                <div className="feature-item">
                  <img src={featurecard} height="100%" width="100%" alt="feature card" className="cardbg" />
                  <div className="card-inner">
                    <div>
                      <p>{item.desc}</p>
                      <p className="source">{item.source}</p>
                    </div>
                    <div className="date-by">
                      <p>{item.date}</p>
                      <p>{item.by}</p>
                    </div>
                  </div>
                </div>
              </Col>
            )}
          </Row>
        </div>
        <div className="mobile">
          <Slider {...LTRsettings}>
            {FeaturesList.map(item =>
              // <Row>
              //   <Col lg={12} md={12} sm={12} xs={12}>
              <div className="feature-item" key={item.id}>
                <img src={featurecard} height="100%" width="100%" alt="feature card" className="cardbg" />
                <div className="card-inner">
                  <div>
                    <p>{item.desc}</p>
                    <p className="source">{item.source}</p>
                  </div>
                  <div className="date-by">
                    <p>{item.date}</p>
                    <p>{item.by}</p>
                  </div>
                </div>
              </div>
              //   </Col>
              // </Row>
            )}
          </Slider>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedIn;
