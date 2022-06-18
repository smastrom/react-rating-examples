import { useState } from 'react';

import { styled } from 'goober';
import { isMobile } from 'react-device-detect';

import { Main } from './Main';
import { Sidebar } from './Sidebar';

const Container = styled('div')`
  background-color: var(--background-color);
  padding: 15px 5px 15px 15px;
  height: calc(100vh - 30px);
  max-width: 1920px;
  width: 100%;
  min-height: 600px;
  max-height: 2160px; /* To do: remove paddings from total */
  margin: auto;

  display: flex;
  gap: 30px;

  @media (min-width: 768px) {
    padding: 30px 5px 30px 30px;
    height: calc(100vh - 60px);
  }

  @media (min-width: 1536px) {
    padding: 30px;
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
