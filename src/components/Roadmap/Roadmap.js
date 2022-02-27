// Home Page #2 Roadmap Component

import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import roadcard from "../../assets/roadmap-card.png";
const Roadmap = () => {
  const RoadmapList = [
    {
      id: '0',
      q: 'Phase',
      year: '1',
      point1: '/Website Revamp',
      point2: '/VIP edition #1 sale',
    },
    {
      id: '1',
      q: 'Phase',
      year: '2',
      point1: '/VIP Cybiez Airdrop',
      point2: '/Cybiez public sale',
      point3: '/IRL Cybiez Merch',
    },
    {
      id: '2',
      q: 'Phase',
      year: '3',
      point1: '/Launch ',
      point2: '/On Chain Token Swap',
      point3: '/Token Liquidity pool',
      celebratelink: '$Fandom',
    },
    {
      id: '3',
      q: 'Phase',
      year: '4',
      point1: '/Launch Marketplace',
      point2: '/Metamerch collab drops',
      point3: '/First Cybiez Recruitment',
    },
  ]
  return (
    <section id="roadmap">
      <Container fluid="xl">
        <div className="title-center">
          <h2>Roadmap</h2>
        </div>
        <div className="roadmap">
          <Row>
            {RoadmapList.map(item =>
              <Col xl={3} lg={6} md={6} sm={6} xs={12} key={item.id}>
                <div className="roadmap-step">
                  <div className="step-in">
                    <img src={roadcard} height="100%" width="100%" alt="road card" className="cardbg" />
                    <div className="card-inner">
                      <h1>{item.q}</h1>
                      <h4 className="year">{item.year}</h4>
                    </div>
                  </div>
                  <div className="points">
                    <p>{item.point1}  {item.id === '2' ? (
                      <Link to="/">&nbsp;{item.celebratelink}</Link>
                    ) : ''}</p>
                    <p>{item.point2}</p>
                    {item.id !== '0' ? (
                      <p>{item.point3}</p>
                    ) : ''}
                  </div>
                </div>
              </Col>
            )}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Roadmap;
