import { forwardRef } from 'react';
import { styled } from 'goober';

import { Code } from './Code';

const Container = styled('section', forwardRef)`
  --padding: 15px;
  background-color: white;
  margin-bottom: var(--padding);
  border-radius: 20px;
  border: 2px solid var(--border-color);
  padding: var(--padding);
  display: flex;
  gap: 40px;
  position: relative;
  flex-direction: column;

  @media (min-width: 1920px) {
    --padding: 30px;
  }

  &:last-of-type {
    z-index: 10;
    margin-bottom: 0;
  }
`;

const Title = styled('h1')`
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.375rem;
    text-align: inherit;
  }
`;

const Content = styled('div')`
  --gap: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: var(--gap);
  align-items: center;

  @media (min-width: 1200px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
`;

const JSXContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: 1;

  @media (min-width: 1200px) {
    margin-top: calc(-1em - var(--gap) - var(--padding));
    grid-row: auto;
  }

  & button {
    transition: opacity 200ms ease-out;

    @media (hover: hover) {
      &:hover {
        opacity: 0.75;
      }
    }
  }
`;

const DoubleCodeContainer = styled('div')`
  display: grid;
  gap: var(--padding);
`;

export const Example = forwardRef(({ id, title, code, jsx, hasCSS, cssCode }, ref) => (
  <Container id={id} ref={ref}>
    <Title>{title}</Title>
    <Content>
      {hasCSS ? (
        <DoubleCodeContainer>
          <Code isCSS code={cssCode} />
          <Code code={code} />
        </DoubleCodeContainer>
      ) : (
        <Code code={code} />
      )}
      <JSXContainer>{jsx}</JSXContainer>
    </Content>
  </Container>
));
