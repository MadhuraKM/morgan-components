import React from 'react';
import { shallow } from 'enzyme';
import AccordianSection from './index.jsx';
import {
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';

/**
 * Test Accordian Section component
 */
describe('Test Accordian Section component', () => {
  /**
   * Test Accordian Section render with given props
   */
  it('Test Accordian Section assigned given prop', () => {
    const accordianSection = shallow(
      <AccordianSection title="Test" expanded={true}>
        <div>Test</div>
      </AccordianSection>
    );

    expect(accordianSection.find(AccordionItem).props().expanded).toBe(true);
    expect(
      accordianSection.find(AccordionItemTitle).contains('Test')
    ).toBeTruthy();
    expect(
      accordianSection.find(AccordionItemBody).contains(<div>Test</div>)
    ).toBeTruthy();
  });
});
