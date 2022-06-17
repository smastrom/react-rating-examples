import { useState } from 'react';

import { styled } from 'goober';
import { isMobile } from 'react-device-detect';

import { Main } from './Main';
import { Sidebar } from './Sidebar';

const Container = styled('div')`
  --padding: 30px;
  background-color: var(--background-color);
  padding: 15px 5px 15px 15px;
  max-width: 1536px;
  width: auto;
  min-height: 600px;
  max-height: 2000px;
  margin: auto;
  height: calc(100vh - calc(var(--padding) * 2));
  display: flex;
  gap: 30px;

  @media (min-width: 768px) {
    padding: 30px 5px 30px 30px;
  }

  @media (min-width: 1536px) {
    padding: var(--padding);
  }
`;

export const Layout = () => {
  const [intersectionId, setIntersectionId] = useState('');

  return (
    <Container>
      {!isMobile && (
        <Sidebar intersectionId={intersectionId} setIntersectionId={setIntersectionId} />
      )}
      <Main setIntersectionId={setIntersectionId} />
    </Container>
  );
};
