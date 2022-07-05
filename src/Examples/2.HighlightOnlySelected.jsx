import { useState } from 'react';

import { Rating } from '@smastrom/react-rating';

export const HighlightOnlySelected = () => {
  const [ratingValue, setRatingValue] = useState(3);

  return (
    <Rating
      style={{
        maxWidth: 180,
      }}
      value={ratingValue}
      onChange={(selectedValue) => setRatingValue(selectedValue)}
      highlightOnlySelected
    />
  );
};

export const HighlightOnlySelectedCode = `
const App = () => {
  const [ratingValue, setRatingValue] = useState(3);

  return (
    <Rating
      style={{ maxWidth: 180 }}
      value={ratingValue}
      onChange={(selectedValue) => setRatingValue(selectedValue)}
      highlightOnlySelected
    />
  );
};`;
