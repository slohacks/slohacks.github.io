import React from 'react';
import styled from 'styled-components';

import Accordion from '../components/Accordion';
import { SectionHeader } from '../styled/headings';

const faq = [
  { title: 'What is a hackathon?', content: 'A hackathon is an event where students with common interests from all over the nation come together and collaborate on a project over a 36-hour period.' },
  { title: 'Who can come?', content: 'All college students (both graduate and undergraduate) are welcome! No prior experience is necessary.' },
  { title: 'What can I build?', content: 'If you can think it, you can build it. We encourage students to build technological projects, whether they be software or hardware.' },
  { title: 'What if I don\'t have a team or idea?', content: 'Not a problem. There will be time at the beginning of the hackathon to find other students who don\'t have a team yet!' },
  { title: 'What should I bring?', content: 'Bring your ID, computer, and sleeping bag (optional). All the necessary equipment for hardware projects will be provided. We\'ll also have a hardware lab with a variety of devices and parts.' },
  { title: 'How much does it cost?', content: 'Food and admission are absolutely FREE! Buses will be provided for students traveling within California.' },
  { title: 'Is there a code of conduct?', content: 'Please refer to the MLH code of conduct.' },
  { title: 'How will I get there?', content: 'We will be providing buses for Californian hackers, and case-by-case flight reimbursements for out-of-state hackers. Check your email upon acceptance for more details!' },
  { title: 'Still have questions?', content: 'Feel free to shoot us an email at team@slohacks.com or contact us on Facebook.' }
];

const FAQ = () => (
  <FAQSectionWrapper>
    <SectionHeader>FAQ</SectionHeader>
    <AccordionWrapper>
      {
          faq.map(({ title, content }) => (
            <Accordion key={title} question={title} answer={content} />
          ))
      }
    </AccordionWrapper>
  </FAQSectionWrapper>
);

const FAQSectionWrapper = styled.section`
  display: flex;

  flex-direction: column;
  max-width: 1250px;
  margin: 0 auto;
  padding: 2rem;

`;

const AccordionWrapper = styled.div`
  margin: 0 auto;
`;

export default FAQ;
