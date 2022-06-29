import { useState } from 'react';

import { Rating } from 'react-advanced-rating';

export const ResetOnSecondClick = () => {
  const [ratingValue, setRatingValue] = useState(0);

  // After clicking on an item, click again on it!

  return (
    <div
      style={{
        maxWidth: 200,
        width: '100%',
      }}
    >
      <Rating
        value={ratingValue}
        onChange={(selectedValue) => setRatingValue(selectedValue)}
        resetOnSecondClick
      />
    </div>
  );
};

export const ResetOnSecondClickCode = `
const App = () => {
  const [ratingValue, setRatingValue] = useState(0);
  
  // After clicking on an item, click again on it!
  
  return (
    <div style={{ maxWidth: 200, width: '100%' }}>
      <Rating
        value={ratingValue}
        onChange={(selectedValue) => setRatingValue(selectedValue)}
        resetOnSecondClick
      />
    </div>
  );
};`;
