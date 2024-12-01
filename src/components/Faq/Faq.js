import React from 'react';
import './Faq.scss';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Faq = () => {
  // JSON data for FAQs
  const faqData = [
    {
      heading: "What harsh truths do you prefer to ignore?",
      content:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      heading: "Is free will real or just an illusion?",
      content:
        "In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non.",
    },
    {
      heading: "What is the meaning of life?",
      content:
        "Deserunt elit irure ad eiusmod nulla ut quis reprehenderit commodo nisi. Duis mollit culpa eu pariatur duis aliqua.",
    },
  ];

  return (
    <React.Fragment>
      <section className="p-tb-80  ">
        <div className="container custom-container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="common-center-headings text-center">
                <h2 className="medium font-50 text-black mb-3">FAQ</h2>
                <p
                  className="regular font-18 text-black-80 mb-5"
                  style={{ maxWidth: '900px', margin: 'auto' }}
                >
                  We provide turnkey industrial automation solutions using
                  advanced PLC and SCADA technologies, serving industries such
                  as manufacturing, utilities, oil & gas, and services.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="faq-main text-center">
                <Accordion allowZeroExpanded preExpanded={["0"]}>
                  {faqData.map((item, index) => (
                    <AccordionItem
                      key={index}
                      uuid={index.toString()} // Unique ID for each item
                      className="custom-accordion-item"
                    >
                      <AccordionItemHeading>
                        <AccordionItemButton className="custom-accordion-button light font-18 text-black">
                          {item.heading}
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="regular font-18 text-black-80">{item.content}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Faq;
