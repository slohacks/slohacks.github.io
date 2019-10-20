import React from 'react';
import styled from 'styled-components';

const schedule = {
  "Friday 1/10": [{
    event: "Attendee Check-in",
    location: "MAC Lobby",
    time: "4:00pm"
  }, {
    event: "Dinner",
    location: "MAC",
    time: "5:30pm"
  }, {
    event: "Opening Ceremony",
    location: "Spanos Theater",
    time: "6:00pm"
  }],
  "Saturday 1/11": [{
    event: "Breakfast",
    location: "MAC",
    time: "8:00am"
  }],
  "Sunday 1/12": [{
    event: "Breakfast",
    location: "MAC",
    time: "8:00am"
  }]
// Dinner MAC
// Opening Ceremony Spanos Theater
// Hacking Begins MAC Workshop 1 Phillips Hall Workshop 2 Phillips Hall Workshop 3 Phillips Hall Late Night Snack MAC
}

export const ScheduleSection = () => (
  <ScheduleSectionStyle>
    <Heading2>Schedule</Heading2>
    <Schedule>
      {Object.entries(schedule).map(([day, events]) => (
        <div>
          <Heading3>{day}</Heading3>
          {events.map(Event)}
        </div>
      ))}
    </Schedule>
  </ScheduleSectionStyle>
);

const Heading2 = styled.h2`
  font-size: 2em;
  font-weight: 900;
  margin-bottom: 1.5rem;
`;

const Heading3 = styled.h3`
  font-size: 1.43em;
  font-weight: 900;
  margin-bottom: 1rem;
`;

const Event = (({event, location, time}) => (
  <EventStyleWrapper>
    <div>
      <EventName>{event}</EventName>
      <EventTime>{time}</EventTime>
    </div>
    <div>
      <EventLocation>{location}</EventLocation>
    </div>
  </EventStyleWrapper>
));

const ScheduleSectionStyle = styled.section`
  display: flex;
  flex-direction: column;
`;

const Schedule = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`;

/*const Schedule = styled.div`
  display: flex;
  margin: -1rem;
  flex-wrap: wrap;

  & > * {
    padding: 1rem;
    flex: 1 10rem;

    display: flex;
    flex-direction: column;
  }
`;*/

const EventStyleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    display: flex;
    justify-content: space-between;
  }

  > * + * {
    margin-bottom: 0.5rem;
  }
`;

const EventName = styled.span`
  font-weight: 700;
`;

const EventTime = styled.span`
  font-weight: 700;
  opacity: 0.5;
`;

const EventLocation = styled.span`

`;