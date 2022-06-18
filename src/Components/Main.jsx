/* eslint-disable no-restricted-globals */
import { useLayoutEffect, useRef, useState } from 'react';

import { styled } from 'goober';
import Prism from 'prismjs';
import { useDebounceEffect, useMount, useUnmount } from 'ahooks';
import { isMobile } from 'react-device-detect';

import { useHashLocation } from '../hooks/useHashLocation';
import { examples } from '../Examples/List';
import { Example } from './Example';
import { Logo } from './Logo';
import { GitHubIcon, githubLinkProps } from './GitHubIcon';

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

const sharedShadowStyles = `
  overflow: hidden;
  position: fixed;
  content: '';
  width: 100%;
  z-index: 5;
  display: block;
  height: 60px;
`;

const HeaderContent = styled('div')`
  padding: 20px 10px 10px 10px;
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
        width: 200px;
      }
    }
  }

  & a svg {
    @media (min-width: 325px) {
      &:last-of-type {
        width: 40px;
      }
    }
  }
`;

const Container = styled('main')`
  width: 100%;
  padding-right: 5px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-color: #d1d5db var(--transparent-color);
  position: relative;

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

  &::after {
    ${sharedShadowStyles};
    bottom: 15px;
    background: linear-gradient(to bottom, var(--transparent-color) 25%, #f3f4f6 75%);

    @media (min-width: 768px) {
      bottom: 30px;
    }
  }
`;

export const Main = ({ setIntersectionId }) => {
  const isInitialMount = useRef(true);
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
      if (isInitialMount.current) {
        isInitialMount.current = false;
        return;
      }
      if (!isMobile && typeof intersectionsObj === 'object') {
        const findId =
          Object.entries &&
          // eslint-disable-next-line no-unused-vars
          Object.entries(intersectionsObj).find(([_, isIntersecting]) => isIntersecting);
        if (findId) {
          const newSectionId = findId[0];

          if (location !== newSectionId) {
            history.replaceState(null, '', `#${newSectionId}`);
          }

          setIntersectionId(newSectionId);
        }
      }
    },
    [intersectionsObj],
    { wait: 120 }
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
      <Footer>
        <small>MIT Licensed</small>
        <small>© 2022 Simone Mastromattei</small>
      </Footer>
    </Container>
  );
};
