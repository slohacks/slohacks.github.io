import React from 'react';
import styled from 'styled-components';

import { ScheduleSection } from '../components/sections/schedule/Schedule';

const IndexPage = () => (
  <WrapperContainer>
    <ScheduleSection />
    {/* <FAQ />
    <Sponsors />
    <Footer /> */}
  </WrapperContainer>
);

const WrapperContainer = styled.div`

`;

export default IndexPage;
