import { useState } from 'react';

import { styled } from 'goober';
import { isMobile } from 'react-device-detect';

import { Main } from './Main';
import { Sidebar } from './Sidebar';
import { examples } from '../Examples/List';
import { useHashLocation } from '../hooks/useHashLocation';

const Container = styled('div')`
  --padding: 15px;
  background-color: var(--background-color);
  padding: var(--padding) 7.5px var(--padding) var(--padding);
  height: calc(100vh - calc(var(--padding) * 2));
  max-width: 1920px;
  width: 100%;
  min-height: 600px;
  max-height: calc(2160px - calc(var(--padding) * 2));
  margin: auto;
  display: flex;
  gap: var(--padding);

  @media (min-width: 768px) {
    --padding: 20px;
    height: calc(100vh - var(var(--padding) * 2));
  }

  @media (min-width: 1536px) {
    --padding: 30px;
  }

  @media (min-width: 1920px) {
    padding: var(--padding) 15px var(--padding) var(--padding);
  }

  @media (min-width: 1921px) {
    padding: var(--padding) 0 var(--padding) var(--padding);
  }
`;

const getInitialIntersectionData = (location) => {
  if (isMobile) {
    return {};
  }

  console.log('Hello from "/", useState @ Layout.jsx');
  if (location === '/') {
    return {
      title: examples[0].title,
      id: examples[0].id,
    };
  }

  console.log('Hello from a section, useState @ Layout.jsx');
  const { id, title } = examples.find(({ id: intersectionId }) => intersectionId === location);
  return { id, title };
};

export const Layout = () => {
  const [location] = useHashLocation();

  const [intersectionData, setIntersectionData] = useState(() =>
    getInitialIntersectionData(location)
  );

  return (
    <Container>
      {!isMobile && <Sidebar intersectionData={intersectionData} />}
      <Main setIntersectionData={setIntersectionData} />
    </Container>
  );
};
