import { useState } from 'react';

import { Rating } from 'react-advanced-rating';

const dAttrContent = `M13.915,0.379l8.258,9.98c0,0,1.252,1.184-0.106,1.184c-1.363,0-4.653,0-4.653,0s0,0.801,0,2.025
c0,3.514,0,9.9,0,12.498c0,0,0.184,0.709-0.885,0.709c-1.072,0-5.783,0-6.55,0c-0.765,0-0.749-0.592-0.749-0.592
c0-2.531,0-9.133,0-12.527c0-1.102,0-1.816,0-1.816s-2.637,0-4.297,0c-1.654,0-0.408-1.24-0.408-1.24s7.025-9.325,8.001-10.305
C13.24-0.414,13.915,0.379,13.915,0.379z`;

const ArrowUp = <path d={dAttrContent} />;
const ArrowDown = <path transform="rotate(180 0 0)" d={dAttrContent} />;

const customStyles = {
  svgChildNodes: [ArrowUp, ArrowDown],
  boxBorderWidth: 2,
  activeFillColor: ['#16A34A', '#E11D48'],
  activeBoxBorderColor: ['#16A34A', '#E11D48'],
  inactiveFillColor: '#9CA3AF',
  inactiveBoxBorderColor: '#9CA3AF',
};

export const UpVoteDownVote = () => {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <div
        style={{
          maxWidth: 60,
          width: '100%',
        }}
      >
        <Rating
          value={ratingValue}
          onChange={(selectedValue) => setRatingValue(selectedValue)}
          itemStyles={customStyles}
          limit={2}
          highlightOnlySelected
          resetOnSecondClick
          radius="full"
          orientation="vertical"
          spaceBetween="medium"
          spaceInside="large"
          accessibleLabels={['Upvote', 'Downvote']}
          accessibleLabel="Upvote or downvote this post"
        />
      </div>
      <div>{ratingValue === 0 && 'Upvote / Downvote'}</div>
      <div>{ratingValue === 1 && 'Upvoted'}</div>
      <div>{ratingValue === 2 && 'Downvoted'}</div>
    </div>
  );
};

export const UpVoteDownVoteCode = `

const dAttrContent = \`M13.915,0.379l8.258,9.98c0,0,1.252,1.184-0.106,1.184c-1.363,0-4.653,0-4.653,0s0,0.801,0,2.025
c0,3.514,0,9.9,0,12.498c0,0,0.184,0.709-0.885,0.709c-1.072,0-5.783,0-6.55,0c-0.765,0-0.749-0.592-0.749-0.592
c0-2.531,0-9.133,0-12.527c0-1.102,0-1.816,0-1.816s-2.637,0-4.297,0c-1.654,0-0.408-1.24-0.408-1.24s7.025-9.325,8.001-10.305
C13.24-0.414,13.915,0.379,13.915,0.379z\`; // Source: https://www.svgrepo.com/svg/35304/up-arrow

const ArrowUp = <path d={dAttrContent} />;
const ArrowDown = <path transform="rotate(180 0 0)" d={dAttrContent} />;
  
const customStyles = {
  svgChildNodes: [ArrowUp, ArrowDown],
  boxBorderWidth: 2,
  activeFillColor: ['#16A34A', '#E11D48'],
  activeBoxBorderColor: ['#16A34A', '#E11D48'],
  inactiveFillColor: '#9CA3AF',
  inactiveBoxBorderColor: '#9CA3AF',
};

const App = () => {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div>
      <div style={{ maxWidth: 80, width: '100%' }}>
        <Rating
          value={ratingValue}
          onChange={(selectedValue) => setRatingValue(selectedValue)}
          itemStyles={customStyles}
          limit={2}
          highlightOnlySelected
          resetOnSecondClick
          radius="full"
          orientation="vertical"
          spaceBetween="medium"
          spaceInside="large"
          accessibleLabels={['Upvote', 'Downvote']}
          accessibleLabel="Upvote or downvote this post"
        />
      </div>
      <div>{ratingValue === 0 && 'Upvote / Downvote'}</div>
      <div>{ratingValue === 1 && 'Upvoted'}</div>
      <div>{ratingValue === 2 && 'Downvoted'}</div>
    </div>
  );
};`;
