import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { styled } from 'goober';
import Prism from 'prismjs';
import { useDebounceEffect } from 'ahooks';
import orderBy from 'lodash.orderby';
import round from 'lodash.round';
import { isFirefox, isMobile } from 'react-device-detect';

import { examples } from '../Examples/List';
import { Example } from './Example';
import { Logo } from './Logo';
import { GitHubIcon, githubLinkProps } from './GitHubIcon';

const getThresholds = (length, maxNumber) =>
  Array.from({ length }, (_, index) => ((index * maxNumber) / (length - 1)).toFixed(2));

const thresholds = getThresholds(25, 1);

const MobileHeader = styled('header')`
  position: sticky;
  top: 0;
  z-index: 20;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    display: none;
  }

  & svg {
    width: auto;
    height: auto;

    @media (min-width: 325px) {
      &:first-of-type {
        width: 180px;
      }
    }
  }

  & a svg {
    @media (min-width: 325px) {
      &:last-of-type {
        width: 35px;
      }
    }
  }
`;

const HeaderContent = styled('div')`
  padding: 10px;
  background: var(--background-color);
  display: flex;
  justify-content: space-between;
`;

const HeaderGradient = styled('span')`
  height: 30px;
  display: flex;
  background: linear-gradient(
    to top,
    var(--transparent-color) 25%,
    var(--background-color) 75%
  );
`;

const Container = styled('main')`
  width: 100%;
  padding-right: 7.5px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-color: var(--scrollbar-color) var(--transparent-color);
  position: relative;

  &::-webkit-scrollbar {
    width: 8px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: var(--scrollbar-color);
  }

  &::-webkit-scrollbar-track {
    background: var(--transparent-color);
  }

  @media (min-width: 768px) {
    padding-right: 15px;
  }

  &::after {
    overflow: hidden;
    position: fixed;
    content: '';
    width: 100%;
    z-index: 5;
    display: block;
    height: 60px;
    bottom: 15px;
    background: linear-gradient(to bottom, var(--transparent-color) 25%, #f3f4f6 75%);

    @media (min-width: 768px) {
      bottom: 20px;
    }
  }
`;

const Footer = styled('footer')`
  display: flex;
  justify-content: space-between;
  z-index: 10;
  position: relative;
  padding: 30px 10px 10px 10px;
  flex-wrap: wrap;
  gap: 10px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const debounceDelay = isFirefox ? 180 : 100;

export const Main = ({ setIntersectionData }) => {
  const isInitialMount = useRef(true);

  const sectionRefs = useRef([]);
  const observerRef = useRef(null);

  const [intersectionsMap, setIntersectionsMap] = useState(() => {
    if (!isMobile) {
      const map = new Map();
      examples.forEach(({ id }, index) =>
        map.set(id, {
          index,
          id,
          isIntersecting: false,
          intersectionRatio: 0,
        })
      );
      return map;
    }
  });

  const [intersectionsArr, setIntersectionArr] = useState(undefined);

  useLayoutEffect(() => {
    Prism.highlightAll();
  }, []);

  useEffect(() => {
    if (!isMobile) {
      console.log('Hello from Intersection Observer @ Main.jsx');

      const intersectionCallback = (entries) => {
        entries.forEach(({ target: { id }, isIntersecting, intersectionRatio }) => {
          setIntersectionsMap((prevMap) =>
            prevMap.set(id, {
              index: prevMap.get(id).index,
              id,
              isIntersecting,
              intersectionRatio: round(intersectionRatio, 1),
            })
          );

          const sortedArr = orderBy(
            Array.from(intersectionsMap.values()),
            ['isIntersecting', 'intersectionRatio', 'index'],
            ['desc', 'desc', 'asc']
          );
          setIntersectionArr(sortedArr);
        });
      };

      observerRef.current = new IntersectionObserver(intersectionCallback, {
        root: document.getElementById('examples'),
        threshold: thresholds,
      });

      sectionRefs.current.forEach((sectionElement) => {
        observerRef.current.observe(sectionElement);
      });

      return () => {
        observerRef.current.disconnect();
      };
    }
  }, [intersectionsMap]);

  useDebounceEffect(
    () => {
      if (!isMobile) {
        if (isInitialMount.current) {
          console.log('Hello from debounceEffect @ Main.jsx, initial mount, skipping effect');
          isInitialMount.current = false;
          return;
        }

        if (typeof intersectionsArr !== 'undefined') {
          console.log('Hello from debounceEffect @ Main.jsx, setting new id');
          const [{ id: mostVisibileId, index }] = intersectionsArr;
          if (mostVisibileId) {
            setIntersectionData({ id: mostVisibileId, title: examples[index].title });

            if (mostVisibileId !== examples[0].id) {
              console.log('Hello from replaceState @ Main.jsx');
              // eslint-disable-next-line no-restricted-globals
              history.replaceState(null, '', `#${mostVisibileId}`);
            }
          }
        }
      }
    },
    [intersectionsArr],
    { wait: debounceDelay }
  );

  return (
    <Container id="examples">
      <MobileHeader>
        <HeaderContent>
          <Logo />
          <a {...githubLinkProps}>
            <GitHubIcon />
          </a>
        </HeaderContent>
        <HeaderGradient />
      </MobileHeader>
      {examples.map(({ id, title, code, jsx, hasCSS, cssCode }, index) => (
        <Example
          key={id}
          id={id}
          // eslint-disable-next-line no-return-assign
          ref={(child) => (sectionRefs.current[index] = child)}
          title={title}
          code={code}
          jsx={jsx}
          hasCSS={hasCSS}
          cssCode={cssCode}
        />
      ))}
      <Footer>
        <small>MIT Licensed</small>
        <small>© 2022 Simone Mastromattei</small>
      </Footer>
    </Container>
  );
};
