import React from 'react';
import styled from 'styled-components';

import Statistics from '../components/Statistics';

import { event } from '../images';

const Hackathon = () => (
  <HackathonContainer>
    <HackathonContentContainer>
      <HackathonImageContainer>
        <HackathonImage src={event} alt="SLO Hacks Hackathon" />
      </HackathonImageContainer>
      <HackathonStatistics>
        <p>
          SLO Hacks is a 36-hour hackathon that
          brings over 300 students to
          Cal Poly to bring their ideas into reality. Over the course of the event,
          you’ll receive mentorship, attend workshops,
          and work with passionate hackers to build projects that contribute to social good.
        </p>
        <Statistics />
      </HackathonStatistics>
    </HackathonContentContainer>
  </HackathonContainer>
);

const HackathonContainer = styled.div`
  margin: 0 auto;
  padding: 2rem;
  max-width: 1250px;
`;

const HackathonContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media screen and (min-width: 767px) {
    flex-direction: row;

    > div {
      width: 50%;
    }
  }
`;

const HackathonStatistics = styled.div`
  margin: 2rem 0;

  > p {
    margin: 1rem 0;
  }

  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0;
    padding-left: 2rem;

    > p {
      margin: 0;
    }
  }
`;

const HackathonImageContainer = styled.div`
  text-align: center;

  @media screen and (min-width: 767px) {
    text-align: left;
  }
`;

const HackathonImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
`;

export default Hackathon;
