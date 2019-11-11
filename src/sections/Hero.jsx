import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import styled from 'styled-components';

import {
  FrontHero,
  BackHero,
  SLOHacksLogo,
  EventLogo,
} from '../images';

const Hero = () => (
  <ParallaxProvider>
    <BackgroundWrapper>
      <HeroWrapper>
        <HeroContainer>
          <LogoContainer>
            <LogoImage src={SLOHacksLogo} alt="SLO Hacks Logo" />
          </LogoContainer>
        </HeroContainer>
        <HeroContent>
          <EventImage src={EventLogo} />
          <p>Cal Poly SLO | January 10-12, 2020</p>
        </HeroContent>
        {/* <ParallaxWrapper>
          <ParallaxContainer>
            <Parallax y={[0, 60]}>
              <ImageContainer>
                <PatternImage src={FrontHero} />
              </ImageContainer>
            </Parallax>
            <Parallax y={[0, -100]}>
              <ImageContainer>
                <PatternImage src={BackHero} />
              </ImageContainer>
            </Parallax>
          </ParallaxContainer>
        </ParallaxWrapper> */}
      </HeroWrapper>
    </BackgroundWrapper>
  </ParallaxProvider>
);

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;

  @media screen and (min-width: 767px) {
    justify-content: start;
  }
`;

const BackgroundWrapper = styled.div`
  display: flex;
  
  background: url(${FrontHero}), url(${BackHero}), linear-gradient(to right, #E5975E , #2A34B1);
  background-size: 80%, 80%, 100%;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (min-width: 767px) {
    justify-content: center;
  }
`;

const LogoImage = styled.img`
  display: block;
  align-self: center;
  max-width: 150px;
  height: auto;

  @media screen and (min-width: 767px) {
    max-width: 500px;
  }
`;

const HeroWrapper = styled.div`
  height: 100vh;
  padding: 0 2rem;
  max-width: 1250px;
  width: 100%;
  display: grid;
  grid-template-rows: 2fr 4fr 2fr;  
`;

const HeroContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  p {
    font-size: 14px;
    color: #FFFFFF;

    @media screen and (min-width: 767px) {
      font-size: 22px;
    }
  }
`;

const EventImage = styled.img`
  max-width: 245px;
  height: auto;
  align-self: center;

  @media screen and (min-width: 400px) {
    max-width: 350px;
  }

  @media screen and (min-width: 767px) {
    max-width: 550px;
  }
`;

const HeroContainer = styled.div`
  position: relative;
  text-align: center;
  max-width: 1250px;

  @media screen and (min-width: 767px) {
    padding: 2rem;
  }
`;

// const ParallaxWrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   position: relative;
// `;

// const ParallaxContainer = styled.div`
//   position: absolute;
// `;

// const ImageContainer = styled.div`
//   text-align: center;
// `;

// const PatternImage = styled.img`
//   width: 60%;
//   height: auto;
// `;

export default Hero;
