// Home Page #1 Main Section Component
import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Container } from "reactstrap";
import { BsArrowUpRightCircle } from 'react-icons/bs';
import vipaccessmetaverse from "../../assets/vipaccessmetaverse.png";
import detectProvider from '../detectProvider';



const MainSection = () => {
  const history = useHistory();
  const learnMore = () => {
    history.push('/tokenomics')
  }
  return (
    <section className="main-section">
      <Container fluid="xl">
        <div className="inner">
          <div className="graphic">
            <img src={vipaccessmetaverse} height="100%" width="100%" alt="vip access meta verse" />
            <div className="btns">
              <Button className="btn-mintvip" onClick={() => detectProvider()}>
                Mint VIP
                <BsArrowUpRightCircle />
              </Button>
              <Button className="btn-learnmore" onClick={learnMore}>Learn More</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MainSection;
