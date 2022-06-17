/* eslint-disable no-restricted-globals */
import { useLayoutEffect, useRef, useState } from 'react';

import { styled } from 'goober';
import Prism from 'prismjs';
import { useDebounceEffect, useMount, useUnmount } from 'ahooks';
import { isMobile } from 'react-device-detect';

import { useHashLocation } from '../hooks/useHashLocation';
import { examples } from '../Examples/List';
import { Example } from './Example';

const Container = styled('main')`
  width: 100%;
  padding-right: 5px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-color: #d1d5db var(--transparent-color);

  &::-webkit-scrollbar {
    width: 8px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #d1d5db;
  }

  &::-webkit-scrollbar-track {
    background: var(--transparent-color);
  }

  @media (min-width: 768px) {
    padding-right: 15px;
  }
`;

export const Main = ({ setIntersectionId }) => {
  const sectionRefs = useRef([]);
  const observerRef = useRef(null);

  const [location] = useHashLocation();

  const [intersectionsMap, setIntersectionsMap] = useState(() => {
    if (!isMobile) {
      const map = new Map();
      examples.forEach(({ id }) => map.set(id, false));
      return map;
    }
    return {};
  });

  const [intersectionsObj, setIntersectionsObj] = useState(undefined);

  useLayoutEffect(() => {
    Prism.highlightAll();
  }, []);

  useMount(() => {
    if (!isMobile) {
      const intersectionCallback = (entries) => {
        entries.forEach((entry) => {
          setIntersectionsMap((prevMap) => prevMap.set(entry.target.id, entry.isIntersecting));
          setIntersectionsObj(Object.fromEntries(intersectionsMap));
        });
      };

      observerRef.current = new IntersectionObserver(intersectionCallback, {
        root: document.getElementById('examples'),
        threshold: [0.5, 0.75, 1],
        rootMargin: '0px 0px 0px 0px',
      });

      sectionRefs.current.forEach((sectionElement) => {
        observerRef.current.observe(sectionElement);
      });
    }
  });

  useUnmount(() => (!isMobile ? observerRef.current.disconnect() : {}));

  useDebounceEffect(
    () => {
      if (!isMobile && typeof intersectionsObj === 'object') {
        const findId =
          // eslint-disable-next-line no-unused-vars
          Object.entries && Object.entries(intersectionsObj).find(([_, value]) => value);
        if (findId) {
          const newSectionId = findId[0];
          setIntersectionId(newSectionId);

          if (location !== newSectionId) {
            history.replaceState(null, '', `#${newSectionId}`);
          }
        }
      }
    },
    [intersectionsObj],
    { wait: 100 }
  );

  return (
    <Container id="examples">
      {examples.map(({ id, title, code, jsx }, index) => (
        <Example
          key={id}
          id={id}
          // eslint-disable-next-line no-return-assign
          ref={(child) => (sectionRefs.current[index] = child)}
          title={title}
          code={code}
          jsx={jsx}
        />
      ))}
    </Container>
  );
};
