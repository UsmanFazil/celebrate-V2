// Home Page #2 Collections Component

import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import EditionVip from "../../assets/edition-vip.jpg";
import Cyberelite from "../../assets/cyberelite.png";
import logo from "../../assets/logo.png";
import cardbg from "../../assets/cardbg.png";
import star from "../../assets/star.png";
const Collections = () => {
  const CollectionsList = [
    {
      id: '0',
      img: EditionVip,
      title: 'Edition #1 VIP',
      quantity: '20000',
      subtitle: 'Edition #1 VIP',
      desc: 'CelebrateNFT edition #1 VIP membership is ONE token to provide interoperability throughout the entire metaverse by giving you access to avatars, exclusive wearables, Insane metaverse experiences, MetaMerch, massive giveaways, virtual land access, activate discounts, and much more!',
    },
    {
      id: '1',
      img: Cyberelite,
      title: 'CyberElite',
      quantity: '20000',
      subtitle: 'CyberElite Minions',
      desc: 'These little CyberElite minions are the builders, creators, and brains behind all of the opperations at CelebrateNFT. They are on a mission to create amazing virtual experiences and digital assets using the top tech in web 3.0 to build the future of celebration in the metaverse.',
    }
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
    <section className="collections">
      <Container fluid="xl">
        <div className="title-center">
          <h2>Collections</h2>
        </div>
        {CollectionsList.map(item =>
          <Row key={item.id} className="desktop">
            <Col xl={3} lg={4} md={5} sm={12} xs={12}>
              <div className="card-box">
                <img src={cardbg} height="100%" width="100%" alt="card bg" className="cardbg" />
                <div className="card-inner">
                  <div className="top">
                    <p>{item.title}</p>
                    <span>.02 ETH</span>
                  </div>
                  <div className="card-img">
                    <img src={item.img} height="100%" width="100%" alt="Edition Vip" />
                  </div>
                  <div className="bottom">
                    <div className="creator">
                      <p>Creator</p>
                      <img src={logo} height="100%" width="100%" alt="celebrate nft" />
                    </div>
                    <div className="quantity">
                      <p>Quantity</p>
                      <p>{item.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={9} lg={8} md={7} sm={12} xs={12}>
              <div className="collection-details">
                <Link to="#" className="title">{item.subtitle}</Link>
                <p>{item.desc}</p>
                {item.id === '0' ? (
                  <>
                    <ul>
                      <li>- Mint a <Link to="#">FREE CyberElite</Link></li>
                      <li>- ETH giveaways</li>
                      <li>- Community DAO</li>
                      <li>- Pre mint future drops</li>
                      <li>- VIP Lounge access</li>
                      <li>- Airdrops</li>
                    </ul>
                    <div className="outcomes">
                      <p>Total Supply: <span>2,000</span></p>
                      <p>Price: <span>0.02 ETH</span></p>
                    </div>
                  </>
                ) : (
                  <>
                    <ul>
                      <li>- 1/1 unique identity</li>
                      <li>- upgrade your CyberElite to earn more and do more </li>
                      <li>- Yield <Link to="#">$CELEBRATE</Link> daily</li>
                      <li>- Community DAO</li>
                    </ul>
                    <div className="outcomes">
                      <p>Total Supply: <span>3,333</span></p>
                      <p>Private Sale: <span>2,000 VIP holders mint for free</span></p>
                      <p>Public Sale: <span>1,333 mints for 0.065 ETH</span></p>
                    </div>
                  </>
                )}
              </div>
            </Col>
          </Row>
        )}
        <Slider {...LTRsettings}>
          {CollectionsList.map(item =>
            <Row key={item.id} className="mobile">
              <Col xl={3} lg={4} md={5} sm={12} xs={12}>
                <div className="card-box">
                  <img src={cardbg} height="100%" width="100%" alt="card bg" className="cardbg" />
                  <div className="card-inner">
                    <div className="top">
                      <p>{item.title}</p>
                      <span>.02 ETH</span>
                    </div>
                    <div className="card-img">
                      <img src={item.img} height="100%" width="100%" alt="Edition Vip" />
                    </div>
                    <div className="bottom">
                      <div className="creator">
                        <p>Creator</p>
                        <img src={logo} height="100%" width="100%" alt="celebrate nft" />
                      </div>
                      <div className="quantity">
                        <p>Quantity</p>
                        <p>{item.quantity}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={9} lg={8} md={7} sm={12} xs={12}>
                <div className="collection-details">
                  <Link to="#" className="title">{item.subtitle}</Link>
                  <p>{item.desc}</p>
                  {item.id === '0' ? (
                    <>
                      <ul>
                        <li>- Mint a <Link to="#">FREE CyberElite</Link></li>
                        <li>- ETH giveaways</li>
                        <li>- Community DAO</li>
                        <li>- Pre mint future drops</li>
                        <li>- VIP Lounge access</li>
                        <li>- Airdrops</li>
                      </ul>
                      <div className="outcomes">
                        <p>Total Supply: <span>2,000</span></p>
                        <p>Price: <span>0.02 ETH</span></p>
                      </div>
                    </>
                  ) : (
                    <>
                      <ul>
                        <li>- 1/1 unique identity</li>
                        <li>- upgrade your CyberElite to earn more and do more </li>
                        <li>- Yield <Link to="#">$CELEBRATE</Link> daily</li>
                        <li>- Community DAO</li>
                      </ul>
                      <div className="outcomes">
                        <p>Total Supply: <span>3,333</span></p>
                        <p>Private Sale: <span>2,000 VIP holders mint for free</span></p>
                        <p>Public Sale: <span>1,333 mints for 0.065 ETH</span></p>
                      </div>
                    </>
                  )}
                </div>
              </Col>
            </Row>
          )}
        </Slider>
        <Row>
          <Col lg={12}>
            <div className="become-vip">
              <p><img src={star} height="24" width="30" alt="star" />Become a VIP token holder and claim your free CyberElite!</p>
              <Button className="btn-mintvip">
                Mint VIP
                <BsArrowUpRightCircle />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Collections;
