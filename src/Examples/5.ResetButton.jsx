import { useState } from 'react';

import { Rating } from '@smastrom/react-rating';

export const ResetButton = () => {
  const [ratingValue, setRatingValue] = useState(3);

  return (
    <div
      style={{
        maxWidth: 180,
        width: '100%',
        display: 'flex',
        gap: '20px',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Rating
        value={ratingValue}
        onChange={(selectedValue) => setRatingValue(selectedValue)}
        spaceBetween="none"
      />
      <button
        type="button"
        onClick={() => setRatingValue(0)}
        style={{
          background: '#EF4444',
          color: 'white',
          border: 'none',
          padding: '0.2em 0.4em',
          borderRadius: '5px',
          width: 'max-content',
        }}
      >
        Reset
      </button>
    </div>
  );
};

export const ResetButtonCode = `
const App = () => {
  const [ratingValue, setRatingValue] = useState(3);

  return (
    <div style={{ maxWidth: 180, width: '100%' }}>
      <Rating
        value={ratingValue}
        onChange={(selectedValue) => setRatingValue(selectedValue)}
      />
      <button type="button" onClick={() => setRatingValue(0)}>
        Reset
      </button>
    </div>
  );
};`;
