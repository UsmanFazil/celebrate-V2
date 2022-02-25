

import React, { useState } from 'react';
import { Col, Container, Row, TabContent, TabPane, Nav, NavItem, NavLink, Button } from 'reactstrap';
// import { Link } from 'react-router-dom';
import classnames from 'classnames';
import MenuBar from "../../components/Common/MenuBar";
import detectProvider from '../../components/detectProvider'
import probg from '../../assets/probg.png';
import copy from '../../assets/copy.png';
import vipnft from '../../assets/vipnft.png';
import logo from '../../assets/logo.png';
import { FiArrowRightCircle } from 'react-icons/fi';
const MyAccount = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [activeTabb, setActiveTabb] = useState('01');
    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    const togglee = (tabb) => {
        if (activeTabb !== tabb) setActiveTabb(tabb);
    }

    return (
        <React.Fragment>
            <MenuBar />
            <Container fluid="xl">
                <div className="my_account">
                    <Row>
                        <Col xl={3} lg={3} md={4} sm={12}>
                            <div className="my_profile">
                                <div className="tab_res">
                                    <div className="wallet">
                                        <div className="address">
                                            {'0x278992821842c0a70'.slice(0, 15) + `...` + '0x278992821842c0a70'.slice(-1 * 4)}
                                        </div>
                                        <Button>
                                            <img src={copy} height="100%" width="100%" alt="copy" />
                                        </Button>
                                    </div>
                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '1' })}
                                                onClick={() => { toggle('1'); }}
                                            >
                                                Celebrate Card

                                            </NavLink>
                                            <span className="brbtm" />
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '2' })}
                                                onClick={() => { toggle('2'); }}
                                            >
                                                Collection

                                            </NavLink>
                                            <span className="brbtm" />
                                        </NavItem>
                                    </Nav>
                                </div>
                                <div className="tab_desk">
                                    <div className="wallet">
                                        <div className="address">
                                            {'0x278992821842c0a70'.slice(0, 15) + `...` + '0x278992821842c0a70'.slice(-1 * 4)}
                                        </div>
                                        <Button>
                                            <img src={copy} height="100%" width="100%" alt="copy" />
                                        </Button>
                                    </div>
                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '1' })}
                                                onClick={() => { toggle('1'); }}
                                            >
                                                Celebrate Card
                                                <span className="brbtm" />
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '2' })}
                                                onClick={() => { toggle('2'); }}
                                            >
                                                Collection
                                                <span className="brbtm" />
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                            </div>
                        </Col>
                        <Col xl={9} lg={9} md={8} sm={12}>
                            <div className="tab-detail">
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <Row>
                                            <Col lg={4}>
                                                <div className="exclusive_card">
                                                    <div className="single_item">
                                                        <img src={probg} alt="itembg" className="itembg" />
                                                        <div className="inner">
                                                            <div className="header">
                                                                <p>Edition #1 VIP</p>
                                                            </div>
                                                            <div className="content">
                                                                <img src={vipnft} height="100%" width="100%" alt="vip nft" />
                                                            </div>
                                                            <div className="footer">
                                                                <p>
                                                                    Creator
                                                                </p>
                                                                <img src={logo} height="100%" width="100%" alt="celebrate" />

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={8}>
                                                <div className="mint_exmembership">
                                                    <div className="inner">
                                                        <h4>
                                                            Mint Edition #1 VIP for exclusive Benefits!
                                                        </h4>
                                                        <Button className="btn-mintvip" onClick={() => detectProvider()}>
                                                            Mint VIP <FiArrowRightCircle />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Row>
                                            <Col lg={12}>
                                                <Nav tabs>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: activeTabb === '01' })}
                                                            onClick={() => { togglee('01'); }}
                                                        >
                                                            Current Collection
                                                        </NavLink>
                                                        <span className="brbtm" />
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: activeTabb === '02' })}
                                                            onClick={() => { togglee('02'); }}
                                                        >
                                                            Recently Bought
                                                        </NavLink>
                                                        <span className="brbtm" />
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: activeTabb === '03' })}
                                                            onClick={() => { togglee('03'); }}
                                                        >
                                                            Recently Gifted
                                                        </NavLink>
                                                        <span className="brbtm" />
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: activeTabb === '04' })}
                                                            onClick={() => { togglee('04'); }}
                                                        >
                                                            Recently Received
                                                        </NavLink>
                                                        <span className="brbtm" />
                                                    </NavItem>
                                                </Nav>
                                                <TabContent activeTab={activeTabb}>
                                                    <TabPane tabId="01">
                                                        <Row>
                                                            <Col lg={4}>
                                                                <div className="exclusive_card">
                                                                    <div className="single_item">
                                                                        <img src={probg} alt="itembg" className="itembg" />
                                                                        <div className="inner">
                                                                            <div className="header">
                                                                                <p>Edition #1 VIP</p>
                                                                            </div>
                                                                            <div className="content">
                                                                                <img src={vipnft} height="100%" width="100%" alt="vip nft" />
                                                                            </div>
                                                                            <div className="footer">
                                                                                <p>
                                                                                    Creator
                                                                                </p>
                                                                                <img src={logo} height="100%" width="100%" alt="celebrate" />

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col lg={8}>

                                                            </Col>
                                                        </Row>
                                                    </TabPane>
                                                    <TabPane tabId="02">
                                                        <Row>
                                                            <Col lg={4}>
                                                                <h1>content 2</h1>
                                                            </Col>
                                                            <Col lg={8}>

                                                            </Col>
                                                        </Row>
                                                    </TabPane>
                                                    <TabPane tabId="03">
                                                        <Row>
                                                            <Col lg={4}>
                                                                <h1>content 3</h1>
                                                            </Col>
                                                            <Col lg={8}>

                                                            </Col>
                                                        </Row>
                                                    </TabPane>
                                                    <TabPane tabId="04">
                                                        <Row>
                                                            <Col lg={4}>
                                                                <h1>content 4</h1>
                                                            </Col>
                                                            <Col lg={8}>

                                                            </Col>
                                                        </Row>
                                                    </TabPane>
                                                </TabContent>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default MyAccount;