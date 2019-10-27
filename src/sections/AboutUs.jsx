import React from 'react';
import styled from 'styled-components';

import { SectionHeader } from '../styled/headings';

import BluePattern from '../images/blue_pattern.png';

const AboutUs = () => (
  <AboutUsContainer>
    <AboutUsContentContainer>
      <div>
        <SectionHeader color="#FFFFFF">
          About Us
        </SectionHeader>
        <p>
          SLO Hacks organizes events year-round dedicated towards
          building an inclusive hacker community and environment that empowers students with the
          necessary tools to dream, code, and build projects that contribute to social good.
        </p>
        <LearnButton
          href="https://www.facebook.com/slohacks"
          target="_blank"
        >
          Learn more
        </LearnButton>
      </div>
    </AboutUsContentContainer>
    <BluePatternImageContainer>
      <BluePatternImage src={BluePattern} alt="blue pattern" />
    </BluePatternImageContainer>
  </AboutUsContainer>
);

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 2rem;
  background-color: #5DC0F7;
  z-index: 10;

  p {
    color: #FFFFFF;
  }

  @media screen and (min-width: 767px) {
    flex-direction: row;
    justify-content: space-around;
    div {
      margin: 0 auto;
      width: 50%;
      max-width: 700px;
    }
  }
`;

const AboutUsContentContainer = styled.div`
  align-self: center;
  z-index: 20;
  position: relative;
  margin: 0 auto;
  max-width: 1200px;

  @media screen and (min-width: 767px) {
    p {
      font-size: 18px;
    }
  }
`;

const LearnButton = styled.a`
  display: inline-block;
  color: #FFFFFF;
  outline: 1px solid #FFFFFF;
  text-decoration: none;
  padding: .75rem 2rem;
  margin: 1rem 0;
`;

const BluePatternImageContainer = styled.div`
  display: flex;
  text-align: center;
`;

const BluePatternImage = styled.img`
  position: absolute;
  width: 100%;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  max-width: 300px;

  @media screen and (min-width: 767px) {
    position: static;
    align-self: center;
    transform: none;
    max-width: 400px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 500px;
  }
`;


export default AboutUs;
