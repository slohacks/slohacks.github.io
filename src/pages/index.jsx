import React from 'react';
import styled from 'styled-components';

import { ScheduleSection } from '../components/sections/schedule/Schedule';
import { FAQSection } from '../components/sections/faq/FAQ';

const IndexPage = () => (
  <WrapperContainer>
    <ScheduleSection />
    <FAQSection />
  </WrapperContainer>
);

const WrapperContainer = styled.div`

`;

export default IndexPage;
