import styled from 'styled-components';

const SectionHeader = styled.h2`
  color: ${(props) => props.color};
  font-size: 2em;
  font-weight: 900;
  margin-bottom: 1.5rem;
`;

const TextHeader = styled.h3`
  font-size: 1.43em;
  font-weight: 900;
  margin-bottom: 1rem;
`;

export {
  SectionHeader,
  TextHeader,
};
