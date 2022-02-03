import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Dropdown,
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
import { setLocale } from "../../store/actions/locale";
// import { connect } from "http2";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  toggleClose = () => {
    this.setState({
      isOpen: false
    });
  };
  componentDidMount() {
    let nav = document.getElementById("navbar");
    nav.classList.add("transparent-nav");

    // nav[0].style.background = 'transparent';
    // nav[0].style.position = 'absolute';
    // nav[0].style.boxShadow = 'none';
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    let nav = document.getElementById("navbar");
    nav.classList.remove("transparent-nav");
    nav.classList.remove("sticky-nav");
  }
  handleScroll() {
    let top = document.body.getBoundingClientRect().top * -1;
    let nav = document.getElementById("navbar");
    if (top > 70) {
      nav.classList.remove("transparent-nav");
      nav.classList.add("bgcolornav");
    } else {
      nav.classList.add("transparent-nav");
      nav.classList.remove("bgcolornav");
    }
  }

  render() {
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
    return (
      <div className="menubar">
        <div className="transparedNav">
          <Container fluid="xl">
            <Navbar id="navbar" light expand="lg">
              <NavbarBrand tag={Link} to={"/"} onClick={scrollToTop}>
                <img src={logo} alt="Celebrate logo" className="logodes" />
              </NavbarBrand>
              {window.location.pathname === "/connect-wallet" ? null :
                <>
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto nav-links navbarresBg" navbar>
                      <NavItem>
                        <Link
                          to="/"
                          onClick={() => {
                            this.toggleClose();
                          }}
                          spy={true}
                          smooth={true}
                          duration={500}
                        >
                          Home
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link
                          to="#"
                          onClick={() => {
                            this.toggleClose();
                          }}
                          spy={true}
                          smooth={true}
                          duration={500}
                        >
                          Tokenomics
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link
                          to="#"
                          onClick={() => {
                            this.toggleClose();
                          }}
                          spy={true}
                          smooth={true}
                          duration={500}
                        >
                          Twitter
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link
                          to="#"
                          onClick={() => {
                            this.toggleClose();
                          }}
                          spy={true}
                          smooth={true}
                          duration={500}
                        >
                          Instagram
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link
                          to="#"
                          onClick={() => {
                            this.toggleClose();
                          }}
                          spy={true}
                          smooth={true}
                          duration={500}
                        >
                          Discord
                        </Link>
                      </NavItem>
                      <NavItem id="connectwallet">
                        <Link to="/connect-wallet" className="connect-wallet">
                          Connect Wallet
                        </Link>
                      </NavItem>
                      <NavItem id="account">
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
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
                                  onClick={scrollToTop}
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
                                  onClick={scrollToTop}
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
                        </Dropdown>
                        {/* <Dropdown
                        isOpen={this.state.dropdownOpen}
                        toggle={this.toggle1}
                        className="dNone"
                      >
                        <DropdownToggle
                          tag="span"
                          data-toggle="dropdown"
                          aria-expanded={this.state.dropdownOpen}
                        >
                          <div className="togglrBtn">
                            <img src={copy} alt="account" />
                          </div>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <ul className="pro-list">
                            <li>
                              <Link
                                to="/"
                                onClick={scrollToTop}
                                className="prolink"
                                rel="noopener noreferrer"
                              >
                                <img
                                  src={profile}
                                  alt="profile"
                                />
                                <span>My Account</span>
                              </Link>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </Dropdown> */}
                      </NavItem>
                    </Nav>
                  </Collapse>
                </>
              }
            </Navbar>
          </Container>
        </div>
      </div>
    );
  }
}

MenuBar.propTypes = {
  setLocale: PropTypes.func.isRequired
};

function mapStateToProps(state) { }

export default connect(
  mapStateToProps,
  { setLocale }
)(MenuBar);
