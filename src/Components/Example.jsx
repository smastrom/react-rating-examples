import { forwardRef } from 'react';
import { styled } from 'goober';

import { Code } from './Code';

const Container = styled('section', forwardRef)`
  background-color: white;
  margin-bottom: 30px;
  border-radius: 20px;
  border: 2px solid var(--border-color);
  padding: 15px;
  display: flex;
  gap: 40px;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled('h1')`
  font-size: 1.125rem;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 1.375rem;
  }
`;

const Content = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 40px;
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
    margin-top: calc(-1em - 40px - 20px);
    grid-row: auto;
  }
`;

export const Example = forwardRef(({ id, title, code, jsx }, ref) => (
  <Container id={id} ref={ref}>
    <Title>{title}</Title>
    <Content>
      <Code code={code} />
      <JSXContainer>{jsx}</JSXContainer>
    </Content>
  </Container>
));
