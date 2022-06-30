import { useState } from 'react';

import { Rating } from 'react-advanced-rating';

export const ResetOnSecondClick = () => {
  const [ratingValue, setRatingValue] = useState(0);

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
  
  // Click again on the item just selected
  
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
