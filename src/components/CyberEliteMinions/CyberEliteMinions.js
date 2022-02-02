// Home Page #2 Collections Component

import React from "react";
import Slider from "react-slick";
// import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import minion from "../../assets/minion.png";
const CyberEliteMinions = () => {
  const CybiezList = [
    {
      id: '0',
      img: minion,
    },
    {
      id: '1',
      img: minion,
    },
    {
      id: '2',
      img: minion,
    },
    {
      id: '3',
      img: minion,
    },
    {
      id: '4',
      img: minion,
    },
    {
      id: '5',
      img: minion,
    },
    {
      id: '6',
      img: minion,
    },
    {
      id: '7',
      img: minion,
    },
    {
      id: '8',
      img: minion,
    },
    {
      id: '9',
      img: minion,
    },
    {
      id: '10',
      img: minion,
    },
  ]
  const RTLsettings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const LTRsettings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    ltr: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="ce-minions">
      <Container fluid="xl">
        <div className="title-center">
          <h2>Meet the Cybiez</h2>
        </div>
        <div className="minions-lists">
          <Slider {...RTLsettings}>
            {CybiezList.map(item =>
              <div key={item.id}>
                <img src={item.img} height="100%" width="100%" alt="Cybiez" />
              </div>
            )}
          </Slider>
          <Slider {...LTRsettings}>
            {CybiezList.map(item =>
              <div key={item.id}>
                <img src={item.img} height="100%" width="100%" alt="Cybiez" />
              </div>
            )}
          </Slider>
          <div className="before"></div>
          <div className="after"></div>
        </div>
      </Container>
    </section>
  );
}

export default CyberEliteMinions;
