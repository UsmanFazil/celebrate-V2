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
      link: 'https://nywire.com/celebratenft-gives-holders-a-lot-of-reasons-to-celebrate-through-its-vip-program-and-abundant-rewards/',
    },
    {
      id: '1',
      date: 'November 11, 2021',
      source: '- Ceoweekly',
      by: 'Shaun Evans',
      desc: 'CelebrateNFT Fostering a Community of Rewards and Gratification with Investors',
      link: 'https://ceoweekly.com/celebration-nft-fostering-a-community-of-rewards-and-gratification-with-investors/',
    },
    {
      id: '2',
      date: 'November 11, 2021',
      source: '- Market Daily',
      by: ' James Blunt',
      desc: 'CelebrateNFT Bridges the Gap Between the Metaverse and Our World With Real-World Rewards',
      link: 'https://marketdaily.com/?p=664',
    },
    {
      id: '3',
      date: 'November 11, 2021',
      source: '- New York Weekly',
      by: 'Ryann Pierre',
      desc: 'CelebrateNFT: Virtual Ivestements With Real World Benefits',
      link: 'https://nyweekly.com/tech/celebratenft-virtual-investments-with-real-world-benefits/',
    },
    {
      id: '4',
      date: 'November 11, 2021',
      source: '- Los Angeles Wire',
      by: 'Johnny Bigg',
      desc: 'CelebrateNFT on Bringing People Together and Building a Community of Enthusiasts',
      link: 'https://lawire.com/celebratenft-on-bringing-people-together-and-building-a-community-of-enthusiasts/',
    },
    {
      id: '5',
      date: 'November 11, 2021',
      source: '- Medium',
      by: 'Nicole Guerrero',
      desc: 'NFT Exclusive Marketplace, CelebrateNFT Anounces Launch Date',
      link: 'https://nicole-guerrero.medium.com/nft-exclusive-marketplace-celebratenft-announces-launch-date-4486b788bca7',
    },
    {
      id: '6',
      date: 'November 11, 2021',
      source: '- US Reporter',
      by: 'Brittany Meyers',
      desc: 'Introducing CelebrateNFT as the Metaverse Expands',
      link: 'https://usreporter.com/introducing-celebrate-nfts-as-the-metaverse-expands/',
    },
    {
      id: '7',
      date: 'November 11, 2021',
      source: '- The Chicago Journal',
      by: 'Daniel Ruiz',
      desc: 'CelebrateNFT Drives Inclusivity Despite the Expanding Metaverse',
      link: 'https://thechicagojournal.com/celebrate-nfts-drives-inclusivity-despite-the-expanding-metaverse/',
    },
    {
      id: '8',
      date: 'November 11, 2021',
      source: '- US Insider',
      by: 'Zachary Latham',
      desc: 'CelebrateNFT: A Commerical NFT Hub Where the Universe and Metaverse Collude',
      link: 'https://usinsider.com/celebratenft-a-commercial-nft-hub-where-the-universe-and-metaverse-collude/',
    },
  ]
  const LTRsettings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
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
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="feature-item">
                  <img src={featurecard} height="100%" width="100%" alt="feature card" className="cardbg" />
                  <div className="card-inner">
                    <div>
                      <p>{item.desc}</p>
                      <p className="source">{item.source}</p>
                    </div>
                    <div className="date-by">
                      {/* <p>{item.date}</p> */}
                      <p>{item.by}</p>
                    </div>
                  </div>
                </a>
              </Col>
            )}
          </Row>
        </div>
        <div className="mobile">
          <Slider {...LTRsettings}>
            {FeaturesList.map(item =>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="feature-item" key={item.id}>
                <img src={featurecard} height="100%" width="100%" alt="feature card" className="cardbg" />
                <div className="card-inner">
                  <div>
                    <p>{item.desc}</p>
                    <p className="source">{item.source}</p>
                  </div>
                  <div className="date-by">
                    {/* <p>{item.date}</p> */}
                    <p>{item.by}</p>
                  </div>
                </div>
              </a>
            )}
          </Slider>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedIn;
