// Home Page #2 Roadmap Component

import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from "react-accessible-accordion";

const FAQ = () => {
  const FAQList = [
    {
      id: 'a',
      question: 'What is the VIP Mint Pass?',
      answer: 'CelebrateNFT VIP Mint Pass membership is ONE token to provide interoperability throughout the entire metaverse by giving you access to avatars, upgrade Cybiez, insane metaverse experiences, MetaMerch, massive giveaways, virtual land access, activate discounts, and much more!',
    },
    {
      id: 'b',
      question: 'Do VIP holders get a free Cybiez?',
      answer: 'Yes, all 2,000 VIP Mint Pass token holders will receive a FREE Cybiez airdrop!',
    },
    {
      id: 'c',
      question: 'How much does the VIP Mint Pass NFT cost?',
      answer: '.025 ETH',
    },
    {
      id: 'd',
      question: 'Who are the Cybiez?',
      answer: 'On our mission to find the top elite web 3.0 builders and creators we came across the Cybieverse. This metaverse is full of highly intelligent Cybiez who love to build!',
    },
    {
      id: 'e',
      question: 'How much is the Cybiez public sale?',
      answer: '.08 ETH',
    },
  ]
  return (
    <section id="faq">
      <Container fluid="xl">
        <div className="title-center">
          <h2>FAQ</h2>
        </div>
        <div className="roadmap">
          <Row>
            <Col lg={12}>
              <Accordion preExpanded={['a']}>
                {FAQList.map(item =>
                  <AccordionItem uuid={item.id} key={item.id}>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        {item.question}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>{item.answer}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                )}
              </Accordion>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default FAQ;
