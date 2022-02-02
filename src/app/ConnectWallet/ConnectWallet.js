import React from 'react';
import { Row, Col, Button, Container } from 'reactstrap';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import MenuBar from '../../components/Common/MenuBar';
import cone from "../../assets/cone.png";
import celebratecircle from "../../assets/celebratecircle.png";
import celebratecirclemob from "../../assets/celebratecirclemob.png";

const ConnectWallet = () => {
    return (
        <React.Fragment>
            <MenuBar />
            <section id="connect-wallet">
                <Container fluid="xl">
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={12}>
                            <div className="content">
                                <h1>Create Your Account.</h1>
                                <h4>Celebrate the Metaverse</h4>
                                <div className="cone-img">
                                    <img src={cone} height="100%" width="100%" alt="celebrate" />
                                </div>
                            </div>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12}>
                            <div className="form-content">
                                <div className="top">
                                    <img src={celebratecircle} height="100%" width="100%" alt="celebrate nft" className="desktop" />
                                    <img src={celebratecirclemob} height="100%" width="100%" alt="celebrate nft" className="mobile" />
                                    <p>Create Your Account</p>
                                </div>
                                <div className="connect">
                                    <p>Connect to your wallet </p>
                                    <Button className="btn-connect">
                                        Connect
                                        <BsArrowUpRightCircle />
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default ConnectWallet;