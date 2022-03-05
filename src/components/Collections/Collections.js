// Home Page #2 Collections Component

import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import EditionVip from "../../assets/vipnft.png";
import cybiez from "../../assets/cybiez.png";
import logo from "../../assets/logo.png";
import cardbg from "../../assets/cardbg.png";
import star from "../../assets/star.png";
import detectProvider from '../detectProvider'

const Collections = () => {
  const CollectionsList = [
    {
      id: '0',
      img: EditionVip,
      price: '.025',
      title: 'VIP Mint Pass',
      quantity: '2,000',
      subtitle: 'VIP Mint Pass',
      desc: 'CelebrateNFT VIP Mint Pass membership is apart of our collection of 10,000 VIP tokens broken down into 5 editions. Each token provides interoperability throughout the entire metaverse by giving you access to avatars, Upgrade your Cybiez, Insane metaverse experiences, MetaMerch, massive giveaways, virtual land access, activate discounts, and much more!',
    },
    {
      id: '1',
      img: cybiez,
      price: '.08',
      title: 'Cybiez',
      quantity: '5,555',
      subtitle: 'Cybiez',
      desc: 'These little Cybiez are the builders, creators, and brains behind all of the opperations at CelebrateNFT. They are on a mission to change the way we access virtual experiences and digital merch using the top tech in web 3.0 to build the future of celebration in the metaverse.',
    }
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
                    <span>{item.price} ETH</span>
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
                      <li>- <Link to="#">FREE Cybiez Airdrop</Link></li>
                      <li>- Access to upgrade your Cybiez</li>
                      <li>- <Link to="#">FREE Cybiez decentraland wearable</Link></li>
                      <li>- Pre mint Cybiez public sale</li>
                      <li>- ETH giveaways</li>
                      <li>- VIP Lounge access</li>
                      <li>- Community DAO</li>
                      <li>- VIP access to CelebrateNFT ecosystem</li>
                    </ul>
                    <div className="outcomes">
                      <p>Total Supply: <span>2,000</span></p>
                      <p>Price: <span>0.025 ETH</span></p>
                    </div>
                  </>
                ) : (
                  <>
                    <ul>
                      <li>- 1/1 unique identity</li>
                     
                      <li>- Yield daily <Link to="/">$Fandom</Link> </li>
                      <li>- Full commercial rights</li>
                      <li>- Community DAO</li>
                      <li>- Use VIP token & <Link to="/">$Fandom</Link> to upgrade your Cybiez to earn more and do more </li>
                    </ul>
                    <div className="outcomes">
                      <p>Total Supply: <span>5,555</span></p>
                      <p>Private Sale: <span>2,000 reserved for VIP token holders airdrops</span></p>
                      <p>Public Sale: <span>3,555 mint for 0.08 ETH</span></p>
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
                      <span>{item.price} ETH</span>
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
                  {/* <Link to="#" className="title">{item.subtitle}</Link> */}
                  <p>{item.desc}</p>
                  {item.id === '0' ? (
                    <>
                      <ul>
                        <li>- <Link to="#">FREE Cybiez Airdrop</Link></li>
                        <li>- ETH giveaways</li>
                        <li>- VIP Lounge access</li>
                        <li>- Community DAO</li>
                        <li>- Pre mint Cybiez public sale</li>
                        <li>- Access to upgrade your Cybiez</li>
                        <li>- <Link to="#">FREE Cybiez decentraland wearable</Link></li>
                        
                        <li>- VIP access to CelebrateNFT ecosystem</li>
                      </ul>
                      <div className="outcomes">
                        <p>Total Supply: <span>2,000</span></p>
                        <p>Price: <span>0.025 ETH</span></p>
                      </div>
                    </>
                  ) : (
                    <>
                      <ul>
                        <li>- 1/1 unique identity</li>
                        
                        <li>- Yield daily <Link to="/">$Fandom</Link> </li>
                        <li>- Full commercial rights</li>
                        <li>- Community DAO</li>
                        <li>- Use VIP token & <Link to="/">$Fandom</Link> to upgrade your Cybiez to earn more and do more </li>
                      </ul>
                      <div className="outcomes">
                        <p>Total Supply: <span>5,555</span></p>
                        <p>Private Sale: <span>2,000 reserved for VIP token holders airdrops</span></p>
                        <p>Public Sale: <span>3,555 mint for 0.08 ETH</span></p>
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
              <p><img src={star} height="24" width="30" alt="star" />Become a VIP token holder to get your free Cybiez airdrop!</p>
              <Button className="btn-mintvip" onClick={() => detectProvider()}>
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
