import React from 'react';
import styled from 'styled-components';

const Statistics = () => (
  <StatisticsContainer>
    <div>
      <h1>350</h1>
      <p>Attendees</p>
    </div>
    <div>
      <h1>85%</h1>
      <p>Projects demoed</p>
    </div>
    <div>
      <h1>36</h1>
      <p>Hours</p>
    </div>
    <div>
      <h1>60</h1>
      <p>Projects</p>
    </div>
  </StatisticsContainer>
);

const StatisticsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  h1 {
    font-size: 45px;
    font-weight: bold;
  }
`;

export default Statistics;
