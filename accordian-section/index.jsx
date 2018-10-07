import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

import './index.css';

export default props => (
  <Accordion style={{ width: '100%', margin: '5px auto 15px' }}>
    <AccordionItem expanded={props.expanded || true}>
      <AccordionItemTitle>
        <h3 className="u-position-relative">
          {props.title}
          <div className="accordion__arrow" role="presentation" />
        </h3>
      </AccordionItemTitle>
      <AccordionItemBody>{props.children}</AccordionItemBody>
    </AccordionItem>
  </Accordion>
);
