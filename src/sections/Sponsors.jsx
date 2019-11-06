import React from 'react';
import styled from 'styled-components';

import { SectionHeader } from '../styled/headings';
import {
  Hathway,
  Futek,
  CalPoly,
  Google,
} from '../images/logos';

const imgData = [
  {
    data: Hathway,
    key: 'Hathway',
  },
  {
    data: Futek,
    key: 'Futek',
  },
  {
    data: CalPoly,
    key: 'Calpoly',
  },
  {
    data: Google,
    key: 'Google',
  },
];

const Sponsors = () => (
  <SponsorsContainer>
    <SectionHeader>
      Sponsors
    </SectionHeader>
    <SponsorsGridContainer>
      {
        imgData.map(({ data, key }) => (
          <ImageContainer key={key}>
            <LogoImage src={data} />
          </ImageContainer>
        ))
      }
    </SponsorsGridContainer>
  </SponsorsContainer>
);

const SponsorsContainer = styled.div`
  max-width: 1250px;
  padding: 2rem;
  margin: 0 auto;
`;

const SponsorsGridContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  padding: 2rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LogoImage = styled.img`
  height: 60px;
  width: auto;
`;

export default Sponsors;
