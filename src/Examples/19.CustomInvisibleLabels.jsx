import { useState } from 'react';

import { Star, Rating } from '@smastrom/react-rating';

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
    <Rating
      style={{
        maxWidth: 200,
      }}
      value={ratingValue}
      itemStyles={customStyles}
      onChange={(selectedValue) => setRatingValue(selectedValue)}
      invisibleLabel={CUSTOM_GROUP_LABEL}
      invisibleItemLabels={CUSTOM_ITEM_LABELS}
      spaceBetween="small"
      spaceInside="medium"
      transition="none"
    />
  );
};

export const CustomInvisibleLabelsCode = `
const CUSTOM_GROUP_LABEL = 'Rate GitHub Plaza Hotel';
const CUSTOM_LABELS = ['Bad', 'Poor', 'Average', 'Very Good', 'Excellent'];

const App = () => {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <Rating
      style={{ maxWidth: 200 }}
      value={ratingValue}
      itemStyles={customStyles}
      onChange={(selectedValue) => setRatingValue(selectedValue)}
      invisibleLabel={CUSTOM_GROUP_LABEL}
      invisibleItemLabels={CUSTOM_ITEM_LABELS}
      spaceBetween="small"
      spaceInside="medium"
      transition="none"
    />
  );
};`;
