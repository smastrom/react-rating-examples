import { useState } from 'react';

import { useMount, useUpdateEffect } from 'ahooks';
import { styled } from 'goober';

import { useHashLocation } from '../hooks/useHashLocation';
import { examples } from '../Examples/List';
import { Logo } from './Logo';

const Container = styled('aside')`
  border-radius: 20px;
  background-color: white;
  border: 2px solid var(--border-color);
  height: calc(100% - 40px);
  gap: 15px;
  width: 350px;
  flex-direction: column;
  justify-content: space-between;
  display: none;
  height: 100%;

  @media (min-width: 1536px) {
    gap: 60px:
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Nav = styled('nav')`
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-color: #d1d5db var(--transparent-color);

  &::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 6px solid white;
    background: #d1d5db;
  }

  &::-webkit-scrollbar-track {
    background: var(--transparent-color);s
  }
`;

const NavList = styled('ul')`
  display: grid;
  overflow-y: auto;
`;

const NavLink = styled('a')`
  white-space: break-spaces;
  padding: 10px 20px;
  display: flex;
  line-height: 1.25;
  transition: color 200ms ease-out, border-color 200ms ease-out;
  font-size: 1rem;
  font-weight: 400;
  color: ${({ isIntersecting }) => (isIntersecting ? 'var(--blue-primary-color)' : '#1F2937')};
  border-left: 5px solid
    ${({ isIntersecting }) => (isIntersecting ? 'var(--blue-primary-color)' : 'white')};
  pointer-events: ${({ isIntersecting }) => (isIntersecting ? 'none' : 'all')};

  &:hover {
    color: var(--blue-primary-color);
  }
`;

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const Header = styled('div')`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;

  & a {
    display: flex;

    & svg {
      transition: fill 200ms ease-out;
      fill: black;
      width: 30px;
      height: 30px;
    }

    @media (hover: hover) {
      &:hover {
        & svg {
          fill: var(--blue-primary-color);
        }
      }
    }
  }
`;

const Footer = styled('div')`
  padding: 20px;
  font-size: 0.825rem;
  display: flex;
  flex-direction: column;
`;

export const Sidebar = ({ intersectionId, setIntersectionId }) => {
  const [location] = useHashLocation();
  const [prevIntersectionId, setPrevIntersectionId] = useState('');

  useMount(() => setIntersectionId(location === '/' ? examples[0].id : location));

  useUpdateEffect(() => {
    if (prevIntersectionId.length > 1 && location === '/') {
      const firstElement = document.getElementById(examples[0].id);
      return firstElement.scrollIntoView({ behavior: 'smooth' });
    }

    const targetElement = document.getElementById(location);

    if (targetElement) {
      console.log('I am triggering from update, Sidebar.jsx');
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setPrevIntersectionId(location);
    }
  }, [location, prevIntersectionId.length, setPrevIntersectionId]);

  return (
    <Container>
      <Header>
        <Logo />
        <a
          href="https://github.com/smastrom/react-advanced-rating"
          aria-label="Visit GitHub repository"
          rel="noreferrer"
          target="_blank"
        >
          <GitHubIcon />
        </a>
      </Header>
      <Nav>
        <NavList>
          {examples.map(({ id, title }) => (
            <li key={id}>
              <NavLink href={`#${id}`} isIntersecting={intersectionId === id}>
                {title}
              </NavLink>
            </li>
          ))}
        </NavList>
      </Nav>
      <Footer>
        MIT Licensed
        <span>© 2022 Simone Mastromattei</span>
      </Footer>
    </Container>
  );
};
