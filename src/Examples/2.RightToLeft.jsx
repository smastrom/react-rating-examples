import { useState } from 'react';

import { Star, Rating } from 'react-advanced-rating';

const customStyles = {
  itemShapes: Star,
  activeBoxColor: ['#da1600', '#db711a', '#dcb000', '#61bb00', '#009664'],
  inactiveBoxColor: '#C7C7C7',
  inactiveFillColor: 'white',
};

export const RightToLeft = () => {
  const [ratingValue, setRatingValue] = useState(2);

  return (
    <div
      dir="rtl"
      style={{
        maxWidth: 200,
        width: '100%',
        display: 'grid',
        gap: 20,
      }}
    >
      <div>
        <Rating
          value={ratingValue}
          onChange={(selectedValue) => setRatingValue(selectedValue)}
          transition="zoom"
        />
        {`Selected value: ${ratingValue}`}
      </div>
      <Rating readOnly value={2.42} />
      <Rating readOnly value={3.52} halfFillMode="box" itemStyles={customStyles} />
    </div>
  );
};

export const RightToLeftCode = `
const App = () => {
  const [ratingValue, setRatingValue] = useState(2);

  return (
    <div dir="rtl" style={{ maxWidth: 200, width: '100%' }}>
      <div>
        <Rating
          value={ratingValue}
          onChange={(selectedValue) => setRatingValue(selectedValue)}
          transition="zoom"
        />
        {\`Selected value: \${ratingValue}\`}
      </div>
      <Rating readOnly value={2.42} />
      <Rating readOnly value={3.52} halfFillMode="box" itemStyles={customStyles} />
    </div>
  );
};`;
