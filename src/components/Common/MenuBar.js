import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Button,
} from "reactstrap";
import { animateScroll as scroll } from "react-scroll";
// , Events, scroller
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import copy from '../../assets/copy.png';
import copyblack from '../../assets/copyblack.png';
import profile from '../../assets/profile.png';
import logout from '../../assets/logout.png';
// import { setLocale } from "../../store/actions/locale";
// import { connect } from "http2";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";

function MenuBar() {

  // Collapse isOpen State
  const [isOpen, setIsOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  // const authEnable = () => {
  //   setIsAuth(true);
  // }
  // const authDisable = () => {
  //   setIsAuth(!isAuth);
  // }
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header>
      <Container fluid="xl">
        <Navbar expand="xl">
          <NavbarBrand tag={Link} to={"/"} onClick={scrollToTop}>
            <img src={logo} alt="Celebrate logo" className="logodes" />
          </NavbarBrand>
          {window.location.pathname === "/connect-wallet" ? null :
            <>
              <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <Link to="/">
                      Home
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/tokenomics">
                      Tokenomics
                    </Link>
                  </NavItem>
                  <NavItem>
                    <a href="https://twitter.com/CelebrateNFT" target="_blank" rel="noopener noreferrer">
                      Twitter
                    </a>
                  </NavItem>
                  <NavItem>
                    <a href="https://www.instagram.com/celebratenft/" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  </NavItem>
                  <NavItem>
                    <a href="https://discord.gg/88TANXEbGh" target="_blank" rel="noopener noreferrer">
                      Discord
                    </a>
                  </NavItem>
                  <NavItem id="connectwallet">
                    <Link to="/connect-wallet" className="connect-wallet">
                      Connect Wallet
                    </Link>
                  </NavItem>
                  {isAuth ?
                    <NavItem id="account">
                      <UncontrolledDropdown>
                        <DropdownToggle>
                          <img src={copy} alt="account" />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <ul>
                            <li>
                              <div className="wallet">
                                <div className="address">
                                  0x278992821842c0a70
                                </div>
                                <Button>
                                  <img src={copyblack} height="100%" width="100%" alt="copy" />
                                </Button>
                              </div>
                            </li>
                            <li>
                              <Link
                                to="/my-account"

                                className="prolink"
                              >
                                <img
                                  src={profile}
                                  alt="profile"
                                />
                                <span>My Account</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/"

                                className="prolink"
                              >
                                <img
                                  src={logout}
                                  alt="logout"
                                />
                                <span>Sign out</span>
                              </Link>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </NavItem>
                    : null}
                </Nav>
              </Collapse>
            </>
          }
        </Navbar>
      </Container>
    </header>
  );
}

export default MenuBar;