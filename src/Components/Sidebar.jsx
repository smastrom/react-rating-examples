import { useState } from 'react';

import { useMount, useUpdateEffect } from 'ahooks';
import { styled } from 'goober';

import { useHashLocation } from '../hooks/useHashLocation';
import { examples } from '../Examples/List';
import { Logo } from './Logo';
import { GitHubIcon, githubLinkProps } from './GitHubIcon';

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
  position: relative;

  &::after {
    position: sticky;
    content: '';
    width: 100%;
    z-index: 10;
    display: block;
    height: 60px;
    bottom: 0;
    background: linear-gradient(to bottom, var(--transparent-color) 25%, white 75%);
  }

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
  position: relative;
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

  &:last-of-type {
    z-index: 15;
  }
`;

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
        <a {...githubLinkProps}>
          <GitHubIcon />
        </a>
      </Header>
      <Nav>
        <NavList>
          {examples.map(({ id, title }) => (
            <li key={id}>
              <NavLink
                href={`#${id}`}
                isIntersecting={intersectionId === id}
                aria-current={intersectionId === id}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </NavList>
      </Nav>
      <Footer>
        <small>MIT Licensed</small>
        <small>© 2022 Simone Mastromattei</small>
      </Footer>
    </Container>
  );
};
