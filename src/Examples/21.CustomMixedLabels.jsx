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
const CUSTOM_GROUP_LABEL_ID = 'group_label';

const CUSTOM_ITEM_LABELS = ['Bad', 'Poor', 'Average', 'Very Good', 'Excellent'];

export const CustomMixesLabels = () => {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div
      role="group"
      style={{
        textAlign: 'center',
        maxWidth: 400,
        width: '100%',
      }}
    >
      <h2 id={CUSTOM_GROUP_LABEL_ID} style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
        {CUSTOM_GROUP_LABEL}
      </h2>
      <Rating
        value={ratingValue}
        itemStyles={customStyles}
        onChange={(selectedValue) => setRatingValue(selectedValue)}
        visibleLabelId={CUSTOM_GROUP_LABEL_ID}
        invisibleItemLabels={CUSTOM_ITEM_LABELS}
        spaceBetween="small"
        spaceInside="medium"
      />
    </div>
  );
};

export const CustomMixesLabelsCode = `

const CUSTOM_GROUP_LABEL = 'Rate GitHub Plaza Hotel';
const CUSTOM_GROUP_LABEL_ID = 'group_label';

const CUSTOM_ITEM_LABELS = ['Bad', 'Poor', 'Average', 'Very Good', 'Excellent'];

const App = () => {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div role="group" style={{ maxWidth: 400, width: 100% }}>
      <h2 id={CUSTOM_GROUP_LABEL_ID}>{CUSTOM_GROUP_LABEL}</h2>
      <Rating
        value={ratingValue}
        itemStyles={customStyles}
        onChange={(selectedValue) => setRatingValue(selectedValue)}
        visibleLabelId={CUSTOM_GROUP_LABEL_ID}
        invisibleItemLabels={CUSTOM_ITEM_LABELS}
        spaceBetween="small"
        spaceInside="medium"
      />
    </div>
  );
};
`;
