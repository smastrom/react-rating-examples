import { useState } from 'react';
import { Rating } from 'react-advanced-rating';

export const MinimalConfiguration = () => {
  const [width, setWidth] = useState(200);
  const [ratingValue, setRatingValue] = useState(3);

  return (
    <div
      style={{
        maxWidth: `${width}px`,
        width: '100%',
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Rating
        value={ratingValue}
        onChange={(selectedValue) => setRatingValue(selectedValue)}
      />
      <Rating readOnly value={3} />

      <div style={{ width: 150, marginTop: '30px', textAlign: 'center' }}>
        Container size
        <input
          style={{ width: 150 }}
          type="range"
          min="200"
          max="500"
          step="1"
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>
    </div>
  );
};

export const MinimalConfigurationCode = `
const App = () => {
  const [ratingValue, setRatingValue] = useState(3);

  return (
    <div style={{ maxWidth: 200, width: "100%" }}>
      <Rating
        value={ratingValue}
        onChange={(selectedValue) => setRatingValue(selectedValue)}
      />
      <Rating readOnly value={3} />
    </div>
  )
};`;
