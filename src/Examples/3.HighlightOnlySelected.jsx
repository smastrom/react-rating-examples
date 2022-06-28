import { useState } from 'react';
import { Rating } from 'react-advanced-rating';

export const HighlightOnlySelected = () => {
  const [ratingValue, setRatingValue] = useState(3);

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
        highlightOnlySelected
      />
    </div>
  );
};

export const HighlightOnlySelectedCode = `
const App = () => {
  const [ratingValue, setRatingValue] = useState(3);

  return (
    <div style={{ maxWidth: 200, width: '100%'}}>
      <Rating
        value={ratingValue}
        onChange={(selectedValue) => setRatingValue(selectedValue)}
        highlightOnlySelected
      />
    </div>
  );
};`;
