import React, { useState } from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const Accordion = ({ question, answer }) => {
  const [active, setActive] = useState(false);

  const toggleAnswer = () => {
    setActive(!active);
  };

  return (
    <AccordionContainer>
      <AccordionButton activeItem={active} onClick={toggleAnswer}>{question}</AccordionButton>
      <AccordionContent activeItem={active}>
        {answer}
      </AccordionContent>
    </AccordionContainer>
  );
};

const AccordionContainer = styled.div`
  transition: all 1s ease 0s;
  visibility: visible;
  transform: translate(0px, 0px);
  
`;

const AccordionButton = styled.a`
  display: flex;
  border-bottom: 1px solid #2A34B1;
  padding: 1rem 3rem 1rem 1rem;
  ::after {
    content:'\\25BA';
    display: inline-block;
    position: absolute;
    right: 1em;
    transform: rotate(${(props) => (props.activeItem ? '270deg' : '90deg')});
  }
`;

const AccordionContent = styled.div`
  padding: .5rem 2rem;
  opacity: ${(props) => (props.activeItem ? '1' : '0')};
  max-height: ${(props) => (props.activeItem ? '100%' : '0')};
  overflow: hidden;
  transition: opacity .25s cubic-bezier(.68,.8,.25,1) .1s,max-height .25s cubic-bezier(.22,.61,.36,1),padding-bottom .25s cubic-bezier(.22,.61,.36,1);
`;

Accordion.propTypes = {
  question: Proptypes.string.isRequired,
  answer: Proptypes.string.isRequired,
};

export default Accordion;
