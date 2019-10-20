import React from 'react';
import styled from 'styled-components';

import { Heading2, Heading3 } from '../../styled/headings';

const faq = {
  "What is a hackathon?": "A hackathon is an event where students with common interests from all over the nation come together and collaborate on a project over a 36-hour period.",
  "Who can come?": "All college students (both graduate and undergraduate) are welcome! No prior experience is necessary.",
  "What can I build?": "If you can think it, you can build it. We encourage students to build technological projects, whether they be software or hardware.",
  "What if I don't have a team or idea?": "Not a problem. There will be time at the beginning of the hackathon to find other students who don't have a team yet!",
  "What should I bring?": "Bring your ID, computer, and sleeping bag (optional). All the necessary equipment for hardware projects will be provided. We'll also have a hardware lab with a variety of devices and parts.",
  "How much does it cost?": "Food and admission are absolutely FREE! Buses will be provided for students traveling within California.",
  "Is there a code of conduct?": "Please refer to the MLH code of conduct.",
  "How will I get there?": "We will be providing buses for Californian hackers, and case-by-case flight reimbursements for out-of-state hackers. Check your email upon acceptance for more details!",
  "Still have questions?": "Feel free to shoot us an email at team@slohacks.com or contact us on Facebook."
};

export const FAQSection = () => (
  <FAQSectionWrapper>
    <div>
      <Heading2>FAQ</Heading2>
      <FAQItems>
        {Object.entries(faq).map(([question, answer]) => (
          <FAQItem question={question} answer={answer} />
        ))}
      </FAQItems>
    </div>
  </FAQSectionWrapper>
);

const FAQItem = (({question, answer}) => (
  <FAQItemStyle>
    <details>
      <summary>{question}</summary>
      <div>{answer}</div>
    </details>
  </FAQItemStyle>
));

const FAQSectionWrapper = styled.section`
  display: flex;
  justify-content: flex-end;

  & > div {
    flex: 0 30rem;
  }
`;

const FAQItems = styled.div`
  display: flex;
  flex-direction: column;
`;

const FAQItemStyle = styled.div`
  border-top: 2px solid;

  & summary {
    padding: 1rem;
  }
  & summary + div {
    padding: 0 1rem 1rem 1rem;
  }
`;