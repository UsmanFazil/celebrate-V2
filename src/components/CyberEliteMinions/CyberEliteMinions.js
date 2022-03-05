// Home Page #2 Collections Component

import React from "react";
import Slider from "react-slick";
// import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import top1 from "../../assets/top1.png";
import top2 from "../../assets/top2.png";
import top3 from "../../assets/top3.png";
import top4 from "../../assets/top4.png";
import top5 from "../../assets/top5.png";
import top6 from "../../assets/top6.png";
import top7 from "../../assets/top7.png";
import top8 from "../../assets/top8.png";
import top9 from "../../assets/top9.png";
import top10 from "../../assets/top10.png";
import top11 from "../../assets/top11.png";
import top12 from "../../assets/top12.png";
import bottom1 from "../../assets/bottom1.png";
import bottom2 from "../../assets/bottom2.png";
import bottom3 from "../../assets/bottom3.png";
import bottom4 from "../../assets/bottom4.png";
import bottom5 from "../../assets/bottom5.png";
import bottom6 from "../../assets/bottom6.png";
import bottom7 from "../../assets/bottom7.png";
import bottom8 from "../../assets/bottom8.png";
import bottom9 from "../../assets/bottom9.png";
import bottom10 from "../../assets/bottom10.png";
import bottom11 from "../../assets/bottom11.png";
import bottom12 from "../../assets/bottom12.png";

const CyberEliteMinions = () => {
  const CybiezListTop = [
    {
      id: '0',
      img: top1,
    },
    {
      id: '1',
      img: top2,
    },
    {
      id: '2',
      img: top3,
    },
    {
      id: '3',
      img: top4,
    },
    {
      id: '4',
      img: top5,
    },
    {
      id: '5',
      img: top6,
    },
    {
      id: '6',
      img: top7,
    },
    {
      id: '7',
      img: top8,
    },
    {
      id: '8',
      img: top9,
    },
    {
      id: '9',
      img: top10,
    },
    {
      id: '10',
      img: top11,
    },
    {
      id: '11',
      img: top12,
    },
  ]
  const CybiezListBottom = [
    {
      id: '0',
      img: bottom1,
    },
    {
      id: '1',
      img: bottom2,
    },
    {
      id: '2',
      img: bottom3,
    },
    {
      id: '3',
      img: bottom4,
    },
    {
      id: '4',
      img: bottom5,
    },
    {
      id: '5',
      img: bottom6,
    },
    {
      id: '6',
      img: bottom7,
    },
    {
      id: '7',
      img: bottom8,
    },
    {
      id: '8',
      img: bottom9,
    },
    {
      id: '9',
      img: bottom10,
    },
    {
      id: '10',
      img: bottom11,
    },
    {
      id: '11',
      img: bottom12,
    },
  ]
  const RTLsettings = {
    dots: false,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const LTRsettings = {
    dots: false,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    ltr: true,
    responsive: [
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="ce-minions">
      <Container fluid>
        <div className="title-center">
          <h2>Meet the Cybiez</h2>
        </div>
        <div className="minions-lists">
          <Slider {...RTLsettings}>
            {CybiezListTop.map(item =>
              <div key={item.id}>
                <img src={item.img} height="100%" width="100%" alt="Cybiez" />
              </div>
            )}
          </Slider>
          <Slider {...LTRsettings}>
            {CybiezListBottom.map(item =>
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
