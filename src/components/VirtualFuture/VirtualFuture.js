// Home Page #2 Collections Component

import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import platform from "../../assets/platform.png";
import metamerch from "../../assets/metamerch.png";
import tokens from "../../assets/tokens.png";
import community from "../../assets/community.png";
// import exchange from "../../assets/exchange.png";
import recruit from "../../assets/recruit.png";
import logo from "../../assets/logo.png";

const VirtualFuture = () => {
  const VFList = [
    {
      id: '0',
      img: platform,
      title: 'Platform',
      desc: 'Our team of Cybiez are hard at work creating a  platform to connect with your favorite brands and creators. Buy, sell, trade, and gift your favorite digital assets & virtual experiences with the world! From Virtual Event tickets to unleashing your fandom with metamerch! The team is hard at work to create the platform to give you the ultimate metaverse experience!',
    },
    {
      id: '1',
      img: metamerch,
      title: 'Metamerch',
      desc: 'Unlock your fandom with Metamerch, Digital merch stored on the blockchain for authenitcation and interoperability throughout the metaverse. Show up to the metaverse in style and get access to virtual experiences all in one. ',
    },
    {
      id: '2',
      img: tokens,
      title: 'Yield Daily Tokens',
      line: 'grows as we add more shops and utility to our ecostystem!',
      desc: 'Stake to yield',
      celebrate_link: '$Fandom',
      desc2: 'tokens Daily & earn passive returns that',
    },
    {
      id: '3',
      img: community,
      title: 'Expand as Community',
      desc: 'Expand into the metaverse together as a community!',
    },
    // {
    //   id: '4',
    //   img: exchange,
    //   title: 'On-Chain Exchange',
    //   desc: 'CelebrateNFT will provide an on-chain token exchange on our site to make it easier for you to exchange your tokens. ',
    // },
    {
      id: '4',
      img: recruit,
      title1: 'Recruit Cybiez to build',
      title2: 'your own web 3.0 company',
      desc: 'Recruit help from the Cybieverse to onboard Cybiez to bring your web 3.0 vision to life! Submit your project ideas and vote on the best projects you want the cybiez to work on to expand our ecosystem and add more utility to ',
      celebrate_link: '$Fandom',
    },
  ]
  return (
    <section id="virtual-future">
      <Container fluid="xl">
        <div className="title-left">
          <h2>Virtual Future...</h2>
        </div>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="vf-content">
              <h4>Celebrate the Metaverse</h4>
              <p>CelebrateNFT is created by unique and randomly generated NFT Avatars made up of some of the top web 3.0 Cybiez, which boils down to collectibles with utility. They are intended to create the ultimate metaverse experience with digital assets. The Metaverse opens up the possibility for the community to unleash their fandom.</p>
              <p>5555 unique and highly inteligent Cybiez  come to together with one goal. Thus forming a strong core community.</p>
              <p>With our VIP community and team of Cybiez Minions we will use $Fandom utility token to fuel the party. There are still plenty of Experiences to uncover within CelebrateNFT, all we can say for now is…</p>
              <div className="vf-list">
                {VFList.map(item =>
                  <div className="vf-item" key={item.id}>
                    <div className="icon">
                      <img src={item.img} height="100%" width="100%" alt="" />
                    </div>
                    <div className="detail">
                      <h4>{item.id === '0' ? (
                        <img src={logo} height="100%" width="100%" alt="" />
                      ) : ''}
                        {item.id === '4' ? (
                          <>
                            {item.title1} <br /> {item.title2}
                          </>
                        ) : (
                          <>
                            {item.title}
                          </>)
                        } </h4>
                      <div className="desc">
                        {item.id === '2' ? (
                          <>
                            <p>{item.desc} <Link to="#">{item.celebrate_link}</Link> {item.desc2} {item.line}</p>
                          </>
                        ) :
                          item.id === '4' ? (
                            <>
                              <p>{item.desc} <Link to="#">{item.celebrate_link}</Link></p>
                            </>
                          ) : (
                            <p>{item.desc}</p>
                          )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default VirtualFuture;
