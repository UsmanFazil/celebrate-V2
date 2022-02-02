import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Col, Container, Row, Button, Modal, ModalBody, FormGroup, Label, InputGroup, Input, ModalFooter } from 'reactstrap';
import Logo from '../../assets/logo.png';
import MenuBar from "../../components/Common/MenuBar";
import prodbg from '../../assets/prodbg.png';
import vipnft from '../../assets/vipnft.png';
import logo from '../../assets/logo.png';
import copy from '../../assets/copy.png';

const Product = (props) => {
  const [modal, setModal] = useState(false);
  const [modalPayment, setModalPayment] = useState(false);

  const toggle = () => setModal(true);

  const handleRadioButtonChange = () => {
    setModal(false)
    setModalPayment(true);
  }

  const togglePaymentClose = () => setModalPayment(!modalPayment);

  let history = useHistory();

  const handleRadioChange = () => {
    history.push("/");
  }

  return (
    <React.Fragment>
      <MenuBar />
      <Container fluid="xl">
        <div className="product_page">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="product">
                <div className="inner">
                  <h4>Exclusive membership</h4>
                  <span>NFT</span>
                  <p>
                    CelebrateNFT edition #1 VIP membership is ONE token to provide interoperability throughout the entire metaverse by giving you access to avatars, upgrade Cybiez, Insane metaverse experiences, MetaMerch, massive giveaways, virtual land access, activate discounts, and much more!
                  </p>
                  <p>Get a free Cybiez airdrop for every VIP NFT minted!
                  </p>
                  <small>CREATOR</small>
                  <img src={Logo} alt="Celebrate" />
                  <div className="price">
                    <p>Fixed Price</p>
                    <div className="amount">
                      0.0.25 ETH
                    </div>
                  </div>
                  <div className="price">
                    <p>Quantity</p>
                    <div className="quantity">
                      <Input type="number" id="quantity" name="quantity" />
                    </div>
                  </div>
                  <Button onClick={toggle}>Purchase</Button>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="exclusive_card">
                <div className="single_item">
                  <img src={prodbg} alt="itembg" className="itembg" />
                  <div className="inner">
                    <div className="header">
                      <h4>Edition #1 VIP</h4>
                      <p>.025 ETH</p>
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
          </Row>
        </div>
      </Container>
      <Modal isOpen={modal} toggle={toggle} className="modal-dialog">
        <ModalBody>
          <h4>Please select a payment method</h4>
          <FormGroup tag="fieldset">
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" onChange={() => handleRadioButtonChange()} /> ETH Payment </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" onChange={handleRadioChange} /> Credit Card</Label>
            </FormGroup>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" className="cancel" onClick={toggle}>Cancel</Button>
          <Button className="continue" onClick={toggle}>Continue</Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={modalPayment} className="modal-dialog">
        <ModalBody>
          <h4>Deposit ETH</h4>
          <p>Only <span>Ethereum (ETH)</span> should be sent to this address! Sending any other coins may result in the loss of your deposit.</p>
          <p className="note">Note that you cannot send other ERC20 tokens to this address.</p>
          <InputGroup>
            <Input type="text" placeholder="Address" value="0xgukjgbdsck5655%&69cjhdavckjblk" />
            <Button>
              <img src={copy} height="100%" width="100%" alt="copy" />
            </Button>
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" className="cancel" onClick={togglePaymentClose}>Cancel</Button>
          <Button className="continue">Continue</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  )
}

export default Product;