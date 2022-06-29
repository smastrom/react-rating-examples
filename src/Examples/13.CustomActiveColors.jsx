import { useState } from 'react';

import { Rating } from 'react-advanced-rating';

const StarDrawing = (
  <path d="M62 25.154H39.082L32 3l-7.082 22.154H2l18.541 13.693L13.459 61L32 47.309L50.541 61l-7.082-22.152L62 25.154z" />
);

const customStyles = {
  svgChildNodes: StarDrawing,
  boxBorderWidth: 3,

  activeFillColor: ['#FEE2E2', '#FFEDD5', '#FEF9C3', '#ECFCCB', '#D1FAE5'],
  activeBoxColor: ['#da1600', '#db711a', '#dcb000', '#61bb00', '#009664'],
  activeBoxBorderColor: ['#c41400', '#d05e00', '#cca300', '#498d00', '#00724c'],

  inactiveFillColor: 'white',
  inactiveBoxColor: '#dddddd',
  inactiveBoxBorderColor: '#a8a8a8',
};

export const CustomActiveColors = () => {
  const [ratingValue, setRatingValue] = useState(4);

  return (
    <div
      style={{
        maxWidth: 500,
        width: '100%',
      }}
    >
      <Rating
        value={ratingValue}
        onChange={(selectedValue) => setRatingValue(selectedValue)}
        itemStyles={customStyles}
        transition="zoom"
        radius="large"
        spaceBetween="small"
        spaceInside="large"
      />
    </div>
  );
};

export const CustomActiveColorsCode = `
const Star = (
  <path d="M62 25.154H39.082L32 3l-7.082 22.154H2l18.541 13.693L13.459 61L32 47.309L50.541 61l-7.082-22.152L62 25.154z" />
); // Source: https://www.svgrepo.com/svg/353297/star
  
const customStyles = {
  svgChildNodes: Star,
  boxBorderWidth: 2,

  activeFillColor: ['#FEE2E2', '#FFEDD5', '#FEF9C3', '#ECFCCB', '#D1FAE5'],
  activeBoxColor: ['#da1600', '#db711a', '#dcb000', '#61bb00', '#009664'],
  activeBoxBorderColor: ['#c41400', '#d05e00', '#cca300', '#498d00', '#00724c'],

  inactiveFillColor: 'white',
  inactiveBoxColor: '#dddddd',
  inactiveBoxBorderColor: '#a8a8a8',
};

const App = () => {
  const [ratingValue, setRatingValue] = useState(4);

  return (
    <div style={{ maxWidth: 500, width: '100%' }}>
      <Rating
        value={ratingValue}
        onChange={(selectedValue) => setRatingValue(selectedValue)}
        itemStyles={customStyles}
        transition="zoom"
        radius="large"
        spaceBetween="small"
        spaceInside="large"
      />
    </div>
  );
};`;
