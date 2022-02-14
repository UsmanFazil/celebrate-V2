import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { animateScroll as scroll } from "react-scroll";
import logo from "../../assets/logo.png";

class Footer extends React.Component {
  render() {
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
    return (
      <footer>
        <Container fluid="xl">
          <div className="footer-container">
            <div className="footer-left">
              <img src={logo} height="100%" width="100%" alt="celebratenft" />
              <ul>
                <li>Celebrate, LLC</li>
                <li>12224 Roxie Dr Suite C1</li>
                <li>Austin, Texas, 78729</li>
              </ul>
            </div>
            <div className="footer-social-link">
              <ul>
                <li>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-right">
              <h4>Support</h4>
              <ul>
                <li><Link to="#">Terms of Service</Link></li>
                <li><Link to="#">Whitepaper</Link></li>
                <li><Link to="#">Commercial Rights</Link></li>
              </ul>
            </div>
          </div>
          <div className="gotop vert-move">
            <Link to="/" onClick={scrollToTop}><i className="fa fa-arrow-up"></i></Link>
          </div>
        </Container>
      </footer>
    );

  }
}

export default Footer;
