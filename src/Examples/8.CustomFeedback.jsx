import { useState } from 'react';
import { Rating } from 'react-advanced-rating';

const getRating = (ratingValue) => {
  switch (ratingValue) {
    case 1:
      return 'Poor';
    case 2:
      return 'Nothing special';
    case 3:
      return 'Average';
    case 4:
      return 'Very good';
    case 5:
      return 'Excellent';
    default:
      return 'None';
  }
};

export const WithCustomFeedback = () => {
  const [ratingValue, setRatingValue] = useState(3);
  const [hoveredValue, setHoveredValue] = useState(0);

  return (
    <div
      style={{
        maxWidth: 200,
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
        onHoverChange={(currentHoveredValue) => setHoveredValue(currentHoveredValue)}
      />
      <div
        style={{
          width: 300,
          marginTop: '30px',
          textAlign: 'center',
        }}
      >
        <div>{`Selected: ${getRating(ratingValue)}`}</div>
        <div>{`Hovered: ${getRating(hoveredValue)}`}</div>
        <div>
          {`Selected + Hovered: ${getRating(hoveredValue > 0 ? hoveredValue : ratingValue)}`}
        </div>
      </div>
    </div>
  );
};

export const WithCustomFeedbackCode = `
const getRating = (ratingValue) => {
  switch (ratingValue) {
    case 1:
      return 'Poor';
    case 2:
      return 'Nothing special';
    case 3:
      return 'Average';
    case 4:
      return 'Very good';
    case 5:
      return 'Excellent';
    default:
      return 'None';
  }
};

const App = () => {
  const [ratingValue, setRatingValue] = useState(3);
  const [hoveredValue, setHoveredValue] = useState(0);

  return (
    <div>
      <div style={{ maxWidth: 200, width: '100%'}}>
        <Rating
          value={ratingValue}
          onChange={(selectedValue) => setRatingValue(selectedValue)}
          onHoverChange={(currentHoveredValue) => setHoveredValue(currentHoveredValue)}
        />
      </div>
      <div>
        <div>{\`Selected: \${getRating(ratingValue)}\`}</div>
        <div>{\`Hovered: \${getRating(hoveredValue)}\`}</div>
        <div>
          {\`Selected + Hovered: \${getRating(hoveredValue > 0 ? hoveredValue : ratingValue)}\`}
        </div>
      </div>
    </div>
  );
};`;
