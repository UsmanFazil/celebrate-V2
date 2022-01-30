// Home Page #2 Roadmap Component

import React from "react";
import { Row, Col } from "reactstrap";
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
      question: 'What is the edition #1 VIP?',
      answer: 'CelebrateNFT edition #1 VIP membership is ONE token to provide interoperability throughout the entire metaverse by giving you access to avatars, exclusive wearables, Insane metaverse experiences, MetaMerch, massive giveaways, virtual land access, activate discounts, and much more!',
    },
    {
      id: 'b',
      question: 'Do VIP holders get a free Cybiez?',
      answer: 'Coming soon',
    },
    {
      id: 'c',
      question: 'How much does the edition #1 VIP NFT cost?',
      answer: 'Coming soon',
    },
    {
      id: 'd',
      question: 'Who are the Cybiez?',
      answer: 'Coming soon',
    },
    {
      id: 'e',
      question: 'How much is the Cybiez public sale?',
      answer: 'Coming soon',
    },
  ]
  return (
    <section id="faq">
      <div className="container-xl">
        <div className="title-center">
          <h2>FAQ</h2>
        </div>
        <div className="roadmap">
          <Row>
            <Col lg={12}>
              <Accordion preExpanded={['a']}>
                {FAQList.map(item =>
                  <AccordionItem uuid={item.id}>
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
      </div>
    </section>
  );
}

export default FAQ;
