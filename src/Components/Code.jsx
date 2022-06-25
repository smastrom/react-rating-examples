import { useState } from 'react';
import { styled } from 'goober';

const Wrapper = styled('div')`
  position: relative;
  overflow: hidden;
`;

const Container = styled('div')`
  max-height: 700px;
  min-height: 300px;
  overflow: auto;
  scroll-behavior: smooth;
  scrollbar-color: var(--scrollbar-color) var(--transparent-color);
  background: hsl(230, 1%, 98%);
  padding-right: 15px;
  position: relative;
  border: 2px solid var(--border-color);
  border-radius: 10px;

  &::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 6px solid hsl(230, 1%, 98%);
    background: var(--scrollbar-color);
  }

  &::-webkit-scrollbar-track {
    background: var(--transparent-color);s
  }
`;

const CopyButton = styled('button')`
  background-color: hsl(230, 1%, 98%);
  position: absolute;
  right: 10px;
  top: 10px;
  aspect-ratio: 1;
  padding: 0.2em 0.4em;
  border: 2px solid var(--transparent-color);
  background-color: var(--transparent-color);
  border-radius: 5px;
  z-index: 5;
  font-size: 0.875rem;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.05em;
  transition: stroke 200ms ease-out;
  stroke: var(--blue-primary-color);

  @media (hover: hover) {
    &:hover {
      stroke: var(--green-secondary-color);
    }
  }
`;

const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckMarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const Code = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (code) => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsCopied(false);
  };

  return (
    <Wrapper>
      {navigator.clipboard && (
        <CopyButton onClick={() => copyToClipboard(code)} aria-label="Copy code to clipboard">
          {isCopied ? <CheckMarkIcon /> : <CopyIcon />}
        </CopyButton>
      )}

      <Container>
        <pre>
          <code className="language-jsx">{code}</code>
        </pre>
      </Container>
    </Wrapper>
  );
};
