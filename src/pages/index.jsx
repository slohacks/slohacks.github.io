import React from 'react';
import styled from 'styled-components';

import { AboutUs, Footer } from '../sections';

const IndexPage = () => (
  <WrapperContainer>
    <Footer />
    <AboutUs />
  </WrapperContainer>
);

const WrapperContainer = styled.div`
  color: red;
`;

export default IndexPage;
