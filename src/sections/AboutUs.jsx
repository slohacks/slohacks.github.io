import React from 'react';
import styled from 'styled-components';

import { SectionHeader } from '../styled/headings';

import BluePattern from '../images/blue_pattern.png';

const AboutUs = () => (
  <AboutUsContainer>
    <AboutUsContentContainer>
      <SectionHeader color="#FFFFFF">
        About Us
      </SectionHeader>
      <p>
        SLO Hacks organizes events year-round dedicated towards
        building an inclusive hacker community and environment that empowers students with the
        necessary tools to dream, code, and build projects that contribute to social good.
      </p>
    </AboutUsContentContainer>
    <BluePatternImageContainer>
      <BluePatternImage src={BluePattern} alt="blue pattern" />
    </BluePatternImageContainer>
  </AboutUsContainer>
);

const AboutUsContainer = styled.div`
  position: relative;
  padding: 3rem;
  background-color: #5DC0F7;
  z-index: 10;

  p {
    color: #FFFFFF;
  }
`;

const AboutUsContentContainer = styled.div`
  z-index: 20;
  position: relative;
`;

const BluePatternImageContainer = styled.div`
  
`

const BluePatternImage = styled.img`
  position: absolute;
  left: 50%;
  top: -20%;
  max-width: 300px;

  @min
`;


export default AboutUs;
