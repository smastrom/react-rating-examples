import { useState } from 'react';

import { Rating } from '@smastrom/react-rating';

export const ResetOnSecondClick = () => {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <Rating
      style={{
        maxWidth: 180,
      }}
      value={ratingValue}
      onChange={(selectedValue) => setRatingValue(selectedValue)}
      resetOnSecondClick
    />
  );
};

export const ResetOnSecondClickCode = `
const App = () => {
  const [ratingValue, setRatingValue] = useState(0);
  
  // Select an item and click again on it
  
  return (
    <Rating
      style={{ maxWidth: 180 }}
      value={ratingValue}
      onChange={(selectedValue) => setRatingValue(selectedValue)}
      resetOnSecondClick
    />
  );
};`;
