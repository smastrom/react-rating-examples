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
const CUSTOM_ITEM_LABELS_IDS = ['label_1', 'label_2', 'label_3', 'label_4', 'label_5'];

export const CustomVisibleLabels = () => {
  const [ratingValue, setRatingValue] = useState(4);

  return (
    <div
      role="group"
      style={{
        textAlign: 'center',
        maxWidth: 450,
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
        spaceBetween="medium"
        spaceInside="medium"
        visibleLabelId={CUSTOM_GROUP_LABEL_ID}
        visibleItemLabelIds={CUSTOM_ITEM_LABELS_IDS}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          justifyItems: 'center',
          fontSize: '0.925rem',
          lineHeight: 1,
        }}
      >
        {CUSTOM_ITEM_LABELS.map((label, index) => (
          <span
            key={label}
            id={CUSTOM_ITEM_LABELS_IDS[index]}
            style={{
              opacity: index + 1 === ratingValue ? 1 : 0.35,
              textDecoration: index + 1 === ratingValue ? 'underline' : 'inherit',
              padding: '0 5%',
              marginTop: '5px',
            }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export const CustomVisibleLabelsCode = `

const CUSTOM_GROUP_LABEL = 'Rate GitHub Plaza Hotel';
const CUSTOM_GROUP_LABEL_ID = 'group_label';

const CUSTOM_ITEM_LABELS = ['Bad', 'Poor', 'Average', 'Very Good', 'Excellent'];
const CUSTOM_ITEM_LABELS_IDS = ['label_1', 'label_2', 'label_3', 'label_4', 'label_5'];

const App = () => {
  const [ratingValue, setRatingValue] = useState(4);

  return (
    <div role="group">
      <h2 id={CUSTOM_GROUP_LABEL_ID}>{CUSTOM_GROUP_LABEL}</h2>
      <Rating
        value={ratingValue}
        itemStyles={customStyles}
        onChange={(selectedValue) => setRatingValue(selectedValue)}
        visibleLabelId={CUSTOM_GROUP_LABEL_ID}
        visibleItemLabelIds={CUSTOM_ITEM_LABELS_IDS}
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          justifyItems: 'center',
        }}
      >
        {CUSTOM_ITEM_LABELS.map((label, index) => (
          <span
            key={label}
            id={CUSTOM_ITEM_LABELS_IDS[index]}
            style={{
              opacity: index + 1 === ratingValue ? 1 : 0.35,
              textDecoration: index + 1 === ratingValue ? 'underline' : 'inherit',
              padding: '0 5%',
            }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};
`;
