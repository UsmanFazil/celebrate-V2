// Home Page #1 Main Section Component

import React from "react";
import { Button, Container } from "reactstrap";
import { BsArrowUpRightCircle } from 'react-icons/bs';
import vipaccessmetaverse from "../../assets/vipaccessmetaverse.png";
// import VipAccess from "../../assets/vip-access.png";
const MainSection = () => {
  return (
    <section className="main-section">
      <div className="container-xl">
        <div className="inner">
          <div className="graphic">
            <img src={vipaccessmetaverse} height="100%" width="100%" alt="vip access meta verse" />
            <div className="btns">
              <Button className="btn-mintvip">
                Mint VIP
                <BsArrowUpRightCircle />
              </Button>
              <Button className="btn-learnmore">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
