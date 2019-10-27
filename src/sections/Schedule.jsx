import React from 'react';
import styled from 'styled-components';

import { SectionHeader, TextHeader } from '../styled/headings';

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
  }, {
    event: "Hacking Begins",
    location: "MAC",
    time: "7:30pm"
  }, {
    event: "Workshop 1",
    location: "Phillips Hall",
    time: "8:30pm"
  }, {
    event: "Workshop 2",
    location: "Phillips Hall",
    time: "9:30pm"
  }, {
    event: "Workshop 3",
    location: "Phillips Hall",
    time: "10:30pm"
  }, {
    event: "Late Night Snack",
    location: "MAC",
    time: "12:00am"
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
}

const Schedule = () => (
  <ScheduleSectionStyle>
    <SectionHeader>Schedule</SectionHeader>
    <ScheduleSection>
      {Object.entries(schedule).map(([day, events]) => (
        <ScheduleDay day={day} events={events} />
      ))}
    </ScheduleSection>
  </ScheduleSectionStyle>
);

const ScheduleDay = ({day, events}) => (
  <div>
    <TextHeader>{day}</TextHeader>
    {events.map(Event)}
  </div>
);

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
  padding: 2rem;
  max-width: 1250px;
  margin: 0 auto;
`;

const ScheduleSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 5rem;
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
  padding: .5rem 0;

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

export default Schedule;
