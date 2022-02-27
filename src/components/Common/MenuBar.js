import React, { useEffect, useState } from "react";

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
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import copy from '../../assets/copy.png';
import copyblack from '../../assets/copyblack.png';
import profile from '../../assets/profile.png';

function MenuBar() {

  // Collapse isOpen State
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState('');

  async function checkIfWalletIsConnected() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length > 0) {
        const account = accounts[0];
        setIsLogged(account);
        return;
      }
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

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

                  {isLogged.length > 0 ? <NavItem id="account">
                    <UncontrolledDropdown>
                      <DropdownToggle>
                        <img src={copy} alt="account" />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <ul>
                          <li>
                            <div className="wallet">
                              <div className="address">
                                {isLogged.slice(0, 15) + `...` + isLogged.slice(-1 * 4)}

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
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem> : <NavItem id="connectwallet">
                    <Link to="/connect-wallet" className="connect-wallet">
                      Connect Wallet
                    </Link>
                  </NavItem>}
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
