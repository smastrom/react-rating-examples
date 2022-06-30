import { useState } from 'react';

import { Star, Rating } from 'react-advanced-rating';

const customStyles = {
  itemShapes: Star,
  activeBoxColor: ['#da1600', '#db711a', '#dcb000', '#61bb00', '#009664'],
  activeFillColor: 'white',
  inactiveBoxColor: '#C7C7C7',
  inactiveFillColor: 'white',
};

const CUSTOM_GROUP_LABEL = 'Rate GitHub Plaza Hotel';
const CUSTOM_ITEM_LABELS = ['Bad', 'Poor', 'Average', 'Very Good', 'Excellent'];

export const CustomInvisibleLabels = () => {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div
      style={{
        maxWidth: 300,
        width: '100%',
      }}
    >
      <Rating
        value={ratingValue}
        itemStyles={customStyles}
        onChange={(selectedValue) => setRatingValue(selectedValue)}
        spaceBetween="small"
        spaceInside="medium"
        transition="none"
        invisibleLabel={CUSTOM_GROUP_LABEL}
        invisibleItemLabels={CUSTOM_ITEM_LABELS}
      />
    </div>
  );
};

export const CustomInvisibleLabelsCode = `
const CUSTOM_GROUP_LABEL = 'Rate GitHub Plaza Hotel';
const CUSTOM_LABELS = ['Bad', 'Poor', 'Average', 'Very Good', 'Excellent'];

const App = () => {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div style={{ maxWidth: 300, width: '100%' }}>
      <Rating
        value={ratingValue}
        itemStyles={customStyles}
        onChange={(selectedValue) => setRatingValue(selectedValue)}
        invisibleLabel={CUSTOM_GROUP_LABEL}
        invisibleItemLabels={CUSTOM_ITEM_LABELS}
      />
    </div>
  );
};`;
