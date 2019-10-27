import React from 'react';
import styled from 'styled-components';

import {
  email,
  twitter,
  instagram,
  linkedin,
  facebook,
  MainPattern,
} from '../images';

import Accordion from '../components/Accordion';

const Footer = () => (
  <FooterContainer>
    <SocialContainer>
      <img src={email} alt="team@slohacks.com" />
      <img src={facebook} alt="team@slohacks.com" />
      <img src={twitter} alt="team@slohacks.com" />
      <img src={instagram} alt="team@slohacks.com" />
      <img src={linkedin} alt="team@slohacks.com" />
    </SocialContainer>
    <p>
      Made with ♥ by the SLO Hacks Team
      <br />
      &copy; SLO Hacks 2018
    </p>
  </FooterContainer>
);

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 2rem 2rem;
  grid-auto-flow: column;
  text-align: center;
  background-image: url(${MainPattern});
  background-repeat: no-repeat;
  background-position: top center;

  p {
    font-size: 14px;
    letter-spacing: 2px;
  }

  @media screen and (min-width: 767px) {
    p {
      font-size: 18px;
    }
  }
`;

const SocialContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 2rem;
  padding: 1rem 0;
  justify-items: center;
  img {
    width: 25px;
    height: auto;
  }

  @media screen and (min-width: 767px) {
    img {
      width: 40px;
      padding: 1rem;
    }
  }
`;

export default Footer;
