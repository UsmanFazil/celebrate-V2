import React from 'react';
import { useEffect, useState } from "react";
import { Row, Col, Button, Container } from 'reactstrap';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import MenuBar from '../../components/Common/MenuBar';
import history from '../../components/Common/history';
import cone from "../../assets/cone.png";
import celebratecircle from "../../assets/celebratecircle.png";
import celebratecirclemob from "../../assets/celebratecirclemob.png";
import { increment } from '../../store/actions';
import Web3 from 'web3/dist/web3.min.js'

const ConnectWallet = () => {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch();
    const [isConnecting, setIsConnecting] = useState(false);
    const [provider, setProvider] = useState(window.ethereum);
    const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [currentAccount, setCurrentAccount] = useState(null);
    const [web3, setWeb3] = useState(null);


    useEffect(() => {
        setProvider(detectProvider());
    }, []);

    const detectProvider = () => {
        let provider;
        if (window.ethereum) {
            provider = window.ethereum;
        } else if (window.web3) { //check if the browser is compatible
            provider = window.web3.currentProvider;
        } else {
            console.warn("No Ethereum browser detected! Checkout metamask ");
        }
        return provider;
    }

    const onLoginHandler = async () => {
        setIsConnecting(true);
        await provider.request({
            method: "eth_requestAccounts"
        });
        setIsConnecting(false);
        connectWallet(provider);
    }

    const connectWallet = async (provider) => {

        const web3 = new Web3(provider)
        const accounts = await web3.eth.getAccounts()

        if (accounts.length === 0) {
            console.log("Please connect to metamask!!")
        } else if (accounts[0] !== currentAccount) {
            setProvider(provider);
            setWeb3(web3)
            setCurrentAccount(accounts[0])
            dispatch({type: 'INCREMENT', payload: accounts[0]});
            setIsConnected(true);
            localStorage.setItem("Token",accounts[0])
            history.push("/product");
        }
    }

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
                                    <Button className="btn-connect" onClick={onLoginHandler}>
                                        Connect {currentAccount}
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