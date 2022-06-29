import { useState } from 'react';

import { Rating } from 'react-advanced-rating';

export const RightToLeft = () => {
  const [ratingValue, setRatingValue] = useState(1);

  return (
    <div
      dir="rtl"
      style={{
        maxWidth: 200,
        width: '100%',
      }}
    >
      <Rating
        value={ratingValue}
        onChange={(selectedValue) => setRatingValue(selectedValue)}
        transition="zoom"
      />
      <div>{`Selected value: ${ratingValue}`}</div>
    </div>
  );
};

export const RightToLeftCode = `
const App = () => {
  const [ratingValue, setRatingValue] = useState(1);

  return (
    <div dir="rtl" style={{ maxWidth: 200, width: '100%' }}>
      <Rating
        value={ratingValue}
        onChange={(selectedValue) => setRatingValue(selectedValue)}
        transition="zoom"
      />
      <div>{\`Selected value: \${ratingValue}\`}</div>
    </div>
  );
};`;
