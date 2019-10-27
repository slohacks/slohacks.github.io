import React from 'react';
import styled from 'styled-components';

const Tracks = () => (
  <TracksContainer>
    <h1>Tracks</h1>
    <TrackGridContainer>
      <TrackItem>
        <CircleItem />
        <h2>Finance</h2>
        <p>
          Ramirez began creating site-specific installations in 1994,
          combining drawings, paintings, objects, sculpture, music, dance,
          and furniture in dialogue with architectural space.
        </p>
      </TrackItem>
      <TrackItem>
        <CircleItem />
        <h2>Sports</h2>
        <p>
          Ramirez began creating site-specific installations in 1994,
          combining drawings, paintings, objects, sculpture, music, dance,
          and furniture in dialogue with architectural space.
        </p>
      </TrackItem>
      <TrackItem>
        <CircleItem />
        <h2>Blockchain</h2>
        <p>
          Ramirez began creating site-specific installations in 1994,
          combining drawings, paintings, objects, sculpture, music, dance,
          and furniture in dialogue with architectural space.
        </p>
      </TrackItem>
    </TrackGridContainer>
  </TracksContainer>
);

const TracksContainer = styled.div`
  margin: 0 auto;
  padding: 2rem;
  max-width: 1250px;

  h2 {
    margin: 1rem 0;
  }
`;

const TrackGridContainer = styled.div`
  display: grid;

  @media screen and (min-width: 767px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 5rem;
  }
`;

const TrackItem = styled.div`
  width: 100%;
  padding: 1rem;
`;

const CircleItem = styled.div`
  width: 100px;
  height: 100px;
  margin: 1rem 0;
  border-radius: 50%;
  background: #2A34B1;
`;

export default Tracks;
